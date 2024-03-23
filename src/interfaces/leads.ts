export interface ILeads {
  id?: string;
  customer?: {
    id?: string;
    identityDocument: {
      type: string;
      number: string;
    };
  };
  amount?: number;
  currency?: string;
  product?: {
    type: string;
    subType: string;
  };
  status?: string;
  lastUpdateDate?: number;
  expirationDate?: number;
  creationDate?: number;
  campaignId?: number;
  interestRate?: number;
  annualNominalRate?: string;
  type?: string;
}

export enum LeadsActions {
  CREATE = 'CREATE',
  DELETE = 'DELETE',
}
