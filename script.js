function login() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  // Default users
  if (email === "student@codtech.com" && password === "student123") {
    alert("Student Login Successful");
    window.location = "dashboard.html";
  }
  else if (email === "admin@codtech.com" && password === "admin123") {
    alert("Admin Login Successful");
    window.location = "dashboard.html";
  }
  else {
    alert("Invalid Credentials");
  }
}

function logout() {
  window.location = "index.html";
}

function checkAnswer(answer) {
  let result = document.getElementById("result");
  if (answer === "correct") {
    result.innerText = "✅ Correct Answer!";
  } else {
    result.innerText = "❌ Wrong Answer!";
  }
}
