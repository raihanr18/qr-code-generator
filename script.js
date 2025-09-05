const wrapper = document.querySelector(".wrapper");
qrInput = wrapper.querySelector(".form input");
generateButton = wrapper.querySelector(".form button");
qrImg = wrapper.querySelector(".qr-code img");

function generateQRCode() {
    let qrValue = qrInput.value.trim();
    if(!qrValue) return;

    const newImg = new Image();
    newImg.onload = function() {
        // update src 
        qrImg.src = this.src;
        wrapper.classList.add("active");
    };
    
    // Start loading the new QR code
    newImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
}

generateButton.addEventListener("click", generateQRCode);

qrInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        generateQRCode();
    }
});