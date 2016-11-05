import { Phone } from './phone';

export class Contact {
    private _ID: string;
    private _NAME: string;
    private _COMPANY: string;
    private _phoneList: Phone[];

    constructor() { }

    get ID(): string {
        return this._ID;
    }

    set ID(ID: string) {
        this._ID = ID;
    }

    get NAME(): string {
        return this._NAME;
    }

    set NAME(NAME: string) {
        this._NAME = NAME;
    }

    get COMPANY(): string {
        return this._COMPANY;
    }

    set COMPANY(COMPANY: string) {
        this._COMPANY = COMPANY;
    }

    get phoneList(): Phone[] {
        return this._phoneList;
    }

    set phoneList(phoneList: Phone[]) {
        this._phoneList = phoneList;
    }
}