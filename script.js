const six = document.getElementsByClassName("radioGender");
const gender = document.querySelector(".gender");

let male = true;
let female = true;



six[0].addEventListener("click", ()=>{
   if(male == true){
      if(female==false){
         alert("You can choose only one six!");
      }else{
         six[0].style = "background-color: green; border: 1px black solid;";
         male = false;
         gender.value = "male"
      }
   }else if(male == false){
      six[0].style = "background-color: white;";
      male = true;
      gender.value = "";
   }
})

six[1].addEventListener("click", ()=>{
   if(female == true){
      if(male == false){
         alert("You can choose only one six!");
      }else{
         six[1].style = "background-color: green; border: 1px black solid;";
         female = false;
         gender.value = "female"
      }
   }else if(female == false){
      six[1].style = "background-color: white;";
      female = true;
      gender.value = "";
   }
})


//......................................................................................

const sb = document.querySelectorAll(".subscribButtons");
const sbFinal = document.querySelector(".subscrib");

for(let i=0; i<3; i++){
   sb[i].addEventListener("click", ()=>{
      if(i==0){
         sb[0].style = "background-color: gray"
         sb[1].style = "background-color: white"
         sb[2].style = "background-color: white"
         sbFinal.value = "broze";
      }else if(i===1){
         sb[0].style = "background-color: white"
         sb[1].style = "background-color: gray"
         sb[2].style = "background-color: white"
         sbFinal.value = "silver";
      }else{
         sb[0].style = "background-color: white"
         sb[1].style = "background-color: white"
         sb[2].style = "background-color: gray"
         sbFinal.value = "gold";
      }
   })
}
//...........................................................................
const cancelButton = document.querySelector(".cancelButton");

cancelButton.onclick = function(){
   location.reload();
}