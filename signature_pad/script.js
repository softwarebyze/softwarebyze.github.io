// Grab the canvas, make it a signature pad, and add clear button functionality

const canvas = document.getElementById("signature-pad");

const signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgb(250,250,250)'
});

document.getElementById("clear").addEventListener('click', () => {
    signaturePad.clear();
    const input = document.querySelector("input.sig-text");
    input.value = '';
});