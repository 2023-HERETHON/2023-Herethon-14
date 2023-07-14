document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const memoId = urlParams.get("id");
  //요소확인하기 console.log 삭제 가능

  const memoTitle = urlParams.get("title");

  const memoGreet = urlParams.get("greet");
  const memoContent = urlParams.get("content");
  const memoBus = urlParams.get("bus");
  const memoEnd = urlParams.get("end");

  //화면에 출력하시
  document.getElementById("title").innerHTML = memoTitle;
  document.getElementById("greet").innerHTML = memoGreet;
  document.getElementById("content").innerHTML = memoContent;
  document.getElementById("bus").innerHTML = memoBus;
  document.getElementById("end").innerHTML = memoEnd;
});

function goWhite(elementId) {
  const memoContent = document.getElementById(elementId).innerHTML;
  const whiteTextarea = document.getElementById("white-box");

  // 요소의 내용을 white textarea에 복사
  whiteTextarea.value += memoContent + "\n\n";

  const targetDiv = document.getElementById(elementId);
  targetDiv.style.backgroundColor = "#E6E2DD";
}

const backBtn = document.getElementById("arrow");

//내가 바꿔야할 코드 부분 main.뭐시기.html
function goMain() {
  window.location.href = "/2023-Herethon-14/minwoo/pages/main/my.html";
}

backBtn.addEventListener("click", goMain);
