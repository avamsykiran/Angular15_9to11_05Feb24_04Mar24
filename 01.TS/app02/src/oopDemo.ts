
interface AddressDetails {
    doorNumber:string;
    city:string;
    state:string;
}

type Address = string | AddressDetails;

abstract class Employee{
    firstName:string;
    lastName:string;
    address:Address;
    basicPay:number;

    constructor(firstName:string,lastName:string,address:Address,basicPay:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.address=address;
        this.basicPay=basicPay;
    }

    abstract netPay():number;
}

export class RegularEmployee extends Employee {

    protected tax:number;

    constructor(firstName:string,lastName:string,address:Address,basicPay:number){
        super(firstName,lastName,address,basicPay);
        this.tax=500;
    }

    netPay(): number {
        return this.basicPay - this.tax;
    }
}

export class Manager extends RegularEmployee {

    constructor(firstName:string,lastName:string,address:Address,basicPay:number,public hra:number){
        super(firstName,lastName,address,basicPay);
    }

    netPay(): number {
        return this.basicPay + this.hra - this.tax;
    }
}