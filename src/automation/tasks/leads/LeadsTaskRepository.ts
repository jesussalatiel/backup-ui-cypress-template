import { HeaderType } from '@ihf-rivendell/qa';
import { leadsRepository } from 'src/automation/settings';
import * as assert from 'assert';

class LeadsTaskRepository {
  /**
   * Creates a new lead based on the information provided in the table.
   * @param dataTable - Data table for leads creation comes from cucumber datatable.
   * @returns A promise that resolves with the response of the created lead.
   */

  async create(dataTable): Promise<any> {
    const buildRequest = this.buildCreate(dataTable);
    await leadsRepository.create(buildRequest);

    const response = await this.findByIdentityDocument(dataTable);
    assert.strictEqual(response.statusCode, 200);

    return response;
  }

  async delete(dataTable): Promise<boolean> {
    try {
      await leadsRepository.deleteByIdentityDocument({
        customer: {
          identityDocument: {
            type: dataTable.documentType,
            number: dataTable.documentNumber,
          },
        },
      });
    } catch (error) {
      return error.message.includes('Not found');
    }

    return true;
  }

  async findByIdentityDocument(dataTable): Promise<any> {
    const buildRequest = this.buildFindByIdentityDocument(dataTable);
    const response = await leadsRepository.findByIdentityDocument(buildRequest);
    return response;
  }

  private buildCreate(dataTable) {
    return {
      campaignId: dataTable.campaignId,
      product: {
        type: 'LOAN',
        subType: 'BNPL',
      },
      customer: {
        identityDocument: {
          type: dataTable.documentType,
          number: dataTable.documentNumber,
        },
      },
      amount: Number(dataTable.amount),
      interestRate: Number(dataTable.interestRate),
      annualNominalRate: dataTable.annualNominalRate,
      currency: dataTable.currency,
      expirationDate:
        parseInt(dataTable.expirationDate, 10) * 86400000 + Date.now(),
      creationDate: Date.now(),
      status: dataTable.status,
      type: dataTable.selectType,
    };
  }

  private buildFindByIdentityDocument(dataTable) {
    return {
      lead: {
        customer: {
          identityDocument: {
            number: dataTable.documentNumber,
            type: dataTable.documentType,
          },
        },
      },
      headerType: HeaderType.External,
    };
  }
}

export default new LeadsTaskRepository();
