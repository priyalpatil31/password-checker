function checkStrength() {
    let pass = document.getElementById("password").value;
    let result = document.getElementById("result");

    if (pass.length < 4) {
        result.innerText = "Weak";
    } else if (pass.length < 8) {
        result.innerText = "Medium";
    } else {
        result.innerText = "Strong";
    }
}