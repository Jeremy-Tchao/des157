console.log("reading");

document.communications.onsubmit = processForm;
document.communications.onreset = resetForm;

function processForm()
{
    var aircraft = document.communications.aircraft.value;
    var callsign = document.communications.callsign.value;
    var gate = document.communications.gate.value;
    var des = document.communications.des.value;
    var rwy;
    var tail = document.communications.tail.value;
    

    var squawk = Math.floor(Math.random()*10000);

    //get runway
    switch(document.communications.rwy.value)
    {
        case "1L":
            rwy = "1 left";
            break;
        case "1R":
            rwy = "1 right";
            break;
        case "10L":
            rwy = "10 left";
            break;
        case "10R":
            rwy = "10 right";
            break;
    }

    //get taxiway
var taxiraw = document.communications.taxi.value.split(/,*/);
    var taxi = "";
    for(var i = 0; i < taxiraw.length; i++)
    {
        if(i>0)
            taxi += " ";

        switch(taxiraw[i])
        {
            case "A":
            case "a":
                taxi += "Alpha";
                break;

            case "B":
            case "b":
                taxi += "Bravo";
                break;
            
            case "C":
            case "c":
                taxi += "Charlie";
                break;
            
            case "D":
            case "d":
                taxi += "Delta";
                break;
            
            case "E":
            case "e":
                taxi += "Echo";
                break;

            case "F":
            case "f":
                taxi += "Foxtrot";
                break;
            
            case "G":
            case "g":
                taxi += "Golf";
                break;

            case "H":
            case "h":
                taxi += "Hotel";
                break;

            case "I":
            case "i":
                taxi += "India";
                break;
            
            case "J":
            case "j":
                taxi += "Juliet";
                break;
            
            case "K":
            case "k":
                taxi += "Kilo";
                break;

            case "L":
            case "l":
                taxi += "Lima";
                break;

            case "M":
            case "m":
                taxi += "Mike";
                break;

            case "N":
            case "n":
                taxi += "November";
                break;

            case "O":
            case "o":
                taxi += "Oscar";
                break;
            
            case "P":
            case "p":
                taxi += "Papa";
                break;

            case "Q":
            case "q":
                taxi += "Quebec";
                break;
            
            case "R":
            case "r":
                taxi += "Romeo";
                break;
            
            case "S":
            case "s":
                taxi += "Sierra";
                break;

            case "T":
            case "t":
                taxi += "Tango";
                break;
            
            case "U":
            case "u":
                taxi += "Uniform";
                break;

            case "V":
            case "v":
                taxi += "Victor";
                break;

            case "W":
            case "w":
                taxi += "Whiskey";
                break;
            
            case "X":
            case "x":
                taxi += "X-ray";
                break;

            case "Y":
            case "y":
                taxi += "Yankee";
                break;

            case "Z":
            case "z":
                taxi += "Zulu";
                break;
            
            


        }

        var taxi2;

        switch(taxiraw[taxiraw.length - 1])
        {
            case "A":
            case "a":
                taxi2 = "Alpha";
                break;

            case "B":
            case "b":
                taxi2 = "Bravo";
                break;
            
            case "C":
            case "c":
                taxi2 =  "Charlie";
                break;
            
            case "D":
            case "d":
                taxi2 =  "Delta";
                break;
            
            case "E":
            case "e":
                taxi2 =  "Echo";
                break;

            case "F":
            case "f":
                taxi2 = "Foxtrot";
                break;
            
            case "G":
            case "g":
                taxi2 =  "Golf";
                break;

            case "H":
            case "h":
                taxi2 =  "Hotel";
                break;

            case "I":
            case "i":
                taxi2 =  "India";
                break;
            
            case "J":
            case "j":
                taxi2 =  "Juliet";
                break;
            
            case "K":
            case "k":
                taxi2 =  "Kilo";
                break;

            case "L":
            case "l":
                taxi2 =  "Lima";
                break;

            case "M":
            case "m":
                taxi2 =  "Mike";
                break;

            case "N":
            case "n":
                taxi2 =  "November";
                break;

            case "O":
            case "o":
                taxi2 =  "Oscar";
                break;
            
            case "P":
            case "p":
                taxi2 =  "Papa";
                break;

            case "Q":
            case "q":
                taxi2 =  "Quebec";
                break;
            
            case "R":
            case "r":
                taxi2 =  "Romeo";
                break;
            
            case "S":
            case "s":
                taxi2 =  "Sierra";
                break;

            case "T":
            case "t":
                taxi2 =  "Tango";
                break;
            
            case "U":
            case "u":
                taxi2 =  "Uniform";
                break;

            case "V":
            case "v":
                taxi2 =  "Victor";
                break;

            case "W":
            case "w":
                taxi2 =  "Whiskey";
                break;
            
            case "X":
            case "x":
                taxi2 =  "X-ray";
                break;

            case "Y":
            case "y":
                taxi2 =  "Yankee";
                break;

            case "Z":
            case "z":
                taxi2 =  "Zulu";
                break;
            


        }
    }

    myMsg.innerHTML = 
    "<em>118.2 MHz San Francisco Clearance Delivery (CLNC DEL)</em> <br> <em>" 
    
    + 
    callsign + "</em>: Clearance, <em>" + callsign + "</em>'s airways to <em>" + des + "</em>, type is <em>" + aircraft + "</em><br> CLNC DEL: <em>" + callsign + "</em> cleared to <em>" + des + "</em> via the San Francisco Four departure, flight plan route, depart runway <em>" + rwy + "</em>, squawk " +  squawk + "<br> <em>" + callsign + "</em>: <em>" + callsign + "</em> cleared to <em>" + des + "</em>, San Francisco Four, flight plan route, <em>" + rwy + "</em>, " + squawk + "<br> CLNC DEL: <em>" + callsign + "</em> readback correct, contact apron 124.25 for pushback" + "<br> <em>"  + callsign + "</em>: 124.25 for pushback, <em>" + callsign +"</em>."
    +

    "<br><br><em>124.25 MHz Apron Control</em> <br> <em>" 

    +
    callsign +"</em>: Apron, <em>" + callsign + "</em> ready for pushback, tail to the <em>" + tail + "</em><br> Apron: <em>" + callsign + "</em> tail to the <em>" + tail+ "</em>, push at your discretion, call ready for taxi <br> <em>" + callsign + "</em>: <em>" + callsign + "</em> roger <br> <em>" + callsign +"</em>: Apron <em>" + callsign + "</em> ready for taxi <br> Apron: <em>" + callsign + "</em> roger, taxi for <em>" + rwy + "</em>, hold short of <em>" + taxi + "</em> <br> <em>" + callsign + "</em>: Roger hold short at <em>" + taxi + "</em> <br>Apron: <em>" + callsign + "</em> hold abeam gate <em>" + gate + "</em>, contact ground 121.8 at <em>" + taxi +"</em> <br> <em>" + callsign + "</em>: Hold abeam  <em>" + gate + "</em>, contact ground 121.8 at <em>" + taxi + "</em>, <em>" + callsign + "</em>"
    +

    "<br><br><em>121.8 MHz San Francisco Ground Control (GND CON)</em> <br> <em>" 

    +
    callsign + "</em>: Ground, <em>" + callsign + "</em> approaching <em>" + taxi + "</em> <br>GND CON: <em>" + callsign +"</em>, good day, taxi <em>" + taxi + "</em> for runway <em>" + rwy + "</em> <br> <em>" + callsign + "</em>: <em>" + taxi + "</em> for <em>" + rwy + "</em> <em>" + callsign + "</em> <br> GND CON: <em>" + callsign + "</em> over to tower on 120.5 <br> <em>" + callsign + "</em>: Tower on 120.5, <em>" + callsign + "</em>"
    +

    "<br><br><em>120.5 MHz San Francisco Tower (Tower)</em> <br> <em>"

    +

    callsign +"</em>: Tower, <em>" + callsign + "</em> with you on <em>" + taxi2 + "</em> for <em>" + rwy + "</em> <br> Tower: <em>" + callsign + "</em> continue on <em>" + taxi2 + "</em>, hold short of <em>" + rwy + "</em> <br> <em>" + callsign + "</em>: <em>" + taxi2 + "</em>, hold short of <em>" + rwy + "</em> <br> Tower: <em>" + callsign + "</em> taxi into position <em>" + rwy + "</em> <br> <em>" + callsign + "</em>: Roger into position <em>" + rwy + "</em>, <em>" + callsign + "</em> <br> Tower: <em>" + callsign + "</em> cleared to takeoff runway <em>" + rwy + "</em>, wind 121 at 6, contact NORCAL departure 127.0 in the air <br> <em>" + callsign + "</em>: <em>" + callsign + "</em> cleared for takeoff, NORCAL Departure 127.0 in the air";



    

    document.getElementById("outputsec").className = 'show';

    return false;
    }

function resetForm()
{
    document.getElementById("outputsec").className = 'hide';
}