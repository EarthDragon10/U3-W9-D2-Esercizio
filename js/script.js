"use strict";
class BankAccount {
    constructor(id, balance) {
        this.id = id;
        this.balance = balance;
    }
}
class SonAccount {
    constructor(balanceInit) {
        this.balanceInit = 0; // saldo iniziale
        this.balance = 0;
        this.balanceInit = balanceInit;
        this.balance = this.balance;
    }
    setBalance() {
        return this.balance = this.balanceInit;
    }
    deposit(quantityDeposit) {
        this.balance = this.balanceInit + quantityDeposit;
        return this.balance;
    }
    withdraw(quantityDraw) {
        return this.balance -= quantityDraw;
    }
    printBalance() {
        console.log(`Saldo del sonAccount: ${this.balance}`);
    }
    getBilance() {
        return this.balance;
    }
}
class MotherAccount extends SonAccount {
    constructor() {
        super(...arguments);
        this.interestPercentual = 10;
        this.calcInterest = 0;
    }
    addInterest() {
        this.calcInterest = (this.balance * this.interestPercentual) / 100;
        console.log("tasso di interesse", this.calcInterest);
        return this.balance += this.calcInterest;
    }
    printAddedInterestBalance() {
        console.log("Salo + interesse", this.balance);
    }
}
const bankCurrent_1 = new BankAccount(700058587, 15000);
const bankCurrent_2 = new BankAccount(32230400, 2300);
// OPERAZIONE BANCARIE DEL PRIMO CONTO CORRENTE
const sonAccount = new SonAccount(bankCurrent_1.balance);
console.log("sonAccount", sonAccount);
// Registro il saldo iniziale
sonAccount.setBalance();
console.log("sonAccount", sonAccount);
// Operazione di versamento
sonAccount.deposit(350);
// Stampo il saldo
sonAccount.printBalance();
// Operazione di prelievo
sonAccount.withdraw(150);
// Stampo il saldo
sonAccount.printBalance();
// OPERAZIONE BANCARIE DEL SECONDO CONTO CORRENTE
const sonAccount_2 = new SonAccount(bankCurrent_2.balance);
console.log("sonAccount_2", sonAccount_2);
// Registro il saldo iniziale
sonAccount_2.setBalance();
console.log("sonAccount_2", sonAccount_2);
// Operazione di versamento
sonAccount_2.deposit(350);
// Stampo il saldo
sonAccount_2.printBalance();
// Operazione di prelievo
sonAccount_2.withdraw(150);
// Stampo il saldo
sonAccount_2.printBalance();
// Operazioni con MotherAccount_1
const motherAccount_1 = new MotherAccount(sonAccount.getBilance());
console.log({ motherAccount_1 });
motherAccount_1.setBalance();
console.log({ motherAccount_1 });
motherAccount_1.printBalance();
motherAccount_1.addInterest();
motherAccount_1.printAddedInterestBalance();
// Operazioni con MotherAccount_1
const motherAccount_2 = new MotherAccount(sonAccount_2.getBilance());
console.log({ motherAccount_2 });
motherAccount_2.setBalance();
console.log({ motherAccount_2 });
motherAccount_2.printBalance();
motherAccount_2.addInterest();
motherAccount_2.printAddedInterestBalance();
