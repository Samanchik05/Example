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

