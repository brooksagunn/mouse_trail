let body = document.body;
let mainInfo = document.getElementById("main-info");
let spec = document.createElement("div");
spec.className = "spec";

console.log(body);

body.addEventListener("mousemove", (e) => {
  mainInfo.textContent = `X position: ${e.clientX}\n Y position: ${e.clientY}`;
  spec.style.left = `${e.clientX}px`;
  spec.style.top = `${e.clientY}px`;
  body.appendChild(spec);
  console.log(spec);
});
