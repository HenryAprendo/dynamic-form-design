export class ValidatorsCustom {

  private _min = 0;

  private _max = 0;

  private _required = false;

  private _requiredTrue = false;

  private _email = false;

  private _minLength = 0;

  private _maxLength = 0;

  private _pattern:RegExp|string = '';

  constructor(){}

  get min(){
    return this._min;
  }

  public setMin(val:number){
    this._min = val;
    return this;
  }

  get max(){
    return this._max;
  }

  public setMax(val:number){
    this._max = val;
    return this;
  }

  get required(){
    return this._required;
  }

  public setReq(){
    this._required = !this._required;
    return this;
  }

  get requiredTrue(){
    return this._requiredTrue;
  }

  public setReqTrue(){
    this._requiredTrue = !this._requiredTrue;
    return this;
  }

  get email(){
    return this._email;
  }

  public setEmail(){
    this._email = !this._email;
    return this;
  }

  get minLength(){
    return this._minLength;
  }

  public setMinLength(val:number){
    this._minLength = val;
    return this;
  }

  get maxLength(){
    return this._maxLength;
  }

  public setMaxLength(val:number){
    this._maxLength = val;
    return this;
  }

  get pattern(){
    return this._pattern;
  }

  public setPattern(val:RegExp|string){
    this._pattern = val;
    return this;
  }


}














