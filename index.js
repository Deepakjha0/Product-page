var loginbtn = document.getElementById("login-btn");

if (JSON.parse(localStorage.getItem("isLoggedIn")) == null) {
  localStorage.setItem("isLoggedIn", false);
} else if (JSON.parse(localStorage.getItem("isLoggedIn")) == false) {
  loginbtn.innerText = "Login";
} else {
  loginbtn.innerText = "Logout";
}

function changeStatus() {
  if (JSON.parse(localStorage.getItem("isLoggedIn")) == false) {
    localStorage.setItem("isLoggedIn", true);
    loginbtn.innerText = "Logout";
  } else {
    localStorage.setItem("isLoggedIn", false);
    loginbtn.innerText = "Login";
  }
}
