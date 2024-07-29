function updateSeconds() {
  //Merida
  let meridaElement = document.querySelector("#merida");
  let meridaDateElement = meridaElement.querySelector(".date");
  let meridaTimeElement = meridaElement.querySelector(".time");
  let meridaTime = moment().tz("America/Merida");
  meridaDateElement.innerHTML = meridaTime.format("dddd, MMMM Do, YYYY");
  meridaTimeElement.innerHTML = meridaTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
    <div class="city">
            <h2>${cityName}</h2>
            <div class="info">
              <div class="time">${cityTime.format(
                "h:mm:ss [<small>]A[</small>]"
              )}</div>
              <div class="date">${cityTime.format("dddd, MMMM Do, YYYY")}</div>
            </div>
          </div>
          `;
}
updateSeconds();
setInterval(updateSeconds, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
