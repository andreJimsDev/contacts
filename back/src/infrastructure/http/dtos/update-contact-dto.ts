import { IsNotEmpty, IsEmail } from 'class-validator';

export class UpdateContactDto {
  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  lastName: string;

  @IsNotEmpty()
  firstName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  phone: string;
}
