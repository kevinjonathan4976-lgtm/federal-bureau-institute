console.log("contact.js loaded");

document.getElementById("contactForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const status = document.getElementById("status");
    const form = this;

    status.innerHTML = "Sending message...";

    console.log(form.name.value);
console.log(form.email.value);
console.log(form.title.value);

    emailjs.sendForm(
        "FBI-contact-gmail",
        "template_kcl3en9",
        form
    )

    .then(() => {
        // Send auto-reply BEFORE resetting the form
        return emailjs.sendForm(
            "FBI-contact-gmail",
            "template_h7mcp39",
            form
        );
    })

    .then(() => {
        form.reset();
        status.innerHTML = "✅ Message sent successfully.";
    })

    .catch((error) => {
        console.error(error);
        alert(JSON.stringify(error));
        status.innerHTML = "❌ Failed to send message.";
    });

});
