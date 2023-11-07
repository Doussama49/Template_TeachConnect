export class UserError {

  private currentError: Error;
  constructor() {
    this.currentError = Error.NONE;
  }

  setCurrentError(error: Error) {
    this.currentError = error;
  }

  getMessage() : string {
    return this.currentError;
  }

  isError() {
    return this.currentError != Error.NONE;
  }
}

export enum Error {
  EMAIL_ERROR = "Ce mail est déja utilisé. Connectez vous ou choisissez en un autre",
  AUTHENTICATION_ERROR = "Votre mot de passe ou votre email est incorrect",
  UNKNOW_ERROR = "Une ereur s'est produite. Veuillez verifier vos informations",
  FORM_ERROR = "Veillez remplir le formulaire",
  NONE = ""
}
