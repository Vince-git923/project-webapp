let close1 = document.querySelector(".close1")
let viewTableBtn = document.querySelector(".viewDataBtn")
let closeView = document.querySelector(".closeView")
let addButton = document.querySelector(".addData")
let table = document.querySelector(".hiddenCont")
let dateInput = document.querySelector("#date")
let addBtn = document.querySelector(".addData")
let inputBox = document.querySelector(".inputData")



viewTableBtn.addEventListener("click",()=>{
   table.style.visibility = "visible"
})

closeView.addEventListener("click",()=>{
    table.style.visibility = "hidden"
})

addBtn.addEventListener("click",()=>{
    inputBox.style.visibility = "visible"
})
close1.addEventListener("click",()=>{
    inputBox.style.visibility = "hidden"
})


