const dDayForm = document.getElementById("dday-form");
const dDayInput = document.querySelector("#dday-form .ddayinput");
const whatAboutInput = document.querySelector("#dday-form .whataboutinput");
const dDaylist = document.getElementById("dday-list");

const DDAY_KEY = "dDay";

let dday;

function saveDDay() {
  localStorage.setItem(DDAY_KEY, JSON.stringify(dday));
}

function deleteDDay(event) {
  const span = event.target.parentElement;
  span.remove();
  dday.day = null;
  saveDDay();
  dDayForm.classList.remove(HIDDEN_CLASSNAME);
}

function paintDDay(newDDay) {
  const today = new Date();
  const gap = Date.parse(newDDay.day) - today;
  const countOfDay = Math.floor(gap/(1000*60*60*24));
  
  const span = document.createElement("span");
  span.id = newDDay.id;
  span.innerText = `${newDDay.about} ${(countOfDay===0)? `D-day!` : (countOfDay>0)? `D-${countOfDay}` : `D+${Math.abs(countOfDay)}`}`;

  const button = document.createElement("button");
  button.classList.add("remote");
  button.innerText = "❌";
  button.addEventListener("click", deleteDDay);

  dDaylist.appendChild(span).appendChild(button);
}

function handleDDaySubmit(event) {
  event.preventDefault();
  dDayForm.classList.add(HIDDEN_CLASSNAME);
  const newDDayObj = {
    day: dDayInput.value,
    about: whatAboutInput.value,
    id: Date.now(),
  };
  dday = newDDayObj;
  paintDDay(newDDayObj);
  saveDDay();
}

dDayForm.addEventListener("submit", handleDDaySubmit);
const savedDDay = JSON.parse(localStorage.getItem(DDAY_KEY));

if (savedDDay.day !== null) {
  dDayForm.classList.add(HIDDEN_CLASSNAME);
  dday = savedDDay;
  paintDDay(dday);
}
