let body = document.body;
let mainInfo = document.getElementById("main-info");

console.log(body);

body.addEventListener("mousemove", (e) => {
  mainInfo.textContent = `X position: ${e.clientX}\n Y position: ${e.clientY}`;
  let spec = document.createElement("div");
  spec.className = "spec";
  spec.style.position = "absolute";
  spec.style.left = `${e.clientX}px`;
  spec.style.top = `${e.clientY}px`;
  body.appendChild(spec);
});
