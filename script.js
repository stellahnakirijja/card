function updateName() {
  const input = document.getElementById("nameInput").value;
  document.getElementById("guestName").innerText = input || "[Name]";
}

function downloadCard() {
  html2canvas(document.querySelector("#card"), { scale: 2 }).then(canvas => {
    const link = document.createElement("a");
    link.download = `${document.getElementById("guestName").innerText || "invitation"}.jpg`;
    link.href = canvas.toDataURL("image/jpeg");
    link.click();
  });
}
