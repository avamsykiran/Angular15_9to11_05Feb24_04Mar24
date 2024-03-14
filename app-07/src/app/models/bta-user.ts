import { BtaRole } from "./bta-role";

export interface BtaUser {
    id?:number;
    email:string;
    password:string;
    role:BtaRole
}
