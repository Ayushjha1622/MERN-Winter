// // class Car{
// //     constructor(name, year){
// //         this.name = name;
// //         this.year = year;
// //     }

// //     age(){
// //         const date = new Date();
// //         return date.getFullYear() - this.year;
// //     }
// // }


// // const myCar = new Car("benz", 2014);
// // console.log(myCar.age());


// class User{
//     constructor(name, id){
//         this.name = name;
//         this.id = id;
//     }

//     set name(val){
//         this._name = val.toUpperCase()
//     }

//     get name(){
//         return this._name.toUpperCase()
//     }

//     set id(val){
//         this._id = val.toUpperCase()
//     }

//     get id(){
//         return this._id.toUpperCase()
//     }
// }

// const ayush = new User("ayush", "12222791")
// console.log(ayush._name);
// console.log(ayush._id);


class Car{
    constructor(brand){
        this.carname = brand;
    }

    present(){
        return `I have a ${this.carname}.`;
    }
}


class Model extends Car{
    constructor(brand, mod){
        super(brand);
        this.model = mod;
}

    show(){
        return this.present() + ', it is a ' + this.model;
    }
}

const myCar = new Model("benz","S-Class")
console.log(myCar.show());
