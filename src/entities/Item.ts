import Sale from "./Sale";
import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export default class Item {

    @Expose({name: 'id'})
    @IsNotEmpty()
    @IsNumber()
    private _id: number;

    @Expose({name: 'description'})
    @IsNotEmpty()
    @IsString()
    private _description: string;

    @Expose({name: 'img_item'})
    @IsNotEmpty()
    @IsString()
    private _img_item: string;

    @Expose({name: 'unit_price'})
    @IsNotEmpty()
    @IsNumber()
    private _unit_price: number;

    @Expose({name: 'sale'})
    @Type(() => Sale)
    private _sale: Sale;

    constructor(id: number, description: string, img_item: string, unit_price: number, sale: Sale) {
        this._id = id;
        this._description = description;
        this._img_item = img_item;
        this._unit_price = unit_price;
        this._sale = sale;
    }
}