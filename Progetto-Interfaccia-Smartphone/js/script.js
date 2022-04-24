"use strict";
class FirstUser {
    constructor(_credito, _numeroChimate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChimate;
    }
    ricarica(credito, creditoRicarica) {
        this.credito += creditoRicarica;
    }
    chiamata(credito, minutiDurata) {
        this.credito = this.credito - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    numero404() {
        return this.credito;
    }
}
let user2 = new FirstUser(10, 6);
user2.ricarica(user2.credito, 10);
user2.ricarica(user2.credito, 5);
user2.chiamata(user2.credito, 25);
user2.chiamata(user2.credito, 32);
console.log("Primo utente");
console.log(`Valore carica disponibile: ${user2.numero404()}€ 
numero chiamate: ${user2.getNumeroChiamata()}`);
user2.azzeraChiamate();
console.log(`dopo azzeramento delle chiamate, numero chiamate: ${user2.getNumeroChiamata()} `);
class SecondUser {
    constructor(_credito, _numeroChimate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChimate;
    }
    ricarica(credito, creditoRicarica) {
        this.credito += creditoRicarica;
    }
    chiamata(credito, minutiDurata) {
        this.credito = this.credito - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    numero404() {
        return this.credito;
    }
}
let user1 = new FirstUser(100, 53);
user1.ricarica(user1.credito, 20);
user1.ricarica(user1.credito, 30);
user1.chiamata(user1.credito, 104);
user1.chiamata(user1.credito, 69);
console.log("Secondo utente");
console.log(`Valore carica disponibile: ${user1.numero404()}€ 
numero chiamate: ${user1.getNumeroChiamata()}`);
user1.azzeraChiamate();
console.log(`dopo azzeramento delle chiamate, numero chiamate: ${user1.getNumeroChiamata()} `);
class ThirdUser {
    constructor(_credito, _numeroChimate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChimate;
    }
    ricarica(credito, creditoRicarica) {
        this.credito += creditoRicarica;
    }
    chiamata(credito, minutiDurata) {
        this.credito = this.credito - (minutiDurata * 0.20);
        this.numeroChiamate++;
    }
    getNumeroChiamata() {
        return this.numeroChiamate;
    }
    azzeraChiamate() {
        this.numeroChiamate = 0;
    }
    numero404() {
        return this.credito;
    }
}
let user3 = new FirstUser(20, 3);
user3.ricarica(user3.credito, 15);
user3.ricarica(user3.credito, 20);
user3.chiamata(user3.credito, 100);
user3.chiamata(user3.credito, 23);
console.log("Terzo utente");
console.log(`Valore carica disponibile: ${user3.numero404()}€ 
numero chiamate: ${user3.getNumeroChiamata()}`);
user3.azzeraChiamate();
console.log(`dopo azzeramento delle chiamate, numero chiamate: ${user3.getNumeroChiamata()} `);
