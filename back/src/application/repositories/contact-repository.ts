import { Contact } from '../entities/contact';

export abstract class ContactRepository {
  abstract create(contact: Contact): Promise<Contact>;
  abstract update(contact: Contact): Promise<void>;
  abstract delete(id: number): Promise<void>;
  abstract findAll(): Promise<Contact[]>;
}
