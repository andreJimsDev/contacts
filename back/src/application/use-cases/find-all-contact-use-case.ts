import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/contact';
import { UseCase } from './use-case';
import { ContactRepository } from '../repositories/contact-repository';

export interface FindAllContactUseCaseResponse {
  contacts: Contact[];
}

@Injectable()
export class FindAllContactUseCase
  implements UseCase<unknown, FindAllContactUseCaseResponse>
{
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(): Promise<FindAllContactUseCaseResponse> {
    const contacts = await this.contactRepository.findAll();
    return { contacts };
  }
}
