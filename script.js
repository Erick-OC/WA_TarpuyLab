document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("openMef") || document.getElementById("openMEF") || document.getElementById("openMefBtn");
  const fallbackBtn = document.querySelector(".cta");
  const target = btn || fallbackBtn;

  if (target) {
    target.addEventListener("click", () => {
      window.open("https://www.mef.gob.pe/tarpuy/", "_blank");
    });
  }
});
