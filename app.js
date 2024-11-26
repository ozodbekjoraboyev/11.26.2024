//! let user = {
//!     names: "ozodbek",
//!     age: 18,
//!     sebayu(a){
//!         console.log("hayur", this.names);    
//!     },
//!     griten(a,e){
//!      console.log(
//!         `salom mening ismim ${this.names}yoshim esa ${this.age}`
//!      ); 
//!      console.log(e)
//!     },

//! };
//! let user2 ={
//!     names:"Muhamad",
//!     age: 15
//! };
//! let user3 = {
//! names: "Asadbek",
//! age:18
//! }
//! user.griten.call(user2,"email.com",1000)
//! user.griten.apply(user2,["email.com",1000])



// ! misol

//!@ const produkt = {
//!@ prikr: 100,
//!@ tex:0.2
//!@ };
//!@ function callkliteon() {
//!@     return this.prikr + this.tex*this.prikr;
//!@ }
//!@ const totalprike = callkliteon.call(produkt)
//!@ console.log(totalprike);
//!@ const nums= [10,20,30,40,50];
//!@ const maxNumber =Math.max.apply(null,nums)
//!@ console.log(maxNumber);


















//!Homvork
// ?--> 1- micol
// const car1 = {
//     brend: `BMW`,
//     calclation(distanse, time) {
//         return `${this.brend} tezlik ${distanse / time}`
//     },
// };
// const car2 = {
//     brend: `Honda `
// };
// const speed = car1.calclation.call(car2, 100, 2)
// console.log(speed);

//?--> 2- moisol
// const ages = [25,30,18,22,40];
// const yourngest =Math.min.apply(null,ages)
// console.log(yourngest)

//?--> 3 - misol    
// const produkt = {
//     price: 200,
// };

// function appliDdiskaunt(discaunt){
//     return this.price - (this.price * discaunt )/100;
// }
// const tentPrapent = appliDdiskaunt.bind(produkt,10)


// console.log(tentPrapent());

//? 4-misol

// function greet (greeting){
//     return `${greeting}, ${this.name} ${this.role}`;
// }

// const person1 = {name: "Alice",role:"dasturchi"}
// const person2 = {name: "Bob",role:"dizayner"}


// const greetAlice = greet.call(person1, "salom")
// const greetBob =greet.call(person2, "salom")
// console.log(greetAlice);
// console.log(greetBob);



