const input= document.querySelector('input');
const addbtn= document.querySelector('.btn-add');
const ul = document.querySelector("ul")
const empty = document.querySelector('.empty')

addbtn.addEventListener("click", (e)=>{
    e.preventDefault();
    const text= input.value;
    if (text!==''){
        const li=document.createElement('li');
        const p= document.createElement('p');
        p.textContent=text
        li.appendChild(p)
        li.appendChild(addDelete());
        ul.appendChild(li)
        input.value="";
        empty.style.display="none";
}});

function addDelete(){
    const debt=document.createElement('button');
    debt.textContent="X"
    debt.className="btn-delete";

    debt.addEventListener('click',(e)=>{
        const item=e.target.parentElement;
        ul.removeChild(item);
        const items= document.querySelectorAll("li");
        if (items.length==0){
            empty.style.display="block";
        }
    })
    return debt
}