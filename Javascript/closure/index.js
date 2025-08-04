

// let name = "manish";
function outerFunction(){
     let name = "aj";

    function innerFunction(){
      
        console.log(name);
    }
    return innerFunction;
}

let inner = outerFunction()

inner();