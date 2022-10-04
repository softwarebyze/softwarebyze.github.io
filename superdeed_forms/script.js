function addChild() {
    let nChildren = document.querySelectorAll(".children div").length;
    const childrenDiv = document.querySelector(".children");
    const child = createChildBlock(nChildren+1);
    childrenDiv.appendChild(child);
}

function createChildBlock(n) {
    const div = document.createElement("div");
    div.className = `child${n}`
    const p1 = document.createElement("p");
    const nameLabel = document.createElement("label");
    nameLabel.textContent = "Name ";
    nameLabel.htmlFor = `child${n}-name`;
    p1.appendChild(nameLabel);
    const nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", `child${n}-name`);
    nameInput.setAttribute("id", `child${n}-name`);
    nameLabel.appendChild(nameInput);
    const select = document.createElement("select");
    select.setAttribute("id", `child${n}-whose`);
    select.setAttribute("name", `child${n}-whose`);
    const jointOption = document.createElement("option");
    jointOption.value = "joint";
    jointOption.innerText = "Joint"
    const mrOption = document.createElement("option");
    mrOption.value = "mr";
    mrOption.innerText = "Mr.";
    const mrsOption = document.createElement("option");
    mrsOption.value = "mrs";
    mrsOption.innerText = "Mrs.";
    select.appendChild(jointOption);
    select.appendChild(mrOption);
    select.appendChild(mrsOption);
    p1.appendChild(select);

    const singleLabel = document.createElement("label");
    singleLabel.className = "radio";
    singleLabel.htmlFor = `child${n}-marital-status`;
    singleLabel.innerText = " S ";
    const singleInput = document.createElement("input");
    singleInput.setAttribute("type", "radio");
    singleInput.setAttribute("name", `child${n}-marital-status`);
    singleInput.setAttribute("id", `child${n}-single`);
    singleLabel.appendChild(singleInput);
    p1.appendChild(singleLabel);

    const marriedLabel = document.createElement("label");
    marriedLabel.className = "radio";
    marriedLabel.htmlFor = `child${n}-marital-status`;
    marriedLabel.innerText = " M ";
    const marriedInput = document.createElement("input");
    marriedInput.setAttribute("type", "radio");
    marriedInput.setAttribute("name", `child${n}-marital-status`);
    marriedInput.setAttribute("id", `child${n}-married`);
    marriedLabel.appendChild(marriedInput);
    p1.appendChild(marriedLabel);
    div.append(p1);

    const p2 = document.createElement("p");
    const addressLabel = document.createElement("label");
    addressLabel.textContent = "Address ";
    addressLabel.htmlFor = `child${n}-address`;
    const addressInput = document.createElement("input");
    addressInput.setAttribute("type","text");
    addressInput.setAttribute("name",`child${n}-address`);
    addressInput.setAttribute("id",`child${n}-address`);
    addressLabel.appendChild(addressInput);
    p2.appendChild(addressLabel);
    div.appendChild(p2);

    const p3 = document.createElement("p");
    const phoneLabel = document.createElement("label");
    phoneLabel.textContent = "Phone # ";
    phoneLabel.htmlFor = `child${n}-phone`;
    const phoneInput = document.createElement("input");
    phoneInput.setAttribute("type","text");
    phoneInput.setAttribute("name",`child${n}-phone`);
    phoneInput.setAttribute("id",`child${n}-phone`);
    phoneLabel.appendChild(phoneInput);
    p3.appendChild(phoneLabel);
    div.appendChild(p3);

    return div;
}

function removeLastChild() {
    let nChildren = document.querySelectorAll(".children div").length;
    if (nChildren === 1) return;
    const childBlocks = document.querySelectorAll("div.children div");
    console.log(childBlocks);
    childBlocks[childBlocks.length - 1].remove()
}

function screenshotAndSubmit() {
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.querySelector("#screenshoturl").value = canvas.toDataURL("image/jpeg", 1);
    });
    form = document.querySelector("form");
    form.submit();
}