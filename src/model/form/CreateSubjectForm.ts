import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {CreatePollingStationRequest} from "../request/CreatePollingStationRequest";
import {AddSubjectToPollingStationRequest} from "../request/AddSubjectToPollingStationRequest";

export class CreateSubjectForm {

  private readonly _form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this._form = this.formBuilder.group({
      name: ['', Validators.required],
      pathImg: [''],
      description: ['', Validators.required],
    })
  }

  constructRequest(): AddSubjectToPollingStationRequest {
    const formValue = this._form.value

    return new AddSubjectToPollingStationRequest(
      formValue['name'],
      formValue['pathImg'],
      formValue['description'],
    )
  }


  get form(): FormGroup {
    return this._form;
  }
}
