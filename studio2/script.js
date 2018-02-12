"use strict";

var mbp = document.getElementById('mbp');
var ipp = document.getElementById('ipp');
var fourseven = document.getElementById('fourseven');
var close = document.getElementsByClassName('close');
var mbpd = document.getElementById('mbpd');
var ippd = document.getElementById('ippd');
var keychaind = document.getElementById('foursevend');

document.getElementById("bpk").onclick = enlargeAndNext;


//Toggle the overlay for each item
mbp.addEventListener('click', function(){
    mbpd.className="show";
    document.getElementById("container").className = "firstColor";
    document.getElementById("displayarea").className = "transparent";
    document.querySelector('footer').className = 'hide';
  });

ipp.addEventListener('click', function(){
    ippd.className="show";
    document.getElementById("container").className = "firstColor";
    document.getElementById("displayarea").className = "transparent";
    document.querySelector('footer').className = 'hide';
});

fourseven.addEventListener('click', function(){
    keychaind.className="show";
    document.getElementById("container").className = "firstColor";
    document.getElementById("displayarea").className = "transparent";
    document.querySelector('footer').className = 'hide';
  });

//Close the overlay for each item
close[0].addEventListener('click', function(){
mbpd.className="hide";
document.getElementById("container").className = "secondColor";
document.getElementById("displayarea").className = "show";
document.querySelector('footer').className = 'show';
});


close[1].addEventListener('click', function(){
ippd.className="hide";
document.getElementById("container").className = "secondColor";
document.getElementById("displayarea").className = "show";
document.querySelector('footer').className = 'show';
});

close[2].addEventListener('click', function(){
keychaind.className="hide";
document.getElementById("container").className = "secondColor";
document.getElementById("displayarea").className = "show";
document.querySelector('footer').className = 'show';
});

//Transition from start page to main page
function enlargeAndNext()
{   
    
    document.getElementById("bpki").className = "transparent";
    document.getElementById("container").className = "secondColor";
    
    
    document.querySelector('footer').style = 'color: black';
    document.getElementsByClassName("footera")[0].style.color = "black";
    document.getElementsByClassName("footera")[1].style.color = "black";    

    
    setTimeout(function(){document.getElementById("bpk").className = "hide";}, 1000);
    setTimeout(function(){document.getElementById("items").className = "show";}, 800);
    
    
    
}




