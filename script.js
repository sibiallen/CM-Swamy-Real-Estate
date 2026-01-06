alert("JS loaded");
(function () {
  emailjs.init("X1lXTBeV_CsImJv1j"); // EmailJS public key
})();

document.getElementById("enquiryForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    message: document.getElementById("message").value
  };

  emailjs.send("service_b3s5y1w", "template_sz10g9t", params)
    .then(function () {
      alert("Enquiry sent successfully!");
      document.getElementById("enquiryForm").reset();
    })
    .catch(function (error) {
      alert("Error sending enquiry");
      console.log(error);
    });
});