import { Expose, Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";
import Item from "./Item";

export default class Menu {

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

    @Expose({name: 'itens'})
    @Type(() => Item)
    private _items: Item[];

    constructor(id: number, name: string, description: string, items: Item[]) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._items  = items;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name
    }

    get items(): Item[] {
        return this._items;
    }

}