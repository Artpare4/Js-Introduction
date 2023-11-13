import {add} from "./introduction";

export function createHtmlUser(age) {
    const liElt = document.createElement("li");
    liElt.className = "user";
    liElt.innerHTML = age;
    return liElt;
}

export function setAddUserEltCallback(addUserElt, usersElt){
   addUserElt.addEventListener("click",()=> {
       usersElt.appendChild(createHtmlUser(Math.round(Math.random()*(32-12)+12)))
   });
}
