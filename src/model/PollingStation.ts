export class PollingStation {
  static EMPTY_LIST = []
  constructor(
    public pollingStationId: string,
    public administratorId: string,
    public nameOfAdministrator: string,
    public name: string,
    public category: string,
    public description: string,
    public keywords: string,
    public typeNotation: string,
    public notationVisible: boolean,
    public userLimit: number,
    public scope: string,
    public password: string,
    public pollType: string,
    public startPoll: Date,
    public endPoll: Date,
  ) {}
}
