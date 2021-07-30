const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector("#galerie_mini");

function displayImage(src) {
    displayedImage.setAttribute("src", src);
}

for (let i = 1; i < 6; i++) {
    const newImage = document.createElement("img");
    newImage.setAttribute("src", "img/img0" + i + ".jpg");
    thumbBar.appendChild(newImage);
    newImage.addEventListener("click", () => {
        let src = newImage.getAttribute("src");
        displayImage(src);
    });
}
