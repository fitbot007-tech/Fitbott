async function askAI() {
  const input = document.getElementById("userInput").value.trim();
  const responseBox = document.getElementById("response");

  if (!input) {
    responseBox.innerText = "Please enter a question!";
    return;
  }

  responseBox.innerText = "Thinking...";

  try {
    const res = await fetch("/.netlify/functions/ask-ai", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt: input })
    });

    const data = await res.json();

    responseBox.innerText = data.reply || "No reply from AI.";
  } catch (error) {
    console.error(error);
    responseBox.innerText = "Error contacting AI.";
  }
}
