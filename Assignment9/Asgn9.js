/**
 * Created by SaiKrishna on 3/7/2016.
 */
function createElements(type,id,data,tagName){
    var divid = document.getElementById("Container");
    var element = document.createElement(tagName);
    element.id = id;
    element.type = type;
    element.name = data;
    if(tagName == "label"){
        element.innerHTML = data;
    }
    else{
        element.value = data;
    }
    divid.appendChild(element);
}


function createForm(){
    createElements("label","lblFirstName","First Name : ","label");
    createElements("text","inputFirstName","","input");
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("label","lblLastName","Last Name : ","label");
    createElements("text","inputLastName","","input");
    createElements("breakTag","breakTag","","br"); 
    createElements("breakTag","breakTag","","br");
    createElements("label","lblEmail","Email : ","label");
    createElements("email","inputEmail","","input");
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("label","lblGender","Gender : ","label");
    createElements("radio","radioMale","radio1","input");
    createElements("label","lblMale","Male ","label");
    createElements("radio","radioFemale","radio1","input");
    createElements("label","lblFemale","Female ","label");
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("label","lblCountry","Country : ","label");
    createElements("select","inputCountry","","select");
    var select = document.getElementById("inputCountry");
    select.options.length = 0;
    select.options[0] = new Option("Select Country","",true,false);
    select.options[1] = new Option("India","India",false,false);
    select.options[2] = new Option("U.S.A","U.S.A",false,false);
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("label","lblSummary","Summary : ","label");
    createElements("textarea","inputSummary","","textarea");
    createElements("breakTag","breakTag","","br");
    createElements("breakTag","breakTag","","br");
    createElements("submit","btnSubmit","Submit","input");
}

createForm();
