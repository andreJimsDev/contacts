export interface ContactProps {
  lastName: string;
  firstName: string;
  email: string;
  phone: string;
}

export class Contact {
  private props: ContactProps;
  private _id?: number;

  constructor(props: ContactProps, id?: number) {
    this._id = id;

    this.props = {
      ...props,
    };
  }

  public get id(): number {
    return this._id;
  }

  public set id(id: number) {
    this._id = id;
  }

  public get lastName(): string {
    return this.props.lastName;
  }

  public set lastName(lastName: string) {
    this.props.lastName = lastName;
  }

  public get firstName(): string {
    return this.props.firstName;
  }

  public set firstName(firstName: string) {
    this.props.firstName = firstName;
  }

  public get email(): string {
    return this.props.email;
  }

  public set email(email: string) {
    this.props.email = email;
  }

  public get phone(): string {
    return this.props.phone;
  }

  public set phone(phone: string) {
    this.props.phone = phone;
  }
}
