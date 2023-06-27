import { Contact } from '@/application/entities/contact';
import { ContactDto } from '../dtos/contact-dto';

export class ContactsMapper {
  private constructor() {
    throw new Error(
      'ContactsMapper is a static class and should not be instantiated',
    );
  }

  public static toDto(contact: Contact): ContactDto {
    return {
      id: contact.id,
      lastName: contact.lastName,
      firstName: contact.firstName,
      email: contact.email,
      phone: contact.phone,
    };
  }
}
