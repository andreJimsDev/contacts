import { Injectable } from '@nestjs/common';
import { Contact } from '@/application/entities/contact';
import { ContactRepository } from '@/application/repositories/contact-repository';
import { PrismaService } from '../prisma.service';
import { PrismaContactMapper } from '../mappers/prisma-contacts-mapper';

@Injectable()
export class PrismaContactsRepository implements ContactRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(contact: Contact): Promise<Contact> {
    const contactPrismaData = PrismaContactMapper.toPrisma(contact);

    const contactCreated = await this.prismaService.contact.create({
      data: contactPrismaData,
    });

    return PrismaContactMapper.toDomain(contactCreated);
  }

  async update(contact: Contact): Promise<void> {
    const contactPrismaData = PrismaContactMapper.toPrisma(contact);

    await this.prismaService.contact.update({
      where: { id: contact.id },
      data: contactPrismaData,
    });
  }

  async delete(id: number): Promise<void> {
    console.log({ id });
    await this.prismaService.contact.delete({ where: { id } });
  }

  async findAll(): Promise<Contact[]> {
    const contacts = await this.prismaService.contact.findMany({});
    return contacts.map((contact) => PrismaContactMapper.toDomain(contact));
  }
}
