import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsString, IsStrongPassword } from "class-validator";
import Address from "./Address";

export default class User {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsString()
    protected _id: number;

    @Expose({name: 'name'})
    @IsNotEmpty()
    @IsString()
    protected _name: string;

    @Expose({name: 'email'})
    @IsNotEmpty()
    @IsString()
    protected _email: string; 

    @Expose({name: 'address'})
    @Type(() => Address)
    protected _address: Address

    constructor(id: number, name: string, email: string, address: Address){
        this._id = id;
        this._name = name;
        this._email = email;
        this._address = address;
    }

    get name(): string {
        return this._name
    }

    get email(): string {
        return this._email
    }

    get address(): Address {
        return this._address;
    }

}