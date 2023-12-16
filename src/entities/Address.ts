import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class Address {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsNumber()
    private _id: number;

    @Expose({name: 'street'})
    @IsNotEmpty()
    @IsString()
    private _street: string;

    @Expose({name: 'neighborhood'})
    @IsNotEmpty()
    @IsString()
    private _neighborhood: string;

    @Expose({name: 'number'})
    @IsNotEmpty()
    @IsNumber()
    private _number: number;

    @Expose({name: 'city'})
    @IsNotEmpty()
    @IsString()
    private _city: string;

    @Expose({name: 'state'})
    @IsNotEmpty()
    @IsString()
    private _state: string;

    constructor(id: number, street: string, neighborhood: string, number: number, city: string, state: string) {
        this._id = id;
        this._street = street;
        this._neighborhood = neighborhood;
        this._number = number;
        this._city = city;
        this._state = state;
    }

    get id(): number {
        return this._id;
    }

    get street():string {
        return this._street;
    }

    get neighborhood():string {
        return this._neighborhood;
    }

    get number():number {
        return this._number;
    }

    get city():string {
        return this._city;
    }

    get state():string {
        return this._state;
    }

}