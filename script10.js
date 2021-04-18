// homework 10

// задание task10.jpeg

let div = document.getElementsByClassName('wrapper');
let input = document.querySelector('input');
let select = document.querySelector('select');
let option = select.appendChild(document.createElement('option'));
option.innerText = 'Choose currency';
option.setAttribute('disabled', null);
let button = document.querySelector('button');
button.disabled = true;
let h3 = document.querySelector('h3');
let curId;

button.addEventListener('click', initial);

getCurrencies()
    .then(function(result) {
        createSelect(result)
    });


function initial() {
    getOfficialRate()
        .then(function(result) {
            convertBynAndResult(result)
        })
}

function getCurrencies() {
    return new Promise(function(resolve, reject) {
        fetch("http://www.nbrb.by/API/ExRates/Currencies")
            .then(response => response.json())
            .then(res => {
                let allCurrencies = res;
                let serialAllCurrencies = JSON.stringify(allCurrencies);
                localStorage.setItem("allCurrencies", serialAllCurrencies);
                resolve(allCurrencies);
            });
    })
}

function createSelect(array) {
    array.forEach(function(currency) {
        let option = select.appendChild(document.createElement('option'));
        option.innerText = currency.Cur_Abbreviation;
        option.setAttribute('data-id', currency.Cur_ID);
    })
}

function getOfficialRate() {
    return new Promise(function(resolve, reject) {
        let indOpt = select.options.selectedIndex;
        curId = select.options[indOpt].dataset.id;
        let url = "http://www.nbrb.by/api/exrates/rates" + "/" + curId
        fetch(url)
            .then(response => response.json())
            .then(res => {
                let rate = res.Cur_OfficialRate;
                resolve(rate);
            })
            .catch(function(err) {
                alert("No data for selected currency");
            })
    });
};

function convertBynAndResult(rate) {
    let byn = input.value;
    let result = Math.ceil((+byn / rate) * 100) / 100;
    let allCurrencies = JSON.parse(localStorage.getItem('allCurrencies'));
    allCurrencies.forEach(function(currency) {
        if (currency.Cur_ID === +curId) {
            curName = currency.Cur_Name_Eng;
        }
    })
    h3.innerText = `You can by ${result} ${curName} for ${byn} BYN`;
}

function checkSelection() {
    if (!input.value.length || select.options.selectedIndex === 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}