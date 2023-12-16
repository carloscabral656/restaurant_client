export default class Gastronomy {

    private _id: number;
    private _name: string;
    private _image: string;

    constructor(id: number, name: string, image: string){
        this._id = id;
        this._name = name;
        this._image = image;
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get image(): string {
        return this._image;
    }

}