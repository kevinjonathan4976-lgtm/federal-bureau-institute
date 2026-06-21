const chatToggle = document.getElementById("chatToggle");
const chatbox = document.getElementById("chatbox");
const messages = document.getElementById("messages");

chatToggle.addEventListener("click", () => {
    chatbox.style.display =
    chatbox.style.display === "block"
    ? "none"
    : "block";
});

function addMessage(sender, text) {
    messages.innerHTML += `
        <div style="margin:10px 0;">
            <strong>${sender}:</strong><br>
            ${text}
        </div>
    `;
    messages.scrollTop = messages.scrollHeight;
}

function sendMessage() {

    const input =
    document.getElementById("userInput");

    const question =
    input.value.trim();

    if (!question) return;

    addMessage("You", question);

    input.value = "";

    let reply =
    "I am the Federal Bureau Institute virtual assistant. Please ask about research, cybersecurity, training, or institute programs.";

    const q = question.toLowerCase();

    if(q.includes("cyber"))
        reply = "Our Cyber Security Division focuses on awareness, digital protection, and emerging cyber threats.";

    else if(q.includes("research"))
        reply = "The Research Division studies artificial intelligence, digital forensics, and innovation.";

    else if(q.includes("training"))
        reply = "The Institute provides professional training programs and educational workshops.";

    else if(q.includes("contact"))
        reply = "You can contact us through the contact form available on the website.";

    else if(q.includes("about"))
        reply = "Federal Bureau Institute is a fictional educational and research organization.";

    setTimeout(() => {
        addMessage("Assistant", reply);
    }, 700);
}

document.getElementById("userInput")
.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});
