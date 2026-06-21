// ======================================
// FEDERAL BUREAU INSTITUTE AI ASSISTANT
// ======================================

const chatToggle =
document.getElementById("chatToggle");

const chatbox =
document.getElementById("chatbox");

const messages =
document.getElementById("messages");

const userInput =
document.getElementById("userInput");

// Open / Close Chat

chatToggle.addEventListener("click", () => {

if(chatbox.style.display === "block"){

chatbox.style.display = "none";

}else{

chatbox.style.display = "block";

if(messages.innerHTML === ""){

addBotMessage(
"Welcome to Federal Bureau Institute. How may I assist you today?"
);

}

}

});

// Send on Enter

userInput.addEventListener("keypress", function(e){

if(e.key === "Enter"){

sendMessage();

}

});

// Add Messages

function addUserMessage(text){

messages.innerHTML += `
<div style="text-align:right;margin:10px 0;">
<span style="
background:#2563eb;
color:white;
padding:10px 14px;
border-radius:12px;
display:inline-block;
max-width:80%;">
${text}
</span>
</div>
`;

scrollChat();

}

function addBotMessage(text){

messages.innerHTML += `
<div style="margin:10px 0;">
<span style="
background:#f1f5f9;
color:#111827;
padding:10px 14px;
border-radius:12px;
display:inline-block;
max-width:80%;">
${text}
</span>
</div>
`;

scrollChat();

}

function scrollChat(){

messages.scrollTop =
messages.scrollHeight;

}

// Main Chat Function

function sendMessage(){

const text =
userInput.value.trim();

if(text === "") return;

addUserMessage(text);

userInput.value = "";

generateReply(text);

}

// AI Responses

function generateReply(message){

const msg =
message.toLowerCase();

let reply =
"I can help with information about Federal Bureau Institute, cybersecurity, research programs, training opportunities, innovation initiatives, and institute services.";

if(msg.includes("hello") ||
msg.includes("hi")){

reply =
"Hello. Welcome to Federal Bureau Institute. How can I assist you today?";

}

else if(msg.includes("about")){

reply =
"Federal Bureau Institute is a fictional educational and research organization focused on technology, cybersecurity awareness, innovation, and professional training.";

}

else if(msg.includes("research")){

reply =
"Our research programs focus on artificial intelligence, cybersecurity, digital transformation, data analytics, and emerging technologies.";

}

else if(msg.includes("cyber")){

reply =
"Our Cyber Security Division studies cyber threats, online safety, digital protection, and awareness programs.";

}

else if(msg.includes("training")){

reply =
"The Training Academy offers workshops, certifications, and professional development programs in technology and security awareness.";

}

else if(msg.includes("innovation")){

reply =
"Our Innovation Center explores AI systems, automation, digital intelligence, and future technology solutions.";

}

else if(msg.includes("director")){

reply =
"The institute is managed by a leadership team dedicated to research, education, and technological advancement.";

}

else if(msg.includes("contact")){

reply =
"You can contact the institute through the Contact Us form available on this website.";

}

else if(msg.includes("career")){

reply =
"Career opportunities may include research fellows, technology analysts, cybersecurity specialists, and training coordinators.";

}

else if(msg.includes("mission")){

reply =
"Our mission is to advance knowledge, innovation, cybersecurity awareness, and professional excellence through education and research.";

}

else if(msg.includes("vision")){

reply =
"Our vision is to become a recognized center for innovation, intelligence studies, and technological development.";

}

else if(msg.includes("services")){

reply =
"We provide research programs, educational resources, cybersecurity awareness initiatives, training workshops, and innovation projects.";

}

else if(msg.includes("ai")){

reply =
"Artificial Intelligence is one of our primary research areas, focusing on automation, analytics, and intelligent systems.";

}

setTimeout(() => {

addBotMessage(reply);

}, 500);

}
