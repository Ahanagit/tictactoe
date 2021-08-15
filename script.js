
myvar=document.querySelectorAll(".box").length;
var count=1;
for(var i=0;i<myvar;i++){
  document.querySelectorAll(".box")[i].addEventListener("click",function(){
    if (count%2!=0){
      document.querySelector(".who").innerHTML="X";
      this.innerHTML="X";


    }
    else{
      document.querySelector(".who").innerHTML="O";
      this.innerHTML="O";

    }
    count++;
  });
}

document.querySelector("#again").addEventListener("click",resetFunc);
function resetFunc(){
  for(var i=0;i<myvar;i++){
    document.querySelectorAll(".box")[i].innerHTML="";
    document.querySelector(".announcer").innerHTML=" ";
}
}
document.querySelector("#complete").addEventListener("click",function(){
  if ((document.querySelector(".one").innerHTML==document.querySelector(".two").innerHTML&&document.querySelector(".two").innerHTML==document.querySelector(".three").innerHTML)||
  (document.querySelector(".four").innerHTML==document.querySelector(".five").innerHTML&&document.querySelector(".five").innerHTML==document.querySelector(".six").innerHTML)||
  (document.querySelector(".seven").innerHTML==document.querySelector(".eight").innerHTML&&document.querySelector(".eight").innerHTML==document.querySelector(".nine").innerHTML)||
  (document.querySelector(".one").innerHTML==document.querySelector(".five").innerHTML&&document.querySelector(".five").innerHTML==document.querySelector(".nine").innerHTML)||
  (document.querySelector(".three").innerHTML==document.querySelector(".five").innerHTML&&document.querySelector(".five").innerHTML==document.querySelector(".seven").innerHTML)||
  (document.querySelector(".one").innerHTML==document.querySelector(".four").innerHTML&&document.querySelector(".four").innerHTML==document.querySelector(".seven").innerHTML)||
  (document.querySelector(".two").innerHTML==document.querySelector(".five").innerHTML&&document.querySelector(".five").innerHTML==document.querySelector(".eight").innerHTML)||
  (document.querySelector(".three").innerHTML==document.querySelector(".six").innerHTML&&document.querySelector(".six").innerHTML==document.querySelector(".nine").innerHTML)
) {
    document.querySelector(".announcer").innerHTML="Winner";
  } else {
    document.querySelector(".announcer").innerHTML="It's a Draw Match";
  }
});
