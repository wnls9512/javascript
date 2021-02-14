"use strict";

/* let 의 scope */
var name = "global var";

function home() {
  var homevar = "homevar";
  for (var i = 0; i < 100; i++) {
    console.log(i);
  }
  for (let j = 0; j < 100; j++) {
    console.log(j);
  }

  //var는 block 밖에서도 존재
  console.log(i);
  //let은 block scope
  //console.log(j); //j is not defined!!!!!
}
home();

/* let과 closure */
var list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", function () {
    console.log(i + "번째 리스트 입니다.");
  });
}

/* const */
function home2() {
  const homename = "my house";
  //homename = "your house"; //Assignment to constant variable
  console.log(homename);
}
home2();

function home3() {
  const list = ["apple", "orange", "watermelon"];
  list.push("banana");
  //변수 재할당은 불가능 하지만,
  //const를 사용하더라도 배열과 오브젝트의 값을 변경하는 것은 가능하다.
  console.log(list);
}
home3();

//immutable array
const list1 = ["apple", "orange", "watermelon"];
const list2 = [].concat(list, "banana");
console.log(list1 === list2);
