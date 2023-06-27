let count = 0;

const value = document.querySelector("#value");
const buttons = document.querySelectorAll(".btn");

// console.log(buttons);
buttons.forEach(function (btn) {
  // console.log(item)
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count == 0) {
      value.style.color = "yellow";
    }
    value.textContent = count;
  });
});
