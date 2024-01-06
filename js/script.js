const ageElement = document.querySelector(`#age`);
const childColumn = document.querySelector(`.child-column`);
const adultColumn = document.querySelector(`.adult-column`);
const invalidAgeElement = document.querySelector(".invalid-age");

ageElement.addEventListener("keyup", (e) => {
  let age = ageElement.value;

  if (!age) {
    childColumn.style.display = "flex";
    adultColumn.style.display = "flex";
    invalidAgeElement.style.display = "none";
  } else if (age >= 18) {
    childColumn.style.display = "none";
    adultColumn.style.display = "flex";
    invalidAgeElement.style.display = "none";
  } else if (age < 18 && age > 0) {
    adultColumn.style.display = "none";
    childColumn.style.display = "flex";
    invalidAgeElement.style.display = "none";
  } else {
    adultColumn.style.display = "none";
    childColumn.style.display = "none";
    invalidAgeElement.style.display = "block";
  }
});
