function sendMail() {
  var params = {
    name: document.getElementById("name").value,
    number: document.getElementById("number").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_xg5jvfa";
  const templateID = "template_1j3fwvz";

  emailjs.send(serviceID, templateID, params)
    .then(res => {
      document.getElementById("name").value = "";
      document.getElementById("number").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Xabaringiz muvaffaqiyatli yuborildi!. Tez orada javob qaytaramiz!.")


    })
    .catch(err => console.log(err));

}

let ptime = document.querySelector('.time');
let pday = document.querySelector('.day');
let pdorn = document.querySelector('.dorn');
setInterval(() => {
  let days = ["SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY"];
  let time = new Date();
  let hour = - time.getHours();
  let minutes = time.getMinutes();
  let seconds = time.getSeconds();
  let date = time.getDate();
  let day = days[time.getDay()];
  pday.textContent = day;
  ptime.textContent = Math.abs(hour) + ":" + minutes + ":" + seconds;
}, 1000);