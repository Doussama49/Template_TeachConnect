export class CreateUserForm {
  private username: State;
  private nickname: State;
  private email: State;
  private password: State;
  private checkPassword: State;
  constructor() {
    this.username = State.NOT_SETTED
    this.nickname = State.NOT_SETTED
    this.password = State.NOT_SETTED
    this.checkPassword = State.NOT_SETTED
    this.email = State.NOT_SETTED
  }

  isValid() {
    return this.username == State.CORRECT &&
      this.nickname == State.CORRECT &&
      this.password == State.CORRECT &&
      this.checkPassword == State.CORRECT &&
      this.email == State.CORRECT;
  }

  public emailValid() {
    this.email = State.CORRECT
  }
  public emailNotValid() {
    this.email = State.INCORRECT
  }

  public passwordValid() {
    this.password = State.CORRECT
  }
  public passwordNotValid() {
    this.password = State.INCORRECT
  }

  public checkPasswordValid() {
    this.checkPassword = State.CORRECT
  }
  public checkPasswordNotValid() {
    this.checkPassword = State.INCORRECT
  }


}

export enum State {
  CORRECT,
  INCORRECT,
  NOT_SETTED

}
