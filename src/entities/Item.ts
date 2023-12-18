import Sale from "./Sale";
import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import TypeItem from "./TypeItem";

export default class Item {

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

    @Expose({name: 'type_item'})
    @Type(() => TypeItem)
    private _type_item: TypeItem;


    constructor(id: number, description: string, name: string, img_item: string, unit_price: number, sale: Sale, typeItem: TypeItem) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._img_item = img_item;
        this._unit_price = unit_price;
        this._sale = sale;
        this._type_item = typeItem;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get img(): string {
        return this._img_item;
    }

    get description(): string {
        return this._description;
    }

    get unitPrice(): number {
        return this._unit_price;
    }

    get sale(): Sale {
        return this._sale;
    }

    get typeItem(): TypeItem {
        return this._type_item;
    }

}