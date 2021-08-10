var ism = prompt("ismingizni kiriting");
var yil = prompt("Hozirgi yilni kiriting");
var kun = prompt("Tug'ilgan yilingizni kiriting");

  console.log(ism+', yoshingiz: '+ (yil-kun));

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function primer() {
  let problem = [3, "+", 4];
  let sign = random(1, 4);
  if (sign == 1) {
    sign = "+";
  } else if (sign == 2) {
    sign = "-";
  } else if (sign == 3) {
    sign = "*";
  } else if (sign == 4) {
    sign = "/";
  }

  return [random(1, 50), random(1, 100), sign];
}
let son = prompt("Nechta misol ishlisiz?");
for (let i = 0; i < son; i++) {
  let primer1 = primer();

  let userAnswer = +prompt(primer1[0] + " " + primer1[2] + " " + primer1[1]);
  let togriJavob;

  if (primer1[2] == "+") {
    togriJavob = primer1[0] + primer1[1];
  } else if (primer1[2] == "-") {
    togriJavob = primer1[0] - primer1[1];
  } else if (primer1[2] == "*") {
    togriJavob = primer1[0] * primer1[1];
  } else if (primer1[2] == "/") {
    togriJavob = primer1[0] / primer1[1];
  }
  alert(userAnswer == togriJavob ? "togri" : "notogri");
  console.log(
    userAnswer == togriJavob
      ? `Sizning javob togri - ${userAnswer}`
      : `Sizning javob notogri - ${userAnswer} ! Togri javob - ${togriJavob}`
  );
}
