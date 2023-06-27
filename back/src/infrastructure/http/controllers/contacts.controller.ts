import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import { CreateContactDto } from '../dtos/create-contact-dto';
import { ContactsMapper } from '../mappers/contacts-mapper';
import { UpdateContactUseCase } from '@/application/use-cases/update-contact-use-case';
import { AddContactUseCase } from '@/application/use-cases/add-contact-use-case';
import { DeleteContactUseCase } from '@/application/use-cases/delete-contact-use-case';
import { FindAllContactUseCase } from '@/application/use-cases/find-all-contact-use-case';
import { UpdateContactDto } from '../dtos/update-contact-dto';

@Controller('contacts')
export class ContactsController {
  constructor(
    private readonly addContactUseCase: AddContactUseCase,
    private readonly updateContactUseCase: UpdateContactUseCase,
    private readonly deleteContactUseCase: DeleteContactUseCase,
    private readonly findAllContactUseCase: FindAllContactUseCase,
  ) {}

  @Post()
  async add(@Body() body: CreateContactDto) {
    const { contact } = await this.addContactUseCase.execute(body);

    return { contact: ContactsMapper.toDto(contact) };
  }

  @Get()
  async fetchAll() {
    const { contacts } = await this.findAllContactUseCase.execute();

    return {
      contacts: contacts.map((contact) => ContactsMapper.toDto(contact)),
    };
  }

  @Put()
  async update(@Body() body: UpdateContactDto) {
    const { contact } = await this.updateContactUseCase.execute(body);

    return { contact: ContactsMapper.toDto(contact) };
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return await this.deleteContactUseCase.execute({ id: Number(id) });
  }
}
