export class Historial{
    constructor(
        public id: number,
        public bank: string,
        public name: string,
        public document: string,
        public last_name: string,
        public amount: number,
        public nationality: string,
        public transaction_date: string,
        public type: string
        )
        {}
}
