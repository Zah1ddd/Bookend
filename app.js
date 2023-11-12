const inputName = document.querySelector(".name");
const inputAuthor = document.querySelector(".author");
const inputPrice = document.querySelector(".price");
const inputCount = document.querySelector(".count");
const inputTitle = document.querySelector(".title");
const buttonOfOrder = document.querySelector(".order");
const validationContainer1 = document.querySelector(".v-container-1");
const validationContainer2 = document.querySelector(".v-container-2");
const validationContainer3 = document.querySelector(".v-container-3");
const validationContainer4 = document.querySelector(".v-container-4");
const validationContainer5 = document.querySelector(".v-container-5");
const taskTable = document.querySelector(".table");

const vMessage = [
  {
    id: 1,
    message: "Book name must be greater than 5 letters",
  },
  {
    id: 2,
    message: "The book must be worth at least $15 and authored by someone",
  },
  {
    id: 3,
    message:
      "The book must have a minimum of 200 pages and be authored by someone",
  },
  {
    id: 4,
    message: "The book must be worth at least $15",
  },
  {
    id: 5,
    message: "Write which category the book belongs to",
  },
];

const checkNumber = function (value) {
  return !isNaN(value) && value !== "";
};

const inputCheckName = function () {
  const tableInputName = inputName.value;
  const checkName = tableInputName.length > 5;
  validationContainer1.innerHTML = "";
  if (!checkName) {
    validationContainer1.innerHTML = `<span class="text">${vMessage[0].message}</span>`;
  }
};

const inputCheckAuthor = function () {
  const tableInputAuthor = inputAuthor.value;
  validationContainer2.innerHTML = "";
  if (tableInputAuthor === "") {
    validationContainer2.innerHTML = `<span class="text">${vMessage[1].message}</span>`;
  }
};

const inputCheckPrice = function () {
  const tableInputPrice = inputPrice.value;
  validationContainer3.innerHTML = "";
  if (!checkNumber(tableInputPrice)) {
    validationContainer3.innerHTML = `<span class="text">${vMessage[2].message}</span>`;
  }
};

const inputCheckCount = function () {
  const tableInputCount = inputCount.value;
  validationContainer4.innerHTML = "";
  if (tableInputCount === "") {
    validationContainer4.innerHTML = `<span class="text">${vMessage[3].message}</span>`;
  }
};

const inputCheckTitle = function () {
  const tableInputTitle = inputTitle.value;
  validationContainer5.innerHTML = "";
  if (tableInputTitle === "") {
    validationContainer5.innerHTML = `<span class="text">${vMessage[4].message}</span>`;
  }
};

function addToTable() {
  const table = document.querySelector(".table");
  const newRow = table.insertRow(-1);

  const nameWrite = newRow.insertCell(0);
  const authorWrite = newRow.insertCell(1);
  const priceWrite = newRow.insertCell(2);
  const countWrite = newRow.insertCell(3);
  const titleWrite = newRow.insertCell(4);

  nameWrite.innerHTML = inputName.value;
  authorWrite.innerHTML = inputAuthor.value;
  priceWrite.innerHTML = inputPrice.value;
  countWrite.innerHTML = inputCount.value;
  titleWrite.innerHTML = inputTitle.value;

  inputName.value = "";
  inputAuthor.value = "";
  inputPrice.value = "";
  inputCount.value = "";
  inputTitle.value = "";

  validationContainer1.innerHTML = "";
  validationContainer2.innerHTML = "";
  validationContainer3.innerHTML = "";
  validationContainer4.innerHTML = "";
  validationContainer5.innerHTML = "";
}

buttonOfOrder.addEventListener("click", addToTable);


