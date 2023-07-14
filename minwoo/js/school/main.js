//js - school.html과 연결됨
const addBtn = document.getElementById("add-img");
//이름 바꾸기
let memoSchool = JSON.parse(localStorage.getItem("memoSchool"));
memoSchool = memoSchool ?? [];
// 화면이 새로고침 또는 로드 될때마다 실행되는 함수
window.onload = function () {
  const elements = document.getElementById("temp-contain");
  if (elements === null) {
    console.error("content-list element not found");
    return;
  }

  elements.innerHTML = ""; // 기존의 메모들을 초기화

  if (!memoSchool || memoSchool.length === 0) {
    console.log("No memos found");
    return;
  }

  for (let i = memoSchool.length - 1; i >= 0; i--) {
    // white-box
    let smallContain = document.createElement("div");
    smallContain.classList.add("smallContain");

    let boxId = document.createElement("div");
    boxId.textContent = memoSchool[i].id;
    boxId.classList.add("id");
    boxId.style.display = "none";

    let tempBox = document.createElement("div");
    tempBox.classList.add("box");
    // h2 : date

    let title = document.createElement("h2");
    title.textContent = memoSchool[i].title;
    title.classList.add("title");

    //여기는 내용들이기 때문에 main에 display 하지 않는다!!
    let greet = document.createElement("textarea");

    greet.textContent = memoSchool[i].greet;
    greet.classList.add("greet");
    greet.style.display = "none";

    let bus = document.createElement("textarea");

    bus.textContent = memoSchool[i].bus;
    bus.classList.add("bus");
    bus.style.display = "none";

    let content = document.createElement("textarea");

    content.textContent = memoSchool[i].content;
    content.classList.add("content");
    content.style.display = "none";

    let end = document.createElement("textarea");

    end.textContent = memoSchool[i].end;
    end.classList.add("end");
    end.style.display = "none";

    let pen = document.createElement("img");
    pen.src = "/2023-Herethon-14/minwoo/img/fePencil1.png";
    pen.style = "width:18px;height:18px";
    pen.classList.add("temp-edit-img");

    tempBox.append(boxId, title, greet, bus, content, end, pen);
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
    const contGreet = this.querySelector(".greet").textContent;
    const contContent = this.querySelector(".content").textContent;
    const contBus = this.querySelector(".bus").textContent;
    const contEnd = this.querySelector(".end").textContent;

    window.location.href =
      //school 페이지와 연결된 메일 작성 할 수 있는 페이지로
      "/2023-Herethon-14/minwoo/pages/write/write.html?id=" +
      encodeURIComponent(boxId) +
      "&title=" +
      encodeURIComponent(boxTitle) +
      "&greet=" +
      encodeURIComponent(contGreet) +
      "&content=" +
      encodeURIComponent(contContent) +
      "&bus=" +
      encodeURIComponent(contBus) +
      "&end=" +
      encodeURIComponent(contEnd);
  }
};

//클릭시 템플릿 추가 페이지로 넘어가는 함수 구현
function goAddPage() {
  window.location.href = "/2023-Herethon-14/minwoo/pages/add/add.html";
}
//템플릿 추가 버튼 이벤트리스너
addBtn.addEventListener("click", goAddPage);

//pen 누르면 템플릿 수정화면으로 넘어가는 것
const elements = document.getElementById("temp-contain");
elements.addEventListener("click", function (event) {
  if (event.target.classList.contains("temp-edit-img")) {
    event.stopPropagation();
    //바꾸기
    window.location.href = "/2023-Herethon-14/minwoo/pages/edit/edit.html";
  }
});

//버튼 누르면 각각의 화면으로 넘어가는 것
function goOtherPage(elementId) {
  const page = document.getElementById(elementId);

  if (page && page.id === "dong-btn")
    //동아리 페이지로
    window.location.href = "/2023-Herethon-14/minwoo/pages/main/group.html";
  //기본 페이지로
  else if (page && page.id === "basic-btn")
    window.location.href = "/2023-Herethon-14/minwoo/pages/main/basic.html";
  //my 페이지로
  else if (page && page.id === "my-btn")
    window.location.href = "/2023-Herethon-14/minwoo/pages/main/my.html";
  //school 페이지로
  else if (page && page.id === "school-btn")
    window.location.href = "/2023-Herethon-14/minwoo/pages/main/school.html";
}
