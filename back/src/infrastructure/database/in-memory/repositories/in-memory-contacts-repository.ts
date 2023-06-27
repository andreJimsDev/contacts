import { Contact } from '@/application/entities/contact';
import { ContactRepository } from '@/application/repositories/contact-repository';

export class InMemoryContactsRepository implements ContactRepository {
  private contacts: Contact[] = [];

  async create(contact: Contact): Promise<Contact> {
    contact.id = this.contacts.length++;
    this.contacts.push(contact);
    return contact;
  }

  async findAll(): Promise<Contact[]> {
    return this.contacts;
  }

  async update(contact: Contact): Promise<void> {
    const index = this.contacts.findIndex((n) => n.id === contact.id);

    this.contacts[index] = contact;
  }

  async delete(id: number): Promise<void> {
    this.contacts = this.contacts.filter((n) => n.id === id);
  }
}
