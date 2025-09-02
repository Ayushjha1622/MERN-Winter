// const clock=document.getElementById('clock')
// // const clock=document.querySelector('#clock')





// setInterval(function(){
//     let date = new Date();
//     //console.log(date.toLocaleTimeString());
//     clock.innerHTML = date.toLocaleTimeString()
// },1000)


let clock = document.getElementById("clock")



setInterval(function(){
    
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString("clock")
    }, 1000)