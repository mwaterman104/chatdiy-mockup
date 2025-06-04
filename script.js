function sendMessage() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;

  const chatBox = document.getElementById("chat-box");

  const userBubble = document.createElement("div");
  userBubble.className = "user-msg";
  userBubble.textContent = text;

  chatBox.appendChild(userBubble);

  // Auto-scroll
  chatBox.scrollTop = chatBox.scrollHeight;

  input.value = "";

  // Simulated bot response
  setTimeout(() => {
    const botBubble = document.createElement("div");
    botBubble.className = "bot-msg";
    botBubble.textContent = "Got it! Let me guide you through that.";
    chatBox.appendChild(botBubble);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 1000);
}
