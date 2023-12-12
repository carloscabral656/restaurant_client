export class Credential {
    protected email : Number;
    protected password: String;

    constructor(email: Number, password: String){
        this.email = email;
        this.password = password;
    }
}