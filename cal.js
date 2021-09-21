var resultE1=document.getElementById("result")
var resultE1=document.getElementById("result")
var ulEl=document.getElementById("history");



function answer(eachValue){

    document.getElementById("result").value += eachValue;
   
}
  

function result(){

    let firstVal = document.getElementById("result").value;

    let secondVal = eval(firstVal);

    let list = firstVal + " = "+ secondVal 
    console.log(list)


    document.getElementById("result").value = secondVal;
    addlist(list)
}

function clearall(){

    document.getElementById("result").value=""
}




function addlist(each) {
    let listEl = document.createElement("li");
    listEl.textContent = each;
    ulEl.appendChild(listEl);
}    


