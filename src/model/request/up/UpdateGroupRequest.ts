export class UpdateGroupRequest {
  constructor(
    public name: string,
    public personsInGroup: AddPersonInGroupRequest[],
  ) {
  }
}

export class AddPersonInGroupRequest {
  constructor(
    public name: string,
    public email: string
  ) {
  }
}
