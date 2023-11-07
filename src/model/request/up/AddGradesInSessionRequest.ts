

export class AddGradesInSessionRequest {
  constructor(
    public sessionId: string,
    public personId: string,
    public grades: AddGradeRequest[]
  ) {
  }
}

export class AddGradeRequest {
  constructor(
    public groupId: string,
    public personId: string,
    public grade: string,
  ) {
  }
}
