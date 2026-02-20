  (function(){
      emailjs.init("3-Esn0uDSkQgunyDs"); 
  })();

  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function(event) {
      event.preventDefault();

      emailjs.sendForm("service_r21hutn", "template_hm721mf", this)
        .then(function() {
            document.getElementById("form-message").style.display = "block";
                form.reset();
        });
  });
