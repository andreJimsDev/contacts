import { Contact } from '@/application/entities/contact';
import { Contact as PrismaContact } from '@prisma/client';

export class PrismaContactMapper {
  private constructor() {
    throw new Error(
      'PrismaContactMapper is a static class and should not be instantiated',
    );
  }

  public static toPrisma(contact: Contact): PrismaContact {
    return {
      id: contact.id,
      lastName: contact.lastName,
      firstName: contact.firstName,
      email: contact.email,
      phone: contact.phone,
    };
  }

  public static toDomain(contactPrismaData: PrismaContact) {
    return new Contact(
      {
        lastName: contactPrismaData.lastName,
        firstName: contactPrismaData.firstName,
        email: contactPrismaData.email,
        phone: contactPrismaData.phone,
      },
      contactPrismaData.id,
    );
  }
}
