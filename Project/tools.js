// select the element
let  pencilElement = document.querySelector("#pencil")
let  eraserElement = document.querySelector("#eraser")
let  stickyElement = document.querySelector("#sticky")
let  uplaodElement = document.querySelector("#upload")
let  downloadElement = document.querySelector("#download")
let  undoElement = document.querySelector("#undo")
let  redoElement = document.querySelector("#redo")


pencilElement.addEventListener("click",function tellPencil{ 
console.log("Pencil is clicked");
})
eraserElement.addEventListener("click",function tellEraser{
    console.log("Eraser is clicked");
})

// add the event listener
// apply the changes
