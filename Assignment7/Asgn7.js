/**
 * Created by SaiKrishna on 3/1/2016.
 */
function display(country,phoneNum) {

    if (phoneNum.toString().length < 10 || phoneNum.toString().length > 10 || isNaN(phoneNum)) {
        alert("Please enter a valid 10 digit number.");
    }
    else {
        switch (country.toString()) {
            case "IN":
                var number = phoneNum.toString();
                console.log("+91-" + number.substr(0, 5) + "-" + number.substr(6, 5));
                break;

            case "US":
                var number = phoneNum.toString();
                console.log("+1-" + number.substr(0, 3) + "-" + number.substr(3, 3) + "-" + number.substr(6, 4));
                break;
        }
    }
}


console.log(display('IN',2322323443));
console.log(display('US',286427));
console.log(display('US','2864asdgyuag'));
