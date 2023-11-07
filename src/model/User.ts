export class UserDetails {

  static UNKNOW = new UserDetails(
    "UNKNOW",
    "UNKNOW",
    "UNKNOW",
    "UNKNOW"
  )
  constructor(
    public userId: string,
    public username: string,
    public nickname: string,
    public email: string
  ) {}
}
