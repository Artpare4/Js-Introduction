import {add} from "./introduction";

export function createHtmlUser(age) {
    const liElt = document.createElement("li");
    liElt.className = "user";
    liElt.innerHTML =
        `<li>
            <form class='user'> 
                <label>
                    <input type="text" class="input user__name" value="Name">
                </label>
                -
                <label>
                    <input type="number" class="input user__age" value="${age}">
                </label>
                <button type="button" class="button user__delete">
                    <span class="material-symbols-outlined">
                    delete
                    </span>
                </button>
            </form>
        </li>`;
    return liElt;
}

export function setAddUserEltCallback(addUserElt, usersElt){
   addUserElt.addEventListener("click",()=> {
       usersElt.appendChild(createHtmlUser(Math.round(Math.random()*(32-12)+12)))
   });
}
export function extractUser(userElt){
    let user={
        name:userElt.querySelector(".user__name").value,
        age:parseInt(userElt.querySelector(".user__age").value)

    };
    return user;
}

export function extractUsers(usersElt){
    var liste=usersElt.querySelectorAll("li.user");
    liste=Array.from(liste,extractUser);
    return liste;
}