
const first_side = document.getElementById('firstSide').nodeValue;
const second_side = document.getElementById('secondSide').nodeValue;
const third_side = document.getElementById('thirdSide').nodeValue;
document.getElementsByClassName('btn-grad').addEventListener('click', Triangle )






function Triangle (first_side, second_side, third_side) {
    return(
        first_side + second_side + third_side );
}
