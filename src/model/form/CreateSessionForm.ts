import {AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from "@angular/forms";
import {CreatePollingStationRequest} from "../request/CreatePollingStationRequest";
import {CreateSessionRequest} from "../request/up/CreateSessionRequest";

export class CreateSessionForm {

  private readonly _form: FormGroup;
  private readonly _firstStepForm: FormGroup;
  private readonly _secondStepForm: FormGroup;
  private readonly _finalStep: FormGroup;

  constructor(private _formBuilder: FormBuilder) {
    this._form = this._formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      keywords: ['', Validators.required],
      typeNotation: ['', Validators.required],
      notationVisible: ['', Validators.required],
      userLimit: ['', Validators.required],
      scope: ['', Validators.required],
      password: ['', Validators.required],
      pollType: ['', Validators.required],
      startPoll: ['', Validators.required],
      endPoll: ['', Validators.required],
    })

    this._firstStepForm = this._formBuilder.group({
      name: ['', Validators.required],
      category: ['', Validators.required],
      description: ['', Validators.required],
      keywords: [[], Validators.required],
    })

    this._secondStepForm = this._formBuilder.group({
      typeNotation: ['', Validators.required],
      notationVisible: [false, Validators.required],
      scope: ['', Validators.required],
      startPoll: ['', Validators.required],
      endPoll: ['', Validators.required],

    })

    this._finalStep = this._formBuilder.group({
      password: [''],
      userLimit: [''],
    })
  }



  constructRequest(): CreateSessionRequest {
    const finalStepValues = this.finalStep.value
    const firstStepFormValues = this.firstStepForm.value
    const secondStepFormValues = this.secondStepForm.value

    return new CreateSessionRequest(
      firstStepFormValues['name'],
      secondStepFormValues['scope'],
      firstStepFormValues['description'],
      firstStepFormValues['keywords'].join('-'),
      "0"
    )
  }


  isPrivate() {
    return this.secondStepForm.value['scope'] == "PRIVATE";
  }
  get form(): FormGroup {
    return this._form;
  }

  get firstStepForm(): FormGroup {
    return this._firstStepForm;
  }

  get secondStepForm(): FormGroup {
    return this._secondStepForm;
  }

  get finalStep(): FormGroup {
    return this._finalStep;
  }

  get formBuilder(): FormBuilder {
    return this._formBuilder;
  }

  getForm(): FormGroup {
    return this._form;
  }


}
