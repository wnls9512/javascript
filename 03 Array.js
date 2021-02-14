//Array iterator

var data = [1, 2, undefined, NaN, null, ""];

for (var i = 0; i < data.length; i++) {
  console.log(data[i]);
}

data.forEach(function (value) {
  console.log("valueis", value);
});

Array.prototype.getIndex = function () {};
for (let value in data) {
  console.log(data[idx]);
}
