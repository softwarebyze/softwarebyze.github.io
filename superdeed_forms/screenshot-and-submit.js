function screenshotAndSubmit() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.querySelector(".screenshoturl").value = canvas.toDataURL("image/jpeg", 1);
    });
    form = document.querySelector("form");
    form.submit();
}