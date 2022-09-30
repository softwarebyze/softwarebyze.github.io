const canvas = document.getElementById("signature-pad");

const signaturePad = new SignaturePad(canvas, {
    backgroundColor: 'rgb(250,250,250)'
});

document.getElementById("clear").addEventListener('click', () => {
    signaturePad.clear();
});