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

      // Show Popup
      popup.classList.add("active");

      // Hide popup after 3 seconds
      setTimeout(()=>{
        popup.classList.remove("active");
      }, 3000);

      form.reset();
      grecaptcha.reset();

  }, function(error){
      alert("Failed to send message.");
      spinner.style.display = "none";
      btnText.style.display = "inline";
      console.log(error);
  });
});


// btn style add
document.getElementById("contact-form").addEventListener("submit", function() {
  const btn = this.querySelector(".form-submit-btn");
  btn.querySelector(".btn-text").style.opacity = "0.6";
  btn.querySelector(".spinner").style.display = "block";
});