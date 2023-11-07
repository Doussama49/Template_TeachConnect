class GradeDto {
  constructor(
    public nameAssigned: string,
    public note: number,
  ) {
  }
}

export class Results {
  constructor(
    public nameOfGroup: string,
    public average: number,
    public grades: GradeDto[],
  ) {
  }
}

export class GetResultsResponse {

  static EMPTY = new GetResultsResponse([]);

  constructor(
    public results: Results[],
  ) {
  }
}

