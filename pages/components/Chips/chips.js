const chipBox=document.getElementsByClassName('input-chip-container')
const chipBoxArray=Array.from(chipBox)
const inputChip=document.getElementById('input-chip')

const chips=[]

function createChip(chipName){
    const div=document.createElement('div');
    div.setAttribute('class','chip-ele chip-ele-input')
    const btn=document.createElement('button')
    div.innerHTML=chipName
    btn.innerHTML='&times;'
    btn.setAttribute('class','cross-chip button closebtn')
    btn.addEventListener("click",(e)=>{
        e.target.parentElement.remove()
    })
    
    div.appendChild(btn)
    return div

}

function reset(){
    document.querySelectorAll('.chip-ele-input').forEach((element)=>{
        element.parentElement.removeChild(element)
    })
}
const addChips=()=>{
    reset()
    chips.slice().reverse().forEach((element)=>{
        const chipele=createChip(element)
        chipBoxArray[0].prepend(chipele)
        
    })
}

inputChip.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        // const chip=createChip(inputChip.value)
        // chipBoxArray[0].prepend(chip)
        chips.push(inputChip.value)
        addChips()
        inputChip.value=""
    }
})