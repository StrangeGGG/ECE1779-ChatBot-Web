// chatbot.js

// chatbot.js

// press Enter to send message
document.getElementById("userInput").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // avoid default behavior of the Enter key
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById("userInput").value;
    const chatbotMessages = document.getElementById("chatbotMessages");

    // Display user message
    const userMessage = document.createElement("p");
    userMessage.textContent = `You: ${userInput}`;
    userMessage.style.color = "#ffb199";
    chatbotMessages.appendChild(userMessage);

    // Display chatbot response
    const botMessage = document.createElement("p");
    botMessage.textContent = "Chatbot: This is a simulated response!";
    botMessage.style.color = "#21d4fd";
    chatbotMessages.appendChild(botMessage);

    // Clear input
    document.getElementById("userInput").value = "";

    // Auto-scroll to the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}
