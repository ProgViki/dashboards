
document.getElementById("startBtn").addEventListener("click", () => {
  const email = document.querySelector("input[type='email']").value;
  if (email.trim() === "") {
    alert("Please enter your email address");
  } else {
    alert(`Welcome, ${email}! We'll reach out to you soon.`);
  }
});
