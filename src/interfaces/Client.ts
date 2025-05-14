export interface IClient {
  guid: string;
  name: string;
  contatDetails: IClientContactDetails;
  isActive: boolean;
  notes?: string;
  createdAt: string;
}

export interface IClientContactDetails{
  address: string;
  email: string;
  phone: string;
  fax: string;
}

export type CreateClientDto = Omit<IClient, 'guid'>;

export type UpdateClientDto = Partial<Omit<IClient, 'guid' | 'createdAt'>>;
