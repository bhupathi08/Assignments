/**
 * Created by SaiKrishna on 2/29/2016.
 */
function one(){
    var today = new Date();
    console.log("Today's date +30 is: "+(today.getDate()+30));
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    console.log("Date in US format: "+month+"/"+day+"/"+ year);
}

function two(){
    var someDate = document.getElementById("myDate").value;
    var num = new Array();
    num = someDate.split("-");
    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    if(num[0] == year){
        if(num[1] == (month+1)){
            if(num[2] == day){
                console.log("Both the days are equal.");
            }
            else if (num[2] > day){
                console.log("The given date: ("+someDate+") is greater than today's date. ("+(month+1)+"-"+day+"-"+ year+")" );
            }
            else { console.log("Today's date ("+(month+1)+"-"+day+"-"+ year+") is greater than the date given: ("+someDate+")");}
        }
        else if (num[1] > (month+1)){
            console.log("The given date: ("+someDate+") is greater than today's date.("+(month+1)+"/"+day+"/"+ year+")" );
        }
        else { console.log("Today's date ("+(month+1)+"-"+day+"-"+ year+") is greater than the date given: ("+someDate+")");}
    }
    else if (num[0] > year){
        console.log("The given date: ("+someDate+") is greater than today's date.("+(month+1)+"-"+day+"-"+ year+")" );
    }
    else { console.log("Today's date ("+(month+1)+"-"+day+"-"+ year+") is greater than the date given: ("+someDate+")");}

}

function three(){
    var someDate = document.getElementById("myDate").value;
    var num = new Array();
    num = someDate.split("-");
    if(num[0]%4 == 0){
        if((num[1]) == 02){
            if(num[2]>0 && num[2]<30){
                console.log("Yes, it is a valid date.");
            }
            else { console.log("No, it is not a valid date."); }
        }
    }
    else{
        if([01,03,05,07,08,10,12].indexOf(num[1]) > -1 ){
            if(num[1]>0 && num[1]<32){
                console.log("Yes, it is a valid date.");
            }
        }
        else{
            if(num[2]>0 && num[2]<31){
                console.log("Yes, it is a valid date.");
            }
            else{ console.log("No, it is not a valid date."); }
        }
    }
}

console.log(one());
console.log(two());
console.log(three());
