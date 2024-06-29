import { data } from "./data.js";

export function setBgColor() {
    // Get the alt attribute of the currently active button's image
    const activeAlt = document.querySelector(".nav li.is-active img").getAttribute("alt");

    // Find the corresponding data object that matches the alt attribute
    const matchedData = data.find((item) => item.alt === activeAlt);

    if (matchedData) {
        // Extract the colors from the matched data object
        const [startColor, endColor] = matchedData.color;

        // Update the background gradient of the body
        document.body.style.background = `linear-gradient(to bottom, ${startColor}, ${endColor})`;
    }
}

export function setImage() {
    document.querySelectorAll(".nav li button").forEach((button) => {
        button.addEventListener("click", function () {
            const newSrc = this.querySelector("img").getAttribute("src");
            document.querySelector(".visual img").setAttribute("src", newSrc);
        });
    });
}

export function setNameText() {
    // Get the alt attribute of the currently active button's image
    const activeAlt = document.querySelector(".nav li.is-active img").getAttribute("alt");

    // Find the corresponding data object that matches the alt attribute
    const matchedData = data.find((item) => item.alt === activeAlt);

    if (matchedData) {
        // Update the nickName text with the matched name from data
        document.querySelector(".nickName").textContent = matchedData.name;
    }
}
