import { BtaRole } from "./bta-role";

export interface BtaUser {
    id:number;
    userName:string;
    password:string;
    role:BtaRole
}
