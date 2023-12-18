import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class Sale {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsNumber()
    private _id: number;

    @Expose({name: 'name'})
    @IsNotEmpty()
    @IsNumber()
    private _name: string;

    @Expose({name: 'description'})
    @IsNotEmpty()
    @IsNumber()
    private _description: string;

    @Expose({name: 'discount'})
    @IsNotEmpty()
    @IsNumber()
    private _discount: number;

    @Expose({name: 'begin_at'})
    @Type(() => Date)
    private _begin_at: Date;

    @Expose({name: 'end_at'})
    @Type(() => Date)
    private _end_at: Date;

    constructor(id: number, name: string, description: string, discount: number, begin_at: Date, end_at: Date) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._discount = discount;
        this._begin_at = begin_at;
        this._end_at = end_at;
    }

    get discount(): number {
        return this._discount;
    }

}