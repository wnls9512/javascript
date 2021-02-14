//ES2015 String의 새로운 메서드

let str = "hello world ! ^^ ~~";
let matchstr = "helloo ~~";

// 문자열 매칭

// startsWith()
console.log(str.startsWith(matchstr));
// endsWith()
console.log(str.endsWith(matchstr));
//includes()
console.log(str.includes("^^^"));
