import {Subject} from "./Subject";
import {UserDetails} from "./User";

export class PollingStationFull {

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
    public subjects: Subject[],
    public users: UserDetails[]
  ) {}

  public sizeOfSubjects(): number {
    return this.subjects.length;
  }

  static EMPTY = new PollingStationFull(
    "", // pollingStationId
    "", // administratorId
    "", // nameOfAdministrator
    "", // name
    "", // category
    "", // description
    "", // keywords
    "", // typeNotation
    false, // notationVisible
    0, // userLimit
    "", // scope
    "", // password
    "", // pollType
    new Date(), // startPoll
    new Date(), // endPoll
    [], // subjects
    []
  );
}
