export default class Address {

    private _street: string;
    private _neighborhood: string;
    private _number: number;
    private _city: string;
    private _state: string;

    constructor(street: string, neighborhood: string, number: number, city: string, state: string) {
        this._street = street;
        this._neighborhood = neighborhood;
        this._number = number;
        this._city = city;
        this._state = state;
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