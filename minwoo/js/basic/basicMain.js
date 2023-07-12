const addBtn = document.getElementById("add-img");
//이름 바꾸기
let memoBasic = JSON.parse(localStorage.getItem("memoBasic"));
memoBasic = memoBasic ?? [];
// 화면이 새로고침 또는 로드 될때마다 실행되는 함수
window.onload = function () {
  const elements = document.getElementById("temp-contain");
  if (elements === null) {
    console.error("content-list element not found");
    return;
  }

  elements.innerHTML = ""; // 기존의 메모들을 초기화
  //이름 바꾸기
  if (!memoBasic || memoBasic.length === 0) {
    console.log("No memos found");
    return;
  }

  //바꾸기
  for (let i = memoBasic.length - 1; i >= 0; i--) {
    // white-box
    let smallContain = document.createElement("div");
    smallContain.classList.add("smallContain");
    //바꾸기
    let boxId = document.createElement("div");
    boxId.textContent = memoBasic[i].id_basic;
    boxId.classList.add("id");
    boxId.style.display = "none";

    let tempBox = document.createElement("div");
    tempBox.classList.add("box");
    // h2 : date
    //바꾸기
    let title = document.createElement("h2");
    title.textContent = memoBasic[i].title;
    title.classList.add("title");

    let content = document.createElement("textarea");
    //바꾸기
    content.textContent = memoBasic[i].content;
    content.classList.add("content");
    content.style.display = "none";

    let pen = document.createElement("img");
    pen.src = "/minwoo/img/fePencil1.png";
    pen.style = "width:18px;height:18px";
    pen.classList.add("temp-edit-img");

    tempBox.append(boxId, title, content, pen);
    smallContain.append(tempBox);
    elements.append(smallContain);
  }

  const Containers = document.querySelectorAll(".box");
  Containers.forEach(function (box) {
    box.addEventListener("click", onBoxClick);
  });

  //각각의 템플릿box 클릭시 mail 작성 페이지로 넘어감
  function onBoxClick() {
    const boxId = this.querySelector(".id").textContent;
    const boxTitle = this.querySelector(".title").textContent;
    const contContent = this.querySelector(".content").textContent;

    window.location.href =
      "/minwoo/pages/write/basic.html?id=" +
      encodeURIComponent(boxId) +
      "&title=" +
      encodeURIComponent(boxTitle) +
      "&content=" +
      encodeURIComponent(contContent);
  }
};

//클릭시 템플릿 추가 페이지로 넘어가는 함수 구현
function goAddPage() {
  window.location.href = "/minwoo/pages/add/basic.html";
}
//템플릿 추가 버튼 이벤트리스너
addBtn.addEventListener("click", goAddPage);

//pen 누르면 템플릿 수정화면으로 넘어가는 것
const elements = document.getElementById("temp-contain");
elements.addEventListener("click", function (event) {
  if (event.target.classList.contains("temp-edit-img")) {
    event.stopPropagation();
    //바꾸기
    window.location.href = "/minwoo/pages/edit/edit.html";
  }
});

//버튼 누르면 각각의 화면으로 넘어가는 것
function goOtherPage(elementId) {
  const page = document.getElementById(elementId);

  if (page && page.id === "dong-btn")
    window.location.href = "/minwoo/pages/main/group.html";
  else if (page && page.id === "basic-btn")
    window.location.href = "/minwoo/pages/main/basic.html";
  else if (page && page.id === "my-btn")
    window.location.href = "/minwoo/pages/main/my.html";
  else if (page && page.id === "school-btn")
    window.location.href = "/minwoo/pages/main/school.html";
}
