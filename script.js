
document.addEventListener("DOMContentLoaded", function () {
    const button3 = document.getElementById("button3");
    const messageDiv = document.getElementById("message");

    button3.addEventListener("click", function () {
        messageDiv.innerHTML = "<p>Yhteystiedot: Peetu.naumanen@centria.fi</p>";
    });
});
