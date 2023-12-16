export default class WaitingTime {

    private _from: number;
    private _until: number;
    private _timeUnit: string;

    constructor(from: number, until: number, timeUnit: string){
        this._from = from;
        this._until = until;
        this._timeUnit = timeUnit;
    }

    get from() : number {
        return this._from;
    }

    get until() : number {
        return this._until;
    }

    get timeUntil() : string {
        return this._timeUnit;
    }

}