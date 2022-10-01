function saveSig() {
    const sigCanvas = document.querySelector("canvas#signature-pad")
    const sigCanvasDataUrl = sigCanvas.toDataURL('image/png');
    const input = document.querySelector("input.sig-text");
    input.value = sigCanvasDataUrl;
}

const sigCanvas = document.querySelector("canvas#signature-pad");
sigCanvas.onmouseup = saveSig;