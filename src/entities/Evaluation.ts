import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber } from "class-validator";

export class Evaluation {

    @Expose({name: 'evaluation'})
    @IsNotEmpty()
    @IsNumber()
    protected _value: number;

    constructor(value: number){
        this._value = value;
    }

    get value(): number {
        return this._value;
    }
}