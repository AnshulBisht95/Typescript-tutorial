let id1 = Symbol();
let id2 = Symbol();
console.log(id1 == id2) //false

//symbol with description
let id3 = Symbol("id");
let id4 = Symbol("id");
let user = {
    [id3]: 1, //Symbol(id): 1
    [id4]: 2  //Symbol(id): 2
}
console.log(user)

let auth: symbol = Symbol();
console.log(auth)