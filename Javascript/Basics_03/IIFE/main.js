// Immediately Invoked Function Expressions

(function chai() {
    console.log(`DB Connected`);
    
})();


(function aurcode(){
    console.log(`DB Connected Two`);
    
})()

((name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})('ayush')