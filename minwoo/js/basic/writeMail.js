document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);

  const memoTitle = urlParams.get("title");
  const memoContent = urlParams.get("content");
  //console.log(memoContent);
  //화면에 출력하시
  document.getElementById("title").innerHTML = memoTitle;
  //console.log(memoTitle);
  document.getElementById("content").innerHTML = memoContent;
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
  window.location.href = "/2023-Herethon-14/minwoo/pages/main/basic.html";
}

backBtn.addEventListener("click", goMain);
