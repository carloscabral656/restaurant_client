export class Credential {
    protected email : number;
    protected password: string;

    constructor(email: number, password: string){
        this.email = email;
        this.password = password;
    }
}