const button = document.querySelector('.button');
const result = document.querySelector('.result');

function colorMeWeight() {
  document.getElementById("inputWeight").style.backgroundColor = 'rgb(246, 228, 171)';
};

function colorMeHeight() {
  document.getElementById("inputHeight").style.backgroundColor = 'rgb(246, 228, 171)';
};

function colorMeBackWeight() {
  document.getElementById("inputWeight").style.backgroundColor = 'white';
};

function colorMeBackHeight() {
  document.getElementById("inputHeight").style.backgroundColor = 'white';
};

document.getElementById("inputWeight").onmouseover = colorMeWeight;
document.getElementById("inputHeight").onmouseover = colorMeHeight;
document.getElementById("inputWeight").onmouseout = colorMeBackWeight;
document.getElementById("inputHeight").onmouseout = colorMeBackHeight;

const calculateBMI = () => {
  const weight = document.getElementById("inputWeight").value;
  let a = Number(weight);
  const height = document.getElementById("inputHeight").value;
  let b = Number(height);

  let b2 = Math.pow(b, 2);
  let imt = a / b2;

  console.log(imt);

  // Чтобы не просто обрезать всю вещественную часть, а регулировать этот процесс до определенного количества знаков и при этом округлять, число умножают на 10^n (10 в степени n), где n равно количеству необходимых знаков после запятой. После этого применяют какой-нибудь метод класса Math для округления, ну а затем снова делят на 10^n:

  let scale = Math.pow(10, 2);
  let result3 = Math.round(imt * scale) / scale;

  console.log(result3);

  if (result3 < 18) {
    result.textContent = (`Ваш ИМТ ${result3}: Недостаточный вес. Это может указывать на недостаточное питание или другие проблемы со здоровьем.`);
  } else if (18, 5 < result3 <= 24, 9) {
    result.textContent = (`Ваш ИМТ ${result3}: Нормальный вес. В этом диапазоне считается, что вес находится в здоровых пределах.`);
  } else if (25 < result3 <= 29, 9) {
    result.textContent = (`Ваш ИМТ ${result3}: Избыточный вес. В этой категории есть некоторый риск развития связанных с ожирением заболеваний.`);
  }
  else if (30 < result3 <= 34, 9) {
    result.textContent = (`Ваш ИМТ ${result3}: Ожирение I степени. Риск развития заболеваний, связанных с ожирением, значительно повышен.`);
  }
  else if (35 < result3 <= 39, 9) {
    result.textContent = (`Ваш ИМТ ${result3}: Ожирение II степени. Риск развития серьезных заболеваний, таких как диабет и сердечно-сосудистые заболевания, очень высок.`);
  }
  else {
    result.textContent = (`Ваш ИМТ ${result3}: Тяжелое ожирение (ожирение III степени). Высокий риск развития серьезных заболеваний и осложнений.`);
  }

  inputWeight.value = "";
  inputHeight.value = "";

};

button.addEventListener('click', calculateBMI);

