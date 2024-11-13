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
    userMessage.style.textAlign = "left";
    userMessage.style.marginLeft = 0;
    chatbotMessages.appendChild(userMessage);

    // Display chatbot response
    const botMessage = document.createElement("p");
    botMessage.textContent = "Chatbot: This is a simulated response!";
    botMessage.style.color = "#21d4fd";
    botMessage.style.textAlign = "left";
    botMessage.style.marginLeft = 0;
    chatbotMessages.appendChild(botMessage);

    // Clear input
    document.getElementById("userInput").value = "";

    // Auto-scroll to the latest message
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
}

// 获取文件按钮和文件输入框
const fileButton = document.getElementById('fileButton');
const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');

// 当按钮点击时，触发文件输入框的点击
fileButton.addEventListener('click', function() {
    fileInput.click();
});

// 当文件选择框的文件变化时，显示文件名
fileInput.addEventListener('change', function() {
    const file = fileInput.files[0];
    if (file) {
        fileNameDisplay.textContent = `Selected file: ${file.name}`;
    } else {
        fileNameDisplay.textContent = 'No file selected';
    }
});

