(() => {
  function hideLoader() {
    const loader = document.getElementById("loading-screen");
    if (!loader) return;

    setTimeout(() => {
      loader.classList.add("hide");
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";

      setTimeout(() => {
        loader.style.display = "none";
      }, 700);
    }, 1200);
  }

  if (document.readyState === "complete") {
    hideLoader();
  } else {
    window.addEventListener("load", hideLoader, { once: true });
  }

  // Fallback: don't leave the loader stuck indefinitely
  setTimeout(hideLoader, 2500);
})();