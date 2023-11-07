export class CreateUserRequest {
  constructor(
    public username: string,
    public nickname: string,
    public email: string,
    public password: string,
  ) {}
}
