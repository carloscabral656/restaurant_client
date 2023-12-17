import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import Gastronomy from "./Gastronomy";
import Owner from "./Owner";
import { Evaluation } from "./Evaluation";
import Address from "./Address";

export default class Restaurant {

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

    @Expose({name: 'image_restaurant'})
    @IsNotEmpty()
    @IsString()
    private _image: string;

    @Expose({name: 'evaluation'})
    @IsNotEmpty()
    private _evaliation: number;

    @Expose({name: 'gastronomy'})
    @Type(() => Gastronomy)
    @IsNotEmpty()
    private _gastronomy: Gastronomy;

    @Expose({name: 'owner'})
    @Type(() => Owner)
    @IsNotEmpty()
    private _owner: Owner

    @Expose({name: 'address'})
    @Type(() => Address)
    @IsNotEmpty()
    private _address: Address;

    constructor(id: number, name: string, description: string, image: string, gastronomy: Gastronomy, owner: Owner, evaluation: number, address: Address){
        this._id = id;
        this._name = name;
        this._description = description;
        this._image = image;
        this._gastronomy = gastronomy;
        this._owner = owner;
        this._evaliation = evaluation;
        this._address = address;
    }

    get name(): string {
        return this._name;
    }

    get gastronomy(): Gastronomy {
        return this._gastronomy;
    }

    get evaluation(): number {
        return this._evaliation;
    }

    get image(): string {
        return this._image;
    }

}