const form = document.getElementById("ideaForm");
const msg = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  msg.textContent = "Sending...";

  try {
    const res = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: { Accept: "application/json" }
    });

    if (res.ok) {
      msg.textContent = "✅ Idea sent successfully!";
      form.reset();
    } else {
      msg.textContent = "❌ Submission failed.";
    }
  } catch {
    msg.textContent = "❌ Network error.";
  }
});

function toggleDark() {
  document.body.classList.toggle("dark");
}