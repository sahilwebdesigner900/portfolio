(function(){
  emailjs.init("3-Esn0uDSkQgunyDs");
})();

const form = document.getElementById("contact-form");
const popup = document.getElementById("success-popup");

form.addEventListener("submit", function(e){
  e.preventDefault();

  // Honeypot check
  if(document.getElementById("company-field").value !== ""){
    return;
  }

  // reCAPTCHA check
  if(grecaptcha.getResponse() === ""){
    alert("Please complete reCAPTCHA");
    // 6LfM-HEsAAAAAJA8CnfST3EH2NHn6bgDak-qIDlP
    return;
  }

  const btnText = document.querySelector(".btn-text");
  const spinner = document.querySelector(".spinner");

  btnText.style.display = "none";
  spinner.style.display = "inline-block";

  emailjs.sendForm("service_r21hutn", "template_hm721mf", this)
  .then(function(){

      spinner.style.display = "none";
      btnText.style.display = "inline";

      popup.style.display = "flex";

      setTimeout(()=>{
        popup.style.display = "none";
      }, 3000);

      form.reset();
      grecaptcha.reset();
    // WhatsApp Auto Message
    const name = form.querySelector("[name='from_name']").value;
    const subject = form.querySelector("[name='subject']").value;
    const whatsappMessage = 
        `Hello,
        I just submitted the contact form on your website.
        Name: ${name}
        Subject: ${subject}
        Please get back to me. Thank you.`;
    const phoneNumber = "917625903382";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(whatsappMessage)}`, "_blank");

    }, function(error){
      alert("Failed to send message.");
      spinner.style.display = "none";
      btnText.style.display = "inline";
      console.log(error);
  });
});