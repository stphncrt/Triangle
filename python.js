const a = document.getElementById("firstSide").value;
const b = document.getElementById("secondSide").value;
const c = document.getElementById("thirdSide").value;

document.querySelector(".btn-grad").addEventListener("click", trial);

function trial() {
  if (a > 0 && b > 0 && c > 0) {
    if (a + b >= c && a + c >= b && c + b >= a) {
      console.log("it is ok ");
      if (a == b && b == c) {
        console.log("it is an equilateral");
      } else if (a == b || b == c || c == a) {
        console.log(" it is an isosceles");
      } else {
        console.log("it is a scalene");
      }
    } else {
      console.log("it is not a triangle try again");
    }
  } else {
    console.log("it is not a triangle try again");
  }
}

const outcome = document.getElementById("outcome");
