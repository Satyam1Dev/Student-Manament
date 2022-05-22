let form =document.querySelector("#form");
form.addEventListener("submit",submitFunction);
let data = JSON.parse(localStorage.getItem("studentData")) || [];

function displayNumberStudents(){
    let batch =[0,0,0,0];
    for (let i=0 ;i<data.length;i++){
        if(data[i].batch=="web20") batch[0]++;
        else if(data[i].batch=="web19") batch[1]++;
        else if(data[i].batch=="web18") batch[2]++;
        else if(data[i].batch=="web17") batch[3]++;

    }
    console.log(batch)
    let span =document.querySelectorAll("span");
    for (let i=0 ;i<span.length;i++){
       span[i].innerText=batch[i];
    }
}
displayNumberStudents();
function submitFunction(){
    event.preventDefault();
    let obj={
        name: form.name.value,
        course:form.course.value,
        unit:form.unit.value,
        batch:form.batch.value,
        imgUrl:form.url.value,

    };
    data.push(obj);
    console.log(data);
    localStorage.setItem("studentData",JSON.stringify(data));
    document.querySelector("#form").reset();
displayNumberStudents();
setTimeout(function(){
     document.querySelector("p").innerText="Please wait...";
    
},500);
setTimeout(function(){
    document.querySelector("p").innerText=" ";
   
},3000);
}