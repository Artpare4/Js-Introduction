import {add, adultFilter, ageAverage} from "./introduction";

export function createHtmlUser(age) {
  const liElt = document.createElement("li");
  liElt.className = "user";
  liElt.innerHTML = `<li>
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

export function extractUser(userElt) {
  const user = {
    name: userElt.querySelector(".user__name").value,
    age: parseInt(userElt.querySelector(".user__age").value),
  };
  return user;
}

export function extractUsers(usersElt) {
  let liste = usersElt.querySelectorAll("li.user");
  liste = Array.from(liste, extractUser);
  return liste;
}

export function extractUserType(infoElt) {
  return infoElt.querySelector(":checked").value;
}

export function updateAgeAverage(usersElt, infoElt) {
  const users = extractUsers(usersElt);
  const type = extractUserType(infoElt);
  const avg = ageAverage(users, type);
  const avgStr = avg ? parseFloat(avg).toFixed(2) : "";
  const averageElt = infoElt.querySelector(".info__age-average");

  averageElt.innerText = avgStr;
}
export function setAddUserEltCallback(addUserElt, usersElt, infoElt = "") {
  addUserElt.addEventListener("click", () => {
    usersElt.appendChild(
      createHtmlUser(Math.round(Math.random() * (32 - 12) + 12)),
    );
    if(infoElt!==""){
      updateAgeAverage(usersElt, infoElt.querySelector("article.info").value);
    }

  });
}