var wrapper =  document.body.querySelector(".wrapper");

dragonHealth=0

if(dragonHealth <= 10){
  wrapper.innerHTML="Dragon damage: " + dragonHealth; 
}else if(dragonHealth >= 10){
  wrapper.innerHTML+"You Win!";
}

dragonHealth=0


function fire(clicked){
  var fireDam = 3;
  if(clicked){
dragonHealth=dragonHealth+fireDam;
  }
}

function ice(clicked){
  var iceDam = 1+1;
  dragonHealth=dragonHealth+iceDam;
}

function poison(){
  var poisonDam = 4;
  dragonHealth=dragonHealth+poisonDam;
}

document.body.querySelector(".fire").addEventListener("click", function(){
  fire(true);
})

document.body.querySelector(".ice").addEventListener("click", function(){
  ice();
})

document.body.querySelector(".poison").addEventListener("click", function(){
  poison();
})