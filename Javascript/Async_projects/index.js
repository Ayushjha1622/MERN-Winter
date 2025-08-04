// async function getData() {
    
//     setTimeout(function() {
//         console.log("i am inside set timeout block ");
        
//     }, 3000)
// }

// getData();



// async function getData() {
//     // get request = async
//     let response = await fetch('https://jsonplaceholder.typicode.com/posts')


//     // parse json - async
//     let data = await response.json();

//     console.log(data);
    

// }

// getData();



const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const url = "https://jsonplaceholder.typicode.com/posts";

const options = {
    method: "POST",
    body: JSON.stringify({username: "Ayush jha"}),
    headers: myHeaders,
};


async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log("get data response: ", data);
}


async function postData() {
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
}
async function processData() {
    await postData();
    await getData();
}
processData();
