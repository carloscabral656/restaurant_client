export default class User {
    protected _name: string;
    protected _email: string; 

    constructor(name: string, email: string){
        this._name = name;
        this._email = email
    }

    get name(): string {
        return this._name
    }

    get email(): string {
        return this._email
    }

    get addressAsString(): string {
        return ``;
    }
}