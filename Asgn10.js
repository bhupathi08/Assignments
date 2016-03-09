/**
 * Created by SaiKrishna on 3/8/2016.
 */
var year  = [2014,2015];
var make = ["Audi","Benz","Maruthi"];
var model = ["A-4","c2000","s-cross","WagonR"];

function createElements(name,id,data,tagName){
    var divid = document.getElementById("container");
    var element = document.createElement(tagName);
    element.name = name;
    element.id = id;
    if(tagName == "label"){
        element.innerHTML = data;
    }
    else{
        element.value = data;
    }
    divid.appendChild(element);
}


function dropDown1() {
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("lblDropDown1", "dropDown1Label", "Year : ", "label");
    createElements("listDropDown1", "dropDown1List", "", "select");
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("lblDropDown2","dropDown2Label","Make : ","label");
    createElements("listDropDown2","dropDown2List","","select");
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("lblDropDown3","dropDown3Label","Model : ","label");
    createElements("listDropDown3","dropDown3List","","select");
    var select = document.getElementById("dropDown1List");
    select.options.length = 0;
    select.options[0] = new Option("Select Year","",true,false);
    select.options[1] = new Option(year[0],"2014",false,false);
    select.options[2] = new Option(year[1],"2015",false,false);
    document.getElementById("dropDown1List").onchange = function () {
        dropDown2(select.value);
        dropDown3("",select.value);
    }
}

function dropDown2(yearValue){
       if(yearValue == 2015) {
           var select = document.getElementById("dropDown2List");
           select.options.length = 0;
           select.options[0] = new Option("Select Make", "", true, false);
           select.options[1] = new Option(make[0], "Audi", false, false);
           select.options[2] = new Option(make[2], "Maruthi", false, false);
           document.getElementById("dropDown2List").onchange = function () {
               dropDown3(select.value,yearValue);
           }
       }
        else if(yearValue == 2014) {
           var select = document.getElementById("dropDown2List");
           select.options.length = 0;
           select.options[0] = new Option("Select Make", "", true, false);
           select.options[1] = new Option(make[1], "Benz", false, false);
           document.getElementById("dropDown2List").onchange = function () {
               dropDown3(select.value,yearValue);
           }
       }
    else if(yearValue == ""){
                   var select = document.getElementById("dropDown2List");
                   select.options.length = 0;
                   select.options[0] = new Option("Select Make","",true,false);
                   document.getElementById("dropDown2List").onchange = function () {
                       dropDown3(select.value,yearValue);
                   }
        }
}

function dropDown3(makeValue,yearValue){
    var br = document.createElement("br");
    var divid = document.getElementById("container");
    divid.appendChild(br);
    divid.appendChild(br);
        if(makeValue == "Audi"){
            var select = document.getElementById("dropDown3List");
            select.options.length = 0;
            select.options[0] = new Option("Select Model","",true,false);
            select.options[1] = new Option(model[0],"A-4",false,false);
        }
        else if(makeValue == "Benz"){
            var select = document.getElementById("dropDown3List");
            select.options.length = 0;
            select.options[0] = new Option("Select Model","",true,false);
            select.options[1] = new Option(model[1],"c-2000",false,false);
        }
        else if(makeValue == "Maruthi"){
            var select = document.getElementById("dropDown3List");
            select.options.length = 0;
            select.options[0] = new Option("Select Model","",true,false);
            select.options[1] = new Option(model[2],"s-cross",false,false);
            select.options[2] = new Option(model[3],"Wagon-R",false,false);
        }
        else if(makeValue == "" || yearValue == ""){
            var select = document.getElementById("dropDown3List");
            select.options.length = 0;
            select.options[0] = new Option("Select Model","",true,false);
        }
}

dropDown1();