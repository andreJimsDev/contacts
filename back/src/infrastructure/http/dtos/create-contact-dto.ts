import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateContactDto {
  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  firstName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;
}
