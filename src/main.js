const passwordLengthScroll = document.querySelector("#pass-length-btn")
const passwordLength = document.querySelector("#pass-length")
const generatePasswordBtn = document.querySelector("#generate-password");
const passwordOutput = document.querySelector("#password-output");
const copyBtn = document.querySelector("#copy-password")
const form = document.querySelector("form")
const passwordStrengthText = document.querySelector("#pass-strength-text");
const strengthBar = document.querySelector("#strength-bar");

window.addEventListener("load", () => {
    form.reset()
    passwordOutput.value = ""
})

passwordLengthScroll.addEventListener("change", () => {
    passwordLength.innerHTML = passwordLengthScroll.value
})


const uppercaseCheckbox = document.querySelector("#uppercase")
const lowercaseCheckbox = document.querySelector("#lowercase")
const numberCheckbox = document.querySelector("#number")
const symbolCheckbox = document.querySelector("#symbol")


// !! generate password function

function generatePassword() {

    let password = ""

    let lowercaseLetters = lowercaseCheckbox.checked ? "abcdefghijklmnopqrstuvwxyz" : ""
    let uppercaseLetters = uppercaseCheckbox.checked ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : ""
    let number = numberCheckbox.checked ? "0123456789" : ""
    let symbols = symbolCheckbox.checked ? '~!@#$%^&*()_+{}":?><;.,' : ""

    const passwordGeneratorString = `${lowercaseLetters + uppercaseLetters + number + symbols}`;

    const strongRegex = new RegExp("^(?=.{14,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    const mediumRegex = new RegExp("^(?=.{8,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");

    if (!passwordGeneratorString) {
        alert("Select any Checkbox")
        return
    }

    for (let i = 0; i < passwordLength.innerHTML; i++) {
        const randomNumber = Math.floor(Math.random() * passwordGeneratorString.length)
        password += passwordGeneratorString.substring(randomNumber, randomNumber + 1)
    }
    passwordOutput.value = password


    //  !! checking password strength

    if (password.match(strongRegex)) {
        passwordStrengthText.innerHTML = "STRONG"
    } else if (password.match(mediumRegex)) {
        passwordStrengthText.innerHTML = "MEDIUM"
    } else {
        passwordStrengthText.innerHTML = "WEAK"
    }


    // ! ! updating strength bar

    let passwordStrength = passwordStrengthText.innerHTML

    for (let i = 0; i < strengthBar.children.length; i++) {
        strengthBar.children[i].style.backgroundColor = "transparent"
    }


    if (passwordStrength == "WEAK") {
        for (let i = 0; i < strengthBar.children.length - 3; i++) {
            strengthBar.children[i].style.backgroundColor = "red"
        }
    }
    else if (passwordStrength == "MEDIUM") {
        for (let i = 0; i < strengthBar.children.length - 1; i++) {
            strengthBar.children[i].style.backgroundColor = "yellow"
        }
    }
    else {
        for (let i = 0; i < strengthBar.children.length; i++) {
            strengthBar.children[i].style.backgroundColor = "green"
        }
    }
}


function copyPassword() {
    if (passwordOutput.value.length < 1) {
        alert("Nothing to copy")
        return
    }
    passwordOutput.select();
    navigator.clipboard.writeText(passwordOutput.value);
    popUpFunction()
}


const copyInPopUp = document.querySelector("#pop-up")

function popUpFunction() {
    copyInPopUp.style.opacity = "1"
    copyInPopUp.style.transform = "translateY(0%)"

    setTimeout(() => {
        copyInPopUp.style.opacity = "0"
        copyInPopUp.style.transform = "translateY(50%)"
    }, 500)
}


copyBtn.addEventListener("click", copyPassword)
generatePasswordBtn.addEventListener('click', generatePassword)