export class Phone {
    private _ID: string;
    private _PHONE: string;

    constructor() { }

    get ID(): string {
        return this._ID;
    }

    set ID(ID: string) {
        this._ID = ID;
    }

    get PHONE(): string {
        return this._PHONE;
    }

    set PHONE(PHONE: string) {
        this._PHONE = PHONE;
    }
}