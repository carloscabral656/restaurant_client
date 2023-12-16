import { Expose } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class Gastronomy {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsNumber()
    private _id: number;

    @Expose({name: 'name'})
    @IsNotEmpty()
    @IsString()
    private _name: string;

    @Expose({name: 'description'})
    @IsNotEmpty()
    @IsString()
    private _description: string;

    @Expose({name: 'imagem'})
    @IsNotEmpty()
    @IsString()
    private _image: string;

    constructor(id: number, name: string, image: string, description: string){
        this._id = id;
        this._name = name;
        this._description = description;
        this._image = image;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get description(): string {
        return this._description;
    }

    get image(): string {
        return this._image;
    }

}