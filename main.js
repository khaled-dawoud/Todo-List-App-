add= () =>{
    const input = document.querySelector(".input")
   const list = document.getElementById("list")
    if(input.value.trim() !== ""){ 
        let text =input.value;

     let newdiv = document.createElement('div')
     newdiv.className="div-from-js width80";
     newdiv.id="mc";
     newdiv.innerHTML=`${text}`;

     let remove= document.createElement('span')
     remove.id="def"
     remove.innerText="✘";

     let tic=document.createElement('span')
     tic.id="tic"
     tic.innerText="✓";

     list.appendChild(newdiv)
     list.appendChild(remove)
     list.appendChild(tic)

     input.value="";

     tic.addEventListener('click',function(){
        if(newdiv.classList.contains("strike")){
           
            newdiv.classList.remove('strike')
        }
        else{
         newdiv.classList.add('strike')}
    })
     remove.addEventListener('click',function(){
        list.removeChild(newdiv)
        list.removeChild(remove)
        list.removeChild(tic)
        
    })}
else{

    input.style.borderColor='black';
   setTimeout(() => {
    input.style.borderColor='red';
   }, 300); 
   setTimeout(() => {
    input.style.borderColor='rgb(80, 79, 79)';
    alert('Pleas Inter Task.')
   }, 3000); 
}
}
const con = document.getElementById("con");
con.scrollTop+=50;