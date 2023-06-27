import { Module } from '@nestjs/common';

import { PrismaService } from './prisma/prisma.service';
import { ContactRepository } from '../../application/repositories/contact-repository';
import { PrismaContactsRepository } from './prisma/repositories/prisma-contacts-repository';

@Module({
  providers: [
    PrismaService,
    {
      provide: ContactRepository,
      useClass: PrismaContactsRepository,
    },
  ],
  exports: [
    {
      provide: ContactRepository,
      useClass: PrismaContactsRepository,
    },
  ],
})
export class DatabaseModule {}
