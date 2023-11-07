export class DemandJoinStationNotification {
  constructor(
    public demandId: string,
    public nameRequestUser: string,
    public namePollingStation: string
  ) {
  }
}
