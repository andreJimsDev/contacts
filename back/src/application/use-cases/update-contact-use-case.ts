import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/contact';
import { UseCase } from './use-case';
import { ContactRepository } from '../repositories/contact-repository';

export interface UpdateContactUseCaseRequest {
  id: number;
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

export interface UpdateContactUseCaseResponse {
  contact: Contact;
}

@Injectable()
export class UpdateContactUseCase
  implements UseCase<UpdateContactUseCaseRequest, UpdateContactUseCaseResponse>
{
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(
    request: UpdateContactUseCaseRequest,
  ): Promise<UpdateContactUseCaseResponse> {
    const contact = new Contact({ ...request }, request.id);

    await this.contactRepository.update(contact);

    return { contact };
  }
}
