import { setBgColor, setImage, setNameText } from "./util.js";

/* 

1. 클릭 이벤트 활성화
2. nav 클릭시 배경 색상 변경
3. 이미지 변경
4. 텍스트 변경
5. 함수 분리

*/

document.querySelectorAll(".nav li button").forEach((button) => {
    button.addEventListener("click", function () {
        document.querySelector(".nav li.is-active").classList.remove("is-active");

        this.parentElement.classList.add("is-active");
        setBgColor();
        setImage();
        setNameText();
        const name = document.querySelector(".nickName").textContent.trim();
        playAudio(name);
    });
});

function playAudio(name) {
    const audio = new Audio(`./assets/audio/${name}.m4a`);
    audio.play();
}
