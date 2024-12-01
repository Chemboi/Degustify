import { userArr } from "./user-data.js";

export const getEasTokenCookie = () => {
    const currentTokenCookie = document.cookie.split("; ").find((row) => row.startsWith("userToken"))
    if(currentTokenCookie && currentTokenCookie.substring(10) !== ""){
        return currentTokenCookie.substring(10)
    }
    else return undefined;
}

const setUserTokenCookie= (userToken) => {
    const currentTokenCookie = getEasTokenCookie()
    if (!currentTokenCookie || currentTokenCookie !== token) 
        {
        const date = new Date();
        date.setHours(23)
        date.setMinutes(59)
        date.setSeconds(59)
        const expires = "; expires=" + date;
        document.cookie =  "userToken=" + userToken + expires + "; SameSite=Strict Secure";
    }
}

const clearUserToken = () => {
    const currentTokenCookie = getEasTokenCookie()
    if(currentTokenCookie){
        console.log(JSON.stringify(document.cookie), "before")
        document.cookie = "userToken=" + ";expires=" + new Date(0).toUTCString()
        console.log(JSON.stringify(document.cookie), "after")
        window.location.reload()
    }
}

if(document.getElementById('login-btn'))
document.getElementById('login-btn').addEventListener('click', function (e) {
    e.preventDefault(); // Prevent the form from submitting by default

    // Collect form data
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validate login data
    const user = userArr.find(user => user.username === username)
    if(user && user.password === password){
        const userToken = crypto.randomUUID() 
        setUserTokenCookie(userToken)
        history.back()
    }
    else {
        document.getElementById("errorMsg").style.visibility = "visible"
        document.getElementById('username').value = ""
        document.getElementById('password').value = ""
    } 
  });

const loadUserButton = () => {
    if(getEasTokenCookie()){
        document.querySelectorAll(".login")[0].style.display = "none"
        document.getElementById("userAvatar").style.display = "inline-block"
        document.querySelectorAll(".signout")[0].addEventListener('click', clearUserToken)
    }
}

window.addEventListener("DOMContentLoaded",loadUserButton);
