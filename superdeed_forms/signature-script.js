const mrCanvas = document.getElementById("mr-signature-pad");

const mrSignaturePad = new SignaturePad(mrCanvas, {
    backgroundColor: 'rgb(250,250,250)'
});

document.getElementById("mr-clear").addEventListener('click', () => {
    mrSignaturePad.clear();
});

const msCanvas = document.getElementById("ms-signature-pad");

const msSignaturePad = new SignaturePad(msCanvas, {
    backgroundColor: 'rgb(250,250,250)'
});

document.getElementById("ms-clear").addEventListener('click', () => {
    msSignaturePad.clear();
});