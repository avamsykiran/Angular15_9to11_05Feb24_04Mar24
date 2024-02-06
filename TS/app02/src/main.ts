import greet from './welcome';
import arraydemoFunction from './arrayDemo';
import checkPrime from './numOperations';
import enumsDemofunction from './enumsDemo';
import { RegularEmployee, Manager} from './oopDemo';

console.log(greet("Vamsy Kiran"));
console.log(greet("Sagar Guru Charan","Dr. "));

arraydemoFunction();

console.log(checkPrime(169));
console.log(checkPrime(1024));
console.log(checkPrime(17));

enumsDemofunction();

let emp = new RegularEmployee("Vamsy ","Kiran",{doorNumber:"9015",city:"VSP",state:"AP"},45000);
let emp2 = new RegularEmployee("Vinay ","Varma","#5678,MG Road,Banglore,Karnataka",35000);
let mgr = new Manager("Murthy ","KGN",{doorNumber:"5155",city:"VSP",state:"AP"},54000,8900);

console.log(emp);
console.log(emp.netPay());
console.log(emp2);
console.log(emp2.netPay());
console.log(mgr);
console.log(mgr.netPay());