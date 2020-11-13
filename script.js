// let sides = [];
let kac;
document.querySelector(".btn-grad").addEventListener("click", trial);

var z;
function trial() {
  let sum = 0;
  let first = document.getElementById("firstSide").value;
  let second = document.getElementById("secondSide").value;
  let third = document.getElementById("thirdSide").value;
  console.log(first);
  console.log(second);
  console.log(third);
  let sides = [parseInt(first), parseInt(second), parseInt(third)];
  console.log(sides[0]);

  for (x of sides) {
    sum += x;
  }
  console.log(sum);
}

// var sides = [first_side, second_side, third_side ];
// if sides[0] > 0 and sides[1] > 0 and sides[2] > 0
//     for (let i, i < sides.length(), i++;
//         if sides[i]

// // deneme amaçlı. fonction değişecek
// function alan(first_side, second_side, third_side) = {
//     return(
//         first_side + second_side + third_side ;
// }
