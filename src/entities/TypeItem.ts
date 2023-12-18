import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class TypeItem {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsNumber()
    private _id: number;

    @Expose({name: 'description'})
    @IsNotEmpty()
    @IsString()
    private _description: string;

    constructor(id: number, description: string){
        this._id = id;
        this._description = description;
    }

    get id(): number {
        return this._id;
    }

    get description(): string {
        return this._description;
    }

}