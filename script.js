/* .js files add interaction to your website */
var factList = [
 "Recycling one aluminum can saves enough energy to run a TV for three hours.", /*0*/ "During the time it takes you to read this sentence, 50,000 12-ounce aluminum cans are made.", /*1*/ "On average, ONE supermarket goes through 60,500,000 paper bags per year!", /*2*/ "Americans use 2,500,000 plastic bottles every hour, most of which are thrown away!", /*3*/ "Plastic bags and other plastic garbage thrown into the ocean kill as many as 1,000,000 sea creatures every year.", /*4*/ "A modern glass bottle takes 4000 years or more to decompose.", /*5*/ "About one-third of an average landfill is made up of packaging material."
 ]; 

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;

myButton.addEventListener("click", displayFact);

function displayFact(){
  fact.innerHTML = factList[count];
  count++;
  if (count == factList.length){
    count = 0;
  }
}


