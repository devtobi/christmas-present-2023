const secretInput = document.getElementById("secret");
const unlockBtn = document.getElementById("unlockBtn");

const unlockSecret = () => {
  const input = secretInput.value;
  if (input.trim() === "Glkückwunsch") {
    window.location.href = "/christmas.html";
  } else {
    alert(
      "Das eingegebene Wort war leider nicht richtig. Bitte erneut versuchen."
    );
  }
};

unlockBtn.addEventListener("click", unlockSecret);
