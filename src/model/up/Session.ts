class PersonDto {
  constructor(
    public name: string,
    public email: string,
  ) {
  }
}

class GroupDto {
  constructor(
    public groupId: string,
    public name: string,
    public personsInGroup: PersonDto[]
  ) {
  }
}

export class GetSessionResponse {
  constructor(
    public personId: string,
    public sessionId: string,
    public name: string,
    public groupsOfSession: GroupDto[]
  ) {
  }
}

export class Session {

  static EMPTY = new Session("", "", "", []);
  constructor(
    public personId: string,
    public sessionId: string,
    public name: string,
    public groupsOfSession: GroupDto[]
  ) {
  }
}
