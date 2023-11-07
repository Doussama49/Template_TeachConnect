import {FormGroup} from "@angular/forms";

export class AddSubjectToPollingStationRequest {
  constructor(
    public name: string,
    public pathImg: string,
    public description: string,
  ) {}
}
