export interface ICustomer {
  id?: string;
  name?: string;
  middleName?: string;
  motherLastName?: string;
  lastName?: string;
  status?: string;
  identityDocument?: {
    type: string;
    number: string;
  };
  mobile?: string;
  email?: string;
}

export interface ICredentials {
  id?: string;
  mobile: string;
  password: string;
}

export enum CustomerActions {
  FIND_BY_MOBILE = 'FIND_BY_MOBILE',
  FIND_BY_DOCUMENT_IDENTITY = 'FIND_BY_DOCUMENT_IDENTITY',
  DELETE_BY_DOCUMENT_IDENTITY = 'DELETE_BY_DOCUMENT_IDENTITY',
  DELETE_BY_MOBILE = 'DELETE_BY_MOBILE',
  CHANGE_PASSWORD = 'CHANGE_PASSWORD',
  CREATE_AUTH = 'CREATE_AUTH',
  CREATE = 'CREATE',
}
