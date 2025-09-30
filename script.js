document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("openMef");
  if (btn) {
    btn.addEventListener("click", () => {
      window.open("https://www.mef.gob.pe/tarpuy/", "_blank");
    });
  }
});
