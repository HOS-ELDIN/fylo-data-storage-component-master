const nameInput = document.getElementById("username");
const mailInput = document.getElementById("email");
const msgInput = document.getElementById("message");

emailjs.init("7KHixAACzPLQ1DVHP");

const serviceID = "service_ls4azng";
const templateID = "template_a4n01un";

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const inputs = {
        name: nameInput.value,
        email: mailInput.value,
        msg: msgInput.value,
      };

      // these IDs from the previous steps
      emailjs.send(serviceID, templateID, inputs).then(
        function () {
          console.log("SUCCESS!");
          nameInput.value = "";
          mailInput.value = "";
          msgInput.value = "";
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
};
