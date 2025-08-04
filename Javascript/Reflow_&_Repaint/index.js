

// // code 1
// const t1 = performance.now()
// for(let i=1; i<= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i;
//     document.body.appendChild(para);

// }
// const t2 = performance.now();

// console.log("total time by code 1: " + (t2-t1));









// // code 2
// const t3 = performance.now();
// let myDiv = document.createElement('div');
// for (let i = 1; i <= 100; i++){
//     let para = document.createElement('p');
//     para.textContent = "this is para " + i;
//     myDiv.appendChild(para)
// 1   
// }

// document.body.appendChild(myDiv)

// const t4 = performance.now();

// console.log("total time by code 2: " + (t4-t3));


let frag = document.createDocumentFragment();

for(let i=1; i<= 100; i++){
    let para = document.createElement('p');
    para.textContent = "this is para " + i;
    frag.appendChild(para)

}

document.body.appendChild(frag)


