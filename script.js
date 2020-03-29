var but=document.getElementById("first");
var input=document.getElementById("input");
var ul=document.querySelector("ul");
function IsnotEmpty(){
return input.value.length>0;
}
function IsAlreadyEntered(){
var list=document.getElementsByClassName("value");
var b=false;
for (var i = list.length - 1; i >= 0; i--) {
	if(list[i].innerText===input.value){
		b=true;
		 if(b===true){
 	console.log(b);
	window.alert("Alredy Exits")
	input.value="";
}
		return true;
	}
}
 return false;
}


function EnterValue() { 
if(IsnotEmpty() && !(IsAlreadyEntered())){
var li=document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
}else{
window.alert("Enter a Value and press again")
}
}

but.addEventListener("click",EnterValue);


