// const json = '{ "name":"Ayush" ';

// try {
//     const user = JSON.parse(json)
// } catch (error) {
//     console.log("Invalid json:",error.message);
    
// }


// try {
//     console.log(userName);
    
// } catch (error) {
//     console.log("error caught: ", error.message);
    
// }


try {
    console.log("trying something risky...");
    throw new Error("oops!")
} catch (error) {
    console.log("error caught: ", error.message);
    
} finally{
    console.log("always runs");
    
}