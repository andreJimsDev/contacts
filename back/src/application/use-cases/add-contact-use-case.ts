import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/contact';
import { UseCase } from './use-case';
import { ContactRepository } from '../repositories/contact-repository';

export interface AddContactUseCaseRequest {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

export interface AddContactUseCaseResponse {
  contact: Contact;
}

@Injectable()
export class AddContactUseCase
  implements UseCase<AddContactUseCaseRequest, AddContactUseCaseResponse>
{
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(
    request: AddContactUseCaseRequest,
  ): Promise<AddContactUseCaseResponse> {
    const newContact = new Contact({ ...request });

    const contact = await this.contactRepository.create(newContact);

    return { contact };
  }
}
