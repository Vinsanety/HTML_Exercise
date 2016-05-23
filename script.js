var collector = document.getElementById("collector");
var first = document.getElementById("first");
var middle = document.getElementById("middle");
var last = document.getElementById("last");

buttoni.addEventListener("click", function(){
  var thing = document.createElement("span");
  collector.innerHTML = "";
  thing.innerHTML = first.value + " " + middle.value + " " + last.value;
  collector.appendChild(thing);
})
