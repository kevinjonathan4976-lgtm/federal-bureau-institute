console.log("contact.js loaded");

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const status = document.getElementById("status");

    const templateParams = {
        name: this.name.value,
        email: this.email.value,
        title: this.title.value
    };

    status.innerHTML = "Sending message...";

    emailjs.send(
        "FBI-contact-gmail",
        "template_kcl3en9",
        templateParams
    )

    .then(() => {

        return emailjs.send(
            "FBI-contact-gmail",
            "template_h7mcp39",
            templateParams
        );

    })

    .then(() => {

        status.innerHTML = "✅ Message sent successfully.";
        document.getElementById("contactForm").reset();

    })

    .catch((error) => {

        console.error(error);
        alert(JSON.stringify(error));
        status.innerHTML = "❌ Failed to send message.";

    });

});
