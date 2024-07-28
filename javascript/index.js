function updateSeconds() {
//Merida
let meridaElement = document.querySelector("#merida");
let meridaDateElement = meridaElement.querySelector(".date");
let meridaTimeElement = meridaElement.querySelector(".time");
let meridaTime = moment().tz("America/Merida");
meridaDateElement.innerHTML = meridaTime.format("dddd, MMMM Do, YYYY");
meridaTimeElement.innerHTML = meridaTime.format("h:mm:ss [<small>]A[</small>]");

//Ljubljana
let ljubljanaElement = document.querySelector("#ljubljana");
let ljubljanaDateElement = ljubljanaElement.querySelector(".date");
let ljubljanaTimeElement =ljubljanaElement.querySelector(".time");
let ljubljanaTime = moment().tz("Europe/Ljubljana");
ljubljanaDateElement.innerHTML = ljubljanaTime.format("dddd, MMMM Do, YYYY");
ljubljanaTimeElement.innerHTML = ljubljanaTime.format("h:mm:ss [<small>]A[</small>]");

//Tijuana
let tijuanaElement = document.querySelector("#tijuana");
let tijuanaDateElement = tijuanaElement.querySelector(".date");
let tijuanaTimeElement = tijuanaElement.querySelector(".time");
let tijuanaTime = moment().tz("America/Tijuana");
tijuanaDateElement.innerHTML = tijuanaTime.format("dddd, MMMM Do, YYYY");
tijuanaTimeElement.innerHTML = tijuanaTime.format("h:mm:ss [<small>]A[</small>]");

//Istanbul
let istanbulElement = document.querySelector("#istanbul");
let istanbulDateElement = istanbulElement.querySelector(".date");
let istanbulTimeElement = istanbulElement.querySelector(".time");
let istanbulTime = moment().tz("Asia/Istanbul");
istanbulDateElement.innerHTML = istanbulTime.format("dddd, MMMM Do, YYYY");
istanbulTimeElement.innerHTML = istanbulTime.format("h:mm:ss [<small>]A[</small>]");

//Chicago
let chicagoElement = document.querySelector("#chicago");
let chicagoDateElement = chicagoElement.querySelector(".date");
let chicagoTimeElement = chicagoElement.querySelector(".time");
let chicagoTime = moment().tz("America/Chicago");
chicagoDateElement.innerHTML = chicagoTime.format("dddd, MMMM Do, YYYY");
chicagoTimeElement.innerHTML = chicagoTime.format("h:mm:ss [<small>]A[</small>]");
}
updateSeconds();
setInterval(updateSeconds, 1000);