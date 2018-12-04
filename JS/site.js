//HTML elementen pakken vanuit HTML en naar JS halen
let inputOne = document.getElementById("inputOne")
let inputTwo = document.getElementById("inputTwo")
let buttonOne = document.getElementById("buttonOne")

// roep de local storage weer aan als de site geladen wordt
inputOne.value = localStorage.schoenmaat;
console.log(localStorage.schoenmaat)

//De array met alle verschillende maten
sizeArray = [

    [23.1, 3, 36],
    [23.3, 3.5, 36.5],
    [23.5, 4, 37],
    [24, 4.5, 37.5],
    [24.3, 5, 38],
    [24.8, 5.5, 38.5],
    [25.1, 6, 39],
    [25.4, 6.5, 40],
    [25.8, 7, 40.5],
    [26.3, 7.5, 41],
    [26.7, 8, 42],
    [27.1, 8.5, 42.5],
    [27.6, 9, 43],
    [28, 9.5, 43.5],
    [28.4, 10, 44],
    [28.9, 10.5, 45],
    [29.3, 11, 46],
    [29.7, 11.5, 46.5],
    [30.1, 12, 47],
    [30.5, 13, 48]

]

buttonOne.addEventListener("click", convertValue)
//getCookie("setting")

function convertValue() {

    let waarde = inputOne.value

    for (let i = 0; i < 20; i++) {

        if (waarde <= sizeArray[i][0]) {
            inputTwo.value = sizeArray[i][2];
            setCookie("setting", inputOne.value, 30)
            //koppel een waarde aan de localStorage
            localStorage.schoenmaat = inputOne.value;
            break;
        } else {
            inputTwo.value = "Sorry, wij bieden deze maat niet aan"
        }
    }
}

// set localStorage met een value
localStorage.schoenmaat = inputOne.value;

// set een cookie met altijd 3 vaste waarden: een naam, een waarde en een experation date
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    
    console.log("setting cookie to " + cvalue)
    console.log(cname + "=" + cvalue + ";" + expires + ";path=/")
}
// Terug roepen van de cookie
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
