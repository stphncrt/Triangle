
class Triangle {
  constructor(firstside,secondside,thirdside){
    this.first= firstside,
    this.second= secondside,
    this.third= thirdside
  }
}

// let sides = [];
// let kac;

// 
const first = document.getElementById("firstSide").value;
const second = document.getElementById("secondSide").value;
const third = document.getElementById("thirdSide").value;

// console.log(first);
// console.log(second);
// console.log(third);

const inputTriangle = new Triangle (first,second,third);
// console.log(inputTriangle.first);


const outcome = document.getElementById('outcome');
document.querySelector(".btn-grad").addEventListener("click", trial);

function trial() {
  let result;
  let sum = 0;

  if(inputTriangle.first){
// Üçgen olma şartı
  }
  else if(inputTriangle.first==inputTriangle.second && inputTriangle.second==inputTriangle.third && inputTriangle.first==inputTriangle.third ){
   result ='Eşkenar üçgen';
 }
 else if(inputTriangle.first ){
// en az ikisi eşitse eşkenar
result ='İkiz üçgen';
 }
 else if (inputTriangle.first){
  //  üç kenarda farklı ise
  result ='Çeşit kenar üçgen'
 }

  // let sides = [parseInt(first), parseInt(second), parseInt(third)];
  // console.log(sides[0]);

  // for (x of sides) {
  //   sum += x;
  // }
  // console.log(sum);
outcome.innerHTML = result;

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