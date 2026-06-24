document.getElementById("contactForm")
.addEventListener("submit", function(event) {

event.preventDefault();

const status = document.getElementById("status");

status.innerHTML = "Sending message...";

emailjs.sendForm(
    "FBI_contact_gmail",
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
