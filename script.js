setTimeout(start, 2000);
function start() {
  let image = document.querySelector("#image");
  image.remove();
  let body = document.querySelector("body");
  body.style.backgroundColor = "azure";
  let heading = document.querySelector(".heading");
  let choice = document.querySelector(".choice-container");
  heading.style.display = "block";
  choice.style.display = "block";
  let btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    let input = document.querySelectorAll("input");
    let label = document.querySelectorAll("label");
    let subjects = [];
    for (let inputElement of input) {
      if (inputElement.checked == true) {
        subjects.push(inputElement.id);
      }
    }
    if (subjects.length == 0) {
      alert("Please select Atleast one subject");
      return;
    }
    localStorage.setItem("subjects", JSON.stringify(subjects));
    let select = document.querySelector("select");
    if (select.value == "00") {
      alert("Please set duration");
      return;
    }
    localStorage.setItem("duration", select.value);
    location.href = "objective/obj.html";
  });
}
