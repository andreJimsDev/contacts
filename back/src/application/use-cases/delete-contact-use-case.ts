import { Injectable } from '@nestjs/common';
import { Contact } from '../entities/contact';
import { UseCase } from './use-case';
import { ContactRepository } from '../repositories/contact-repository';

export interface DeleteContactUseCaseRequest {
  id: number;
}

export interface DeleteContactUseCaseResponse {
  isDeleted: boolean;
}

@Injectable()
export class DeleteContactUseCase
  implements UseCase<DeleteContactUseCaseRequest, DeleteContactUseCaseResponse>
{
  constructor(private readonly contactRepository: ContactRepository) {}

  async execute(
    request: DeleteContactUseCaseRequest,
  ): Promise<DeleteContactUseCaseResponse> {
    try {
      await this.contactRepository.delete(request.id);
      return { isDeleted: true };
    } catch (e) {
      console.log(e.message);
      return { isDeleted: false };
    }
  }
}
