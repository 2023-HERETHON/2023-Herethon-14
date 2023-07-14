const addButton = document.getElementById("add-btn");

//memo이름 바꾸기
let memoBasic = JSON.parse(localStorage.getItem("memoBasic"));
memoBasic = memoBasic ?? [];

addButton.addEventListener("click", addTemp);

function addTemp() {
  console.log("save");

  let newMemo = {};

  let id_basic = JSON.parse(localStorage.getItem("id_basic"));
  id_basic = id_basic ?? 0;

  let memoTitle = document.getElementById("write-title").value;
  let memoCont = document.getElementById("content-area").value;

  newMemo.id_basic = id_basic;
  newMemo.title = memoTitle;
  newMemo.content = memoCont;

  //여기도 memo이름 바꾸기
  memoBasic.push(newMemo);

  //필요여부 확인하기!!!!!! 여기도 memo이름 바꾸기
  localStorage.setItem("memoBasic", JSON.stringify(memoBasic));
  //이건 없애기
  localStorage.setItem("id_basic", JSON.stringify(++id_basic));

  if (memoTitle === "") {
    alert("템플릿 제목을 입력해주세요!");
  } else {
    //바꾸기
    window.location.href = `/2023-Herethon-14/minwoo/pages/main/basic.html?memoBasic=${encodeURIComponent(
      JSON.stringify(newMemo)
    )}`;
  }
}
let back = document.getElementById("arrow");

function goMain() {
  window.location.href = "/2023-Herethon-14/minwoo/pages/main/basic.html";
}

back.addEventListener("click", goMain);
