const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateButton = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img ");


function generateQRCode() {
    let qrValue = qrInput.value.trim();
    if(!qrValue) return;

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    wrapper.classList.add("active");
}

generateButton.addEventListener("click", generateQRCode);

qrInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        generateQRCode();
    }
});