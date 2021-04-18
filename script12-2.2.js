// homework 12

// homework 10 переписать на async/await

let button = document.querySelector('button');
let buttonUpdate = document.querySelector('.button-update');

button.addEventListener('click', initial);
buttonUpdate.addEventListener('click', clearCache);

// localStorage.clear();

(async () => {
    let currencies = await getCurrencies();
    createSelect(currencies);
})();

async function initial() {
    let rate = await getOfficialRate();
    convertBynAndResult(rate);
};

async function clearCache() {
        let allCurrencies = await getServerResponse();
        let update = await updateCurrenciesAndDate(allCurrencies);
        createSelect(allCurrencies);
};

async function getCurrencies() {

    if (!localStorage.getItem("allCurrencies")) {

        let allCurrencies = await getServerResponse();
        putCurrenciesInLocalstorage(allCurrencies);
        putNewDateInLocalstorage();

        return allCurrencies;
    }

    let currDate = new Date();
    currDate = getDayMonthYear(currDate);

    if (currDate > localStorage.date) {
        localStorage.date = currDate;

        localStorage.removeItem("allCurrencies");

        let allCurrencies = await getServerResponse();
        putCurrenciesInLocalstorage(allCurrencies);

        return allCurrencies;
    } else return JSON.parse(localStorage.getItem('allCurrencies'));
};

async function getServerResponse(url = "http://www.nbrb.by/API/ExRates/Currencies") {
    try {
        let response = await fetch(url);
        let result = await response.json();
        return result;
    } catch (err) {
        alert('error');
    }
}

async function createSelect(array) {
    array.forEach(function(currency) {
        let select = document.querySelector('select');
        let option = select.appendChild(document.createElement('option'));

        option.innerText = currency.Cur_Abbreviation;
        option.setAttribute('data-id', currency.Cur_ID);
    })
}

//get id selected element 
function getCurId() {
    let select = document.querySelector('select');
    let indOpt = select.options.selectedIndex;
    return select.options[indOpt].dataset.id;
}

async function getOfficialRate() {
    let url = "http://www.nbrb.by/api/exrates/rates" + "/" + getCurId();

    let result =  await getServerResponse(url);
    return result.Cur_OfficialRate;
};

async function convertBynAndResult(rate) {
    let input = document.querySelector('input');
    let byn = input.value;
    let result = Math.ceil((+byn / rate) * 100) / 100;

    let allCurrencies = JSON.parse(localStorage.getItem('allCurrencies'));
    let curId = +getCurId();

    let rightСurrency = allCurrencies.find(currency => currency.Cur_ID === curId);
    if (rightСurrency) {
        let curName = rightСurrency.Cur_Name_Eng;

        let h3 = document.querySelector('h3');
        h3.innerText = `You can by ${result} ${curName} for ${byn} BYN`;
    }

};

function updateCurrenciesAndDate(currency) {
    localStorage.clear();
    putCurrenciesInLocalstorage(currency);
    putNewDateInLocalstorage();
}

function putNewDateInLocalstorage() {
    let newDate = new Date();
    let date = getDayMonthYear(newDate);
    localStorage.setItem("date", date);
}

function putCurrenciesInLocalstorage(curr) {
    let currencies = JSON.stringify(curr);
    localStorage.setItem("allCurrencies", currencies);
}

function getDayMonthYear(date) {
    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear();
    return (`${day}${month}${year}`);
}

function checkSelection() {
    let input = document.querySelector('input');
    let select = document.querySelector('select');
    let option = select.appendChild(document.createElement('option'));
    if (!input.value.length || select.options.selectedIndex === 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}