import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class Owner {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsNumber()
    private _id: number;

    @Expose({name: 'name'})
    @IsNotEmpty()
    @IsString()
    private _name: string;

    constructor(id: number, name: string){
        this._id = id;
        this._name = name;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

}