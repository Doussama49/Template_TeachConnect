import {FormGroup} from "@angular/forms";

export class CreatePollingStationRequest {
  constructor(
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
    public start: Date,
    public end: Date,
  ) {}
}
