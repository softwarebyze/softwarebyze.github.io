// get the man's signature canvas
const mrCanvas = document.getElementById("mr-signature-pad");

// turn the man's signature canvas into a signature pad
const mrSignaturePad = new SignaturePad(mrCanvas, {
    backgroundColor: 'rgb(250,250,250)'
});

// make the clear button clear the pad and the input
document.getElementById("mr-clear").addEventListener('click', () => {
    mrSignaturePad.clear();
    const mrInput = document.querySelector("input.mr-sig-dataurl");
    mrInput.value = '';
});

function mrSaveSig() {
    const mrSigCanvas = document.querySelector("canvas#mr-signature-pad")
    const mrSigCanvasDataUrl = mrSigCanvas.toDataURL('image/png');
    const mrInput = document.querySelector("input.mr-sig-dataurl");
    mrInput.value = mrSigCanvasDataUrl;
}

const mrSigCanvas = document.querySelector("canvas#mr-signature-pad");
mrSigCanvas.onmouseup = mrSaveSig;
mrSigCanvas.ontouchend = mrSaveSig;


////////////////////////////////////////////////////////////////

// get the woman's signature canvas
const msCanvas = document.getElementById("ms-signature-pad");

// turn the woman's signature canvas into a signature pad
const msSignaturePad = new SignaturePad(msCanvas, {
    backgroundColor: 'rgb(250,250,250)'
});

// make the clear button clear the pad and the input
document.getElementById("ms-clear").addEventListener('click', () => {
    msSignaturePad.clear();
    const msInput = document.querySelector("input.ms-sig-dataurl");
    msInput.value = '';
});

function msSaveSig() {
    const msSigCanvas = document.querySelector("canvas#ms-signature-pad")
    const msSigCanvasDataUrl = msSigCanvas.toDataURL('image/png');
    const msInput = document.querySelector("input.ms-sig-dataurl");
    msInput.value = msSigCanvasDataUrl;
}

const msSigCanvas = document.querySelector("canvas#ms-signature-pad");
msSigCanvas.onmouseup = msSaveSig;
msSigCanvas.ontouchend = msSaveSig;
