import { TxnType } from "./txn-type";

export interface Txn {
    id:number;
    descp:string;
    amount:number;
    dot:Date;
    type:TxnType;
    accountId:number;
    editable?:boolean;
}
