// const btn = document.getElementById('toggleButton');

// btn.addEventListener('click',()=>{
//     document.body.classList.toggle("dark")
// })





const btn = document.getElementById('toggleButton');

btn.addEventListener('click',()=>{
    document.body.classList.toggle("dark");
    if(document.body.classList.contains("dark")){
        btn.textContent = "toggle to light mode"
    }
    else{
        btn.textContent = "toggle to dark mode"
    }
}) 

//toggle -: Check partciular thing is present if yes then removes it if not then add it 
//contains -: checks element is there or not 
//textContent -: acces text of any field 
