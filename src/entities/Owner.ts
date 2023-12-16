export default class Owner {

    private _id: number;
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