const user = {
    id: "asd@naver.com",
    pw: "spdlqj123!@",
};

/* 

  1. email 정규표현식을 사용한 조건처리
    - false면 해당 input에 is--invalid 추가 = 유효함
    - true면 해당 inpit에 is--invalid 제거 = 유효하지않음

  2. pw 정규표현식을 사용한 validation
    - false면 해당 input에 is--invalid 추가
    - true면 해당 input에 is--invalid 제거

  3. 로그인 버튼을 클릭시 user.id의 값과 input의 값을 비교
  4. 로그인 버튼을 클릭시 user.pw의 값과 input의 값을 비교

  5. 두 값이 일치 한다면 다음 페이지(welcome.html)로 이동

*/

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

document.querySelector;

// 이메일 체크 담당 직원

// 패스워드 체크 담당 직원

// 로그인 담당 직원
function login() {
    const userEmail = document.getElementById("userEmail").value;
    const userPw = document.getElementById("userPassword").value;

    function emailReg(text) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(text).toLowerCase());
    }
    function pwReg(text) {
        const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
        return re.test(String(text).toLowerCase());
    }
    if (!emailReg(userEmail) || !pwReg(userPw)) {
        alert("아이디 또는 비밀번호가 형식에 맞지않습니다.");
        // 이몌일이 마쯔면
    } else if (userEmail === user.id && userPw === user.pw) {
        return true;
    } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
    }
}
