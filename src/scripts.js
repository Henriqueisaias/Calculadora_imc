// dados
const data = [
  {
    min: 0,
    max: 18.4,
    classification: "Menor que 18,5",
    info: "Magreza",
    obesity: "0",
  },
  {
    min: 18.5,
    max: 24.9,
    classification: "Entre 18,5 e 24,9",
    info: "Normal",
    obesity: "0",
  },
  {
    min: 25,
    max: 29.9,
    classification: "Entre 25,0 e 29,9",
    info: "Sobrepeso",
    obesity: "I",
  },
  {
    min: 30,
    max: 39.9,
    classification: "Entre 30,0 e 39,9",
    info: "Obesidade",
    obesity: "II",
  },
  {
    min: 40,
    max: 99,
    classification: "Maior que 40,0",
    info: "Obesidade grave",
    obesity: "III",
  },
];

// seleção dos itens

const heightInput = document.querySelector("#height");
const weightInput = document.querySelector("#wheight");
const reset = document.querySelector("#reset");
const calc = document.querySelector("#calc");
const btn_back = document.querySelector("#btn-back");

const imcTable = document.querySelector("#imc-table");
const inputTable = document.querySelector("#input-table");
const infoDiv = document.querySelector(".info-div");

const imcSpanImc = document.querySelector("#imc")
const imcSpanSit = document.querySelector("#sit")

// funções

// funçao de alternar divs
function back() {
  imcTable.classList.toggle("hide");
  inputTable.classList.toggle("hide");
}

// função de reset dos inputs do form
function resetInput() {
  heightInput.value = "";
  weightInput.value = "";
}

// função de gerar tabela
function gerar(data) {
  data.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("info-container");

    const classification = document.createElement("p");
    classification.innerText = item.classification;

    const info = document.createElement("p");
    info.innerText = item.info;

    const obesity = document.createElement("p");
    obesity.innerText = item.obesity;

    div.appendChild(classification);
    div.appendChild(info);
    div.appendChild(obesity);

    infoDiv.appendChild(div);
  });
}

// função de classificaçãp
function classification(imc, data) {
  const imcH1 = document.createElement("h1");
  const imcSit = document.createElement("p");
  imcH1.innerText = imc

    imcSpanImc.innerHTML = ""
    imcSpanSit.innerHTML = ""

  console.log(imc)
  data.forEach((item) => {
    if (imc > item.min && imc < item.max) {
    imcSit.innerText = item.info
    }
    
    


    imcSpanImc.appendChild(imcH1)
    imcSpanSit.appendChild(imcSit)
    
  });
}

gerar(data);

// chamada de reset no botão
reset.addEventListener("click", resetInput);

// função de iniciação
calc.addEventListener("click", (e) => {
  e.preventDefault();

  const height = heightInput.value;
  const weight = weightInput.value;

  const imc = weight / (height * height);

  const imcRounded = Number(imc.toFixed(2));

  back();

  classification(imcRounded, data)
});

// chamada de back e reset no botão de voltar
btn_back.addEventListener("click", (e) => {
  back();
  resetInput();
});
