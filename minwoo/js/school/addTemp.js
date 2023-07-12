const addButton = document.getElementById("add-btn");

//memo이름 바꾸기
let memoSchool = JSON.parse(localStorage.getItem("memoSchool"));
memoSchool = memoSchool ?? [];

addButton.addEventListener("click", addTemp);

function addTemp() {
  console.log("save");

  let newMemo = {};

  let id = JSON.parse(localStorage.getItem("id"));
  id = id ?? 0;

  let memoTitle = document.getElementById("write-title").value;
  let memoGreet = document.getElementById("greeting").value;
  let memoBus = document.getElementById("business").value;
  let memoCont = document.getElementById("content-area").value;
  let memoEnd = document.getElementById("end").value;

  newMemo.id = id;
  newMemo.title = memoTitle;
  newMemo.greet = memoGreet;
  newMemo.bus = memoBus;
  newMemo.content = memoCont;
  newMemo.end = memoEnd;

  //여기도 memo이름 바꾸기
  memoSchool.push(newMemo);

  //필요여부 확인하기!!!!!! 여기도 memo이름 바꾸기
  localStorage.setItem("memoSchool", JSON.stringify(memoSchool));
  //이건 없애기
  localStorage.setItem("id", JSON.stringify(++id));

  if (memoTitle === "") {
    alert("템플릿 제목을 입력해주세요!");
  } else {
    //바꾸기
    window.location.href = `/minwoo/pages/main/school.html?memoSchool=${encodeURIComponent(
      JSON.stringify(newMemo)
    )}`;
  }
}

let back = document.getElementById("arrow");

function goMain() {
  window.location.href = "/minwoo/pages/main/school.html";
}

back.addEventListener("click", goMain);
