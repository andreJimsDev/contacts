import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/database.module';
import { ContactsController } from './controllers/contacts.controller';
import { AddContactUseCase } from '@/application/use-cases/add-contact-use-case';
import { UpdateContactUseCase } from '@/application/use-cases/update-contact-use-case';
import { DeleteContactUseCase } from '@/application/use-cases/delete-contact-use-case';
import { FindAllContactUseCase } from '@/application/use-cases/find-all-contact-use-case';

@Module({
  imports: [DatabaseModule],
  controllers: [ContactsController],
  providers: [
    AddContactUseCase,
    UpdateContactUseCase,
    DeleteContactUseCase,
    FindAllContactUseCase,
  ],
})
export class HttpModule {}
