console.log("contact.js loaded");

document.getElementById("contactForm")
.addEventListener("submit", function(event) {

    event.preventDefault();

    const status = document.getElementById("status");
    const form = this;

    status.innerHTML = "Sending message...";

    // Send notification to your Gmail
    emailjs.sendForm(
        "FBI-contact-gmail",
        "template_kcl3en9",
        form
    )

    .then(() => {

        // Send confirmation email to visitor
        return emailjs.sendForm(
            "FBI-contact-gmail",
            "template_h7mcp39",
            form
        );

    })

    .then(() => {

        status.innerHTML =
        "✅ Message sent successfully.";

        form.reset();

    })

    .catch((error) => {

        status.innerHTML =
        "❌ Failed to send message.";

        alert(JSON.stringify(error));

        console.error(error);

    });

});
