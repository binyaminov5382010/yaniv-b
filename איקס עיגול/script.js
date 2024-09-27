let turn = true // true = X
let btnClicked = 0
let btns = document.querySelectorAll(".btn")

btns.forEach(b=>{
    b.addEventListener("click" , btnClick)
})

function btnClick(){
    if(this.textContent != "") return
    btnClicked++

    if(turn) this.textContent ="X"
    else this.textContent = "O"

    //checkwin

    let obj = checkwin()
    if(obj.win){
        let btns = document.querySelectorAll(".btn")
        
        btns[obj.pos[0]].style.color = "green"
        btns[obj.pos[1]].style.color = "green"
        btns[obj.pos[2]].style.color = "green"

        setTimeout(()=>{
            alert(this.textContent + " is win")
            reset()
        } ,100)
    }else if(obj.isTie){
        setTimeout(()=>{
            alert("אף אחד לא ניצח")
        }, 100)
    }
    
    turn = !turn
}

function reset(){
    let btns = document.querySelectorAll(".btn")
    turn = !turn
    btnClicked = 0
    btns.forEach(b=>{
        b.textContent = ""
        b.style.color = ""
    })
}

function checkwin(){
    let btns = document.querySelectorAll(".btn")
    let obj = {win:false, isTie:false, pos:[]}

    if(btns[0].textContent == btns[1].textContent && btns[1].textContent == btns[2].textContent && btns[2].textContent != "" )
       obj = {win:true, isTie:false, pos:[0,1,2]}
   else if(btns[3].textContent == btns[4].textContent && btns[4].textContent == btns[5].textContent && btns[5].textContent != "" )
       obj = {win:true, isTie:false, pos:[3,4,5]}
   else if(btns[6].textContent == btns[7].textContent && btns[7].textContent == btns[8].textContent && btns[8].textContent != "" )
       obj = {win:true, isTie:false, pos:[6,7,8]}
   else if(btns[0].textContent == btns[3].textContent && btns[3].textContent == btns[6].textContent && btns[6].textContent != "" )
       obj = {win:true, isTie:false, pos:[0,3,6]}
   else if(btns[1].textContent == btns[4].textContent && btns[4].textContent == btns[7].textContent && btns[7].textContent != "" )
       obj = {win:true, isTie:false, pos:[1,4,7]} 
   else if(btns[2].textContent == btns[5].textContent && btns[5].textContent == btns[8].textContent && btns[8].textContent != "" )
       obj = {win:true, isTie:false, pos:[2,5,8]}
   else if(btns[0].textContent == btns[4].textContent && btns[4].textContent == btns[8].textContent && btns[8].textContent != "" )
       obj = {win:true, isTie:false, pos:[0,4,8]}
   else if(btns[2].textContent == btns[4].textContent && btns[4].textContent == btns[6].textContent && btns[6].textContent != "" )
       obj = {win:true, isTie:false, pos:[2,4,6]}
   else if(btnClicked == 9)
       obj.isTie = true 

   return obj
} 