console.logo("contact.js loaded")

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

console.logo("Form submitted");

event.preventDefault();

const status = document.getElementById("status");

status.innerHTML = "Sending message...";

emailjs.sendForm(
    "FBI-contact-gmail",
    "template_kcl3en9",
    this
)

.then(() => {

    status.innerHTML =
    "✅ Message sent successfully.";

    this.reset();

})

.catch((error) => {

    status.innerHTML =
    "❌ Failed to send message.";

   alert(JOSN.stringify(error); 
   console.error(error);

});

});
