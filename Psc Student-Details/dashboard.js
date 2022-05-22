let  data=JSON.parse(localStorage.getItem("studentData"));
data.forEach(function(ele,index){
    let tr=document.createElement("tr");
    let td1=document.createElement("td");
    let td2=document.createElement("td");
    let td3=document.createElement("td");
    let td4=document.createElement("td");
    let td5=document.createElement("td");
    let td6=document.createElement("td");
    td1.innerText=ele.name;
    td2.innerText=ele.course;
    td3.innerText=ele.batch;
    td4.innerText=ele.unit;
    let img =document.createElement("img");
    img.src=ele.imgUrl;
    td5.append(img);
    let btn=document.createElement("button");
    btn.innerText="Remove";
    // btn.style.backgroundColor="red"
    td6.append(btn);
    tr.append(td1,td2,td3,td4,td5,td6);
    document.querySelector("#tbody").append(tr);

   btn.addEventListener("click",function(){
       deleteFunction(ele,index);
   });
});
let  trashData=JSON.parse(localStorage.getItem("trash")) || [];
function deleteFunction(ele,index){
    trashData.push(ele);
    localStorage.setItem("trash",JSON.stringify(trashData));
    data.splice(index,1);
    localStorage.setItem("studentData",JSON.stringify(data));
    event.target.parentNode.parentNode.remove();
    displayNumberStudents();
}
function displayNumberStudents(){
    let batch =[0,0,0,0];
    for (let i=0 ;i<data.length;i++){
        if(data[i].batch=="web20") batch[0]++;
        else if(data[i].batch=="web19") batch[1]++;
        else if(data[i].batch=="web18") batch[2]++;
        else if(data[i].batch=="web17") batch[3]++;

    }
    let span =document.querySelectorAll("span");
    for (let i=0 ;i<span.length;i++){
       span[i].innerText=batch[i];
    }
}
    displayNumberStudents();