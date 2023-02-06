function append(i1, i2){
    var unit = document.getElementById("unit");
    var from = document.getElementById("from-unit");

    from.innerHTML = " ";

    if(unit.value == "Length"){
        var optionArray = ['cm|centimeter', 'm|meter', 'km|kilometer'];
    }
    else if (unit.value == "Temp") {
        var optionArray = ['C|Celcius', 'F|farenheit', 'K|kelvin'];
    }
    else if (unit.value == "Currency") {
        var optionArray = ['INR|INR', 'D|Dollar', 'P|Pound'];
    }
    else{
        var optionArray = [];
    } 

    for(var option in optionArray){
        var pair = optionArray[option].split("|");
        var newOption = document.createElement("option");

        newOption.value = pair[0];              //value before split |
        newOption.innerHTML = pair[1];          //value after split |
        from.options.add(newOption);
    }
}


function appendTO(i3, i4){
    var unit1 = document.getElementById("unit");
    var to = document.getElementById("to-unit");

    to.innerHTML = " ";

    if(unit1.value == "Length"){
        var opArray = ['cm|centimeter', 'm|meter', 'km|kilometer'];
    }
    else if(unit1.value == "Temp"){
        var opArray = ['C|celcius', 'F|farenheit', 'K|kelvin'];
    }
    else if(unit1.value == "Currency"){
        var opArray = ['INR|INR', 'D|Dollar', 'P|Pound'];
    }
    else{
        var opArray = [];
    }

    for(var s in opArray){
        var couple = opArray[s].split("|");
        var newOp = document.createElement("option");

        newOp.value = couple[0];
        newOp.innerHTML = couple[1];
        to.options.add(newOp);
    }
}




function calculate(){
    var fromUnit = document.getElementById('from-unit');
    var toUnit = document.getElementById('to-unit');
    var unitMain = document.getElementById("unit");
    var input = document.getElementById('ip-value');
    var output = document.getElementById('op-value');


    if(unitMain.value == "Length"){
        if(fromUnit.value === "cm" && toUnit.value == "m"){
            output.value = (input.value)/100;
        }
        else if(fromUnit.value == "m" && toUnit.value == "km"){
            output.value = (input.value)/1000;
        }
        else if(fromUnit.value == "cm" && toUnit.value == "km"){
            output.value = (input.value)/1000000;
        }
        else if(fromUnit.value == "m" && toUnit.value == "cm"){
            output.value = (input.value)*100;
        }
        else if(fromUnit.value == "km" && toUnit.value == "m"){
            output.value = (input.value)*1000;
        }
        else if(fromUnit.value == "km" && toUnit.value == "cm"){
            output.value = (input.value)*1000000;
        }
        else{
            output.innerHTML = "Please select valid Parameters";
        }
    }
    
    else if(unitMain.value === "Temp"){
        if(fromUnit.value == "C" && toUnit.value == "F"){
            output.value = ((input.value) * 9 / 5) + 32;
        }
        else if(fromUnit.value == "F" && toUnit.value == "K"){
            output.value = (Number(input.value) - 32 )* (5 / 9) + 273.15;
        }
        else if(fromUnit.value == "C" && toUnit.value == "K"){
            output.value = (input.value) + 273.15;
        }
        else if(fromUnit.value == "F" && toUnit.value == "C"){
            output.value = (Number(input.value) - 32) * (5 / 9);
        }
        else if(fromUnit.value == "K" && toUnit.value == "C"){
            output.value = Number(input.value) - 273.15;
        }
        else if(fromUnit.value == "K" && toUnit.value == "F"){
            output.value = (Number(input.value) - 273.15) * (9 / 5) + 32;
        }
        else{
            output.innerHTML = "Please select valid Parameters";
        }
    }
    
    else if(unitMain.value === "Currency"){
        if(fromUnit.value == "INR" && toUnit.value == "D"){
            output.value = Number(input.value)*0.012;
        }
        else if(fromUnit.value == "INR" && toUnit.value == "P"){
            output.value = Number(input.value)*0.010;
        }
        else if(fromUnit.value == "D" && toUnit.value == "P"){
            output.value = Number(input.value)*0.83;
        }
        else if(fromUnit.value == "D" && toUnit.value == "INR"){
            output.value = (input.value)*82.23;
        }
        else if(fromUnit.value == "P" && toUnit.value == "INR"){
            output.value = Number(input.value)*99.13;
        }
        else if(fromUnit.value == "P" && toUnit.value == "D"){
            output.value = Number(input.value)*1.21;
        }
        else{
            output.innerHTML = "Please select valid Parameters";
        }
    }else{
        output.innerHTML = " ";
    }

    output.innerHTML = output.value;


}