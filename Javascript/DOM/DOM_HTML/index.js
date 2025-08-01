let myDiv = document.querySelector('#mydiv');

// let newElement = document.createElement('span')

// newElement.textContent = "this is new element"

// myDiv.insertAdjacentElement("beforebegin",newElement)

let parent = document.querySelector("#mydiv")
let child = document.querySelector("#fapara")
parent.removeChild(child)