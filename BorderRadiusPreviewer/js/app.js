const inputs = document.querySelectorAll('.input');
const box = document.querySelector(".box");
const output = document.querySelector(".output");
const copy = document.querySelector(".copy");
const alert = document.querySelector(".copy__alert");

const property = (side, value) => {
  if (side === "all") return `border-radius: ${value}px`;
  return `border-${side}-radius: ${value}px\n`;
}

const printOutput = () => {
  const items = [];
  inputs.forEach(input => items.push({ name: input.name, value: input.value }));

  const isEquals = items.every(input => input.value === items[0].value);

  var print = "";
  if (isEquals) {
    print += property("all", inputs[0].value);
  } else {
    items.forEach(item => {
      print += property(item.name, item.value);
    });
  }

  output.innerHTML = print;
}

const showAlert = () => {
  alert.style.display = "block";

  let i = 0;
  function loop() {
    setTimeout(function() {
      alert.style.opacity = `${i}%`;
      if (parseInt(alert.style.top) < 10 || alert.style.top === "") {
        alert.style.top = `${i}%`;
      }

      i += 1;
      if (i <= 100) loop();
    }, 10);
  }

  loop();

  setTimeout(function() {
    alert.style.display = "none";
    alert.style.opacity = "0%";
    alert.style.top = "0%";
  }, 1500);
}

inputs.forEach(input => {
  input.addEventListener("keyup", (event) => {
    const name = event.target.name;
    const value = event.target.value;

    box.style[`border-${name}-radius`] = `${value > 0 ? value : 0}px`;
    printOutput();
  });
});

copy.addEventListener("click", () => {
  output.select();
  output.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(output.value);

  showAlert();
});