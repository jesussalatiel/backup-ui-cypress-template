import { ICustomer } from '@interfaces/customer';
import { customersRepository } from 'src/automation/settings';
import * as assert from 'assert';
import { isValidUUID } from '@ihf-rivendell/qa';

class CustomerTaskRepository {
  /**
   * Creates a new customer based on the information provided in the table.
   * @param dataTable - Data table for customer creation comes from cucumber datatable.
   * @returns A promise that resolves with the response of the created customer.
   */
  async create(dataTable): Promise<any> {
    let existsCustomerInDynamo = await this.findByIdentityDocument(
      dataTable.documentType,
      dataTable.documentNumber,
    );

    if (existsCustomerInDynamo.statusCode === 200) {
      await this.deleteFromDynamo(
        dataTable.documentType,
        dataTable.documentNumber,
      );
      existsCustomerInDynamo = await this.findByIdentityDocument(
        dataTable.documentType,
        dataTable.documentNumber,
      );
      assert.strictEqual(existsCustomerInDynamo.statusCode, 404);
    }

    const dynamoResponse = await this.createInDynamo(dataTable);

    if (
      dynamoResponse.statusCode === 200
      && isValidUUID(dynamoResponse.body.id)
    ) {
      await this.createInCognito(dataTable, dynamoResponse.body.id);
    }

    const customerCreated = await this.findByIdentityDocument(
      dataTable.documentType,
      dataTable.documentNumber,
    );

    assert.strictEqual(customerCreated.statusCode, 200);

    return customerCreated;
  }

  async changePassword(dataTable): Promise<boolean> {
    await customersRepository.changePassword(
      `${dataTable.code}${dataTable.mobile}`,
      dataTable.newPassword || 'Done@123',
    );
    return true;
  }

  async deleteFromDynamo(
    documentType: string,
    documentNumber: string,
  ): Promise<any> {
    const response = await customersRepository.deleteByIdentityDocument(
      documentType,
      documentNumber,
    );
    return response;
  }

  async findByIdentityDocument(
    documentType: string,
    documentNumber: string,
  ): Promise<any> {
    const response = await customersRepository.findByIdentityDocument(
      documentType,
      documentNumber,
    );
    return response;
  }

  private async createInDynamo(dataTable): Promise<any> {
    const customerRequest: ICustomer = {
      name: dataTable.name,
      lastName: dataTable.lastName,
      motherLastName: dataTable.motherLastName,
      identityDocument: {
        type: dataTable.documentType,
        number: dataTable.documentNumber,
      },
      middleName: dataTable.middleName || undefined,
    };

    await customersRepository.createCustomer(customerRequest);

    const response = await this.findByIdentityDocument(
      dataTable.documentType,
      dataTable.documentNumber,
    );

    if (response.statusCode === 404) {
      throw new Error(
        `Warning: You need to register the customer in RENIEC with the following information: ${JSON.stringify(
          customerRequest,
          null,
          2,
        )}`,
      );
    }

    assert.strictEqual(response.statusCode, 200);
    assert.strictEqual(response.body.name, customerRequest.name);

    return response;
  }

  private async createInCognito(dataTable, dynamoId: string): Promise<any> {
    const buildRequest: ICustomer = {
      id: dynamoId,
      email: dataTable.email,
      mobile: `${dataTable.code}${dataTable.mobile}`,
      status: 'INVITED',
    };

    const createInCognito = await customersRepository.update(
      dynamoId,
      buildRequest,
      false,
    );

    assert.strictEqual(
      createInCognito.statusCode,
      200,
      JSON.stringify(createInCognito, null, 2),
    );
    assert.strictEqual(isValidUUID(createInCognito.body.id), true);

    const existsInCognito = await customersRepository.findByMobile(
      buildRequest.mobile,
    );

    assert.strictEqual(existsInCognito.statusCode, 200);
    assert.strictEqual(isValidUUID(existsInCognito.body.id), true);
    assert.strictEqual(existsInCognito.body.status, 'INVITED');

    return existsInCognito;
  }
}

export default new CustomerTaskRepository();
