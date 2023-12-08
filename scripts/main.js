//图片切换器
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/lovely-dog.jpg") {
    myImage.setAttribute("src", "images/test.jpg");
  } else {
    myImage.setAttribute("src", "images/lovely-dog.jpg");
  }
};
//戳戳特效
document.querySelector("h1").addEventListener("click", function () {
    alert("别戳我，我怕疼。");
  });

  let myButton = document.querySelector("button");
  let myHeading = document.querySelector("h1");
//个性化欢迎
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = myName+ " ,你很好看" ;
    }
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = storedName+" ,你很好看"  ;
  }
//onclick 事件处理器
  myButton.onclick = function () {
    setUserName();
  };
  