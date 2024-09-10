
function login(){
    var pass = document.getElementById("user-pass").value
    var email = document.getElementById("user-email").value

    pass = pass.trim();
    email = email.trim();

    if (pass === "" || pass == null) {
        alert("Invalid UserName/Password");
      } else if (email == "" || email == null) {
        alert("Invalid UserName/Password");
      } else {
        let pattern = /[a-z]*@[a-z]*\.[a-z]{2,}/;
        if (!pattern.test(email)) {
            alert("Invalid UserName/Password");
        } else {
          alert("Your form has been successfully validated in the client side");
          window.open("./Logged_Index.html");
          window.location.href = 'Logged_Index.html';
        }
      }
}
