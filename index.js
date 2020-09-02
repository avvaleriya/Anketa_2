const name = document.getElementById("name");
const age = document.getElementById("age");
const date = document.getElementById("date");
const mistace = document.getElementById("mistace");
const woman = document.getElementById("woman");
const man = document.getElementById("man");
const education = document.getElementById("education");
const btn = document.getElementById("btn");
const selec = document.getElementById("select");
const window = document.getElementById("selectWindow");
const mnemonic = document.getElementById("mnemonic");

function getGender() {
  woman.check ? (gender = "женщина") : (gender = "мужчина");
  return gender;
}

select.addEventListener("click", () => {
  getGender();

  if (name.value === "") {
    name.style.border = "2px solid red";
    attention.style.display = "block";
  } else {
    selectWindow.style.display = "block";
    selectWindow.innerHTML += `<p>
        Ваше ФИО: ${name.value}<br/>
        Вы родились ${date.value}<br/>
        Вы ${gender}<br/>
        У вас ${education.value} образование
        </p>`;
  }
});
