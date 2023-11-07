export class CreateSessionRequest {
  constructor(
    public name: string,
    public scope: string,
    public description: string,
    public keywords: string,
    public countParticipants: string
  ) {
  }
}
