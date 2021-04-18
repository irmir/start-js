// homework 11

// Вы записывает ещё одно значение в локалстор — там будет лежать ДАТА последнего 
// обновления кеша с валютами, чтобы при загрузке страницы проверить, 
// было ли это сегодня. Если не сегодня, то забираем новые данные. 
// Плюс к этому я бы ещё добавил кнопку Обновить валюты, 
// которые принудительно чистят кеш и забирает новые данные


let div = document.getElementsByClassName('wrapper');
let input = document.querySelector('input');
let select = document.querySelector('select');
let option = select.appendChild(document.createElement('option'));
option.innerText = 'Choose currency';
option.setAttribute('disabled', null);
let button = document.querySelector('button');
button.disabled = true;
let buttonUpdate = document.querySelector('.button-update');
let h3 = document.querySelector('h3');
let curId;
let curDate = new Date();
let allCurrencies;

// localStorage.clear();

button.addEventListener('click', initial);
buttonUpdate.addEventListener('click', clearCache);

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

function clearCache() {
    updateCurrencies()
        .then(function(result) {
            createSelect(result)
    })
}

function getCurrencies() {
    return new Promise(function(resolve, reject) {
        if (!localStorage.getItem("allCurrencies")) {
            fetch("http://www.nbrb.by/API/ExRates/Currencies")
                .then(response => response.json())
                .then(res => {
                    let allCurrencies = res;
                    let serialAllCurrencies = JSON.stringify(allCurrencies);
                    localStorage.setItem("allCurrencies", serialAllCurrencies);

                    let date = new Date();
                    let lDate = date.getDate();
                    let lMonth = date.getMonth();
                    let lYear = date.getFullYear();
                    date = (`${lDate}${lMonth}${lYear}`);
                    localStorage.setItem("date", date);

                    resolve(allCurrencies);
                });
        } else {
            let cDate = curDate.getDate();
            let cMonth = curDate.getMonth();
            let cYear = curDate.getFullYear();
            curDate = (`${cDate}${cMonth}${cYear}`);

            date = localStorage.date;
            if (curDate > date) {
                localStorage.date = curDate;
                localStorage.removeItem("allCurrencies");
                fetch("http://www.nbrb.by/API/ExRates/Currencies")
                    .then(response => response.json())
                    .then(res => {
                        let allCurrencies = res;
                        let serialAllCurrencies = JSON.stringify(allCurrencies);
                        localStorage.setItem("allCurrencies", serialAllCurrencies);
                        resolve(allCurrencies);
                    });

            } else {
                let allCurrencies = JSON.parse(localStorage.getItem('allCurrencies'));
                resolve(allCurrencies);
            }
        }
    });
};

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

function updateCurrencies() {
    localStorage.removeItem('allCurrencies')
    return new Promise(function(resolve,reject){
            localStorage.removeItem("allCurrencies");
    fetch("http://www.nbrb.by/API/ExRates/Currencies")
        .then(response => response.json())
        .then(res => {
            allCurrencies = res;
            serialAllCurrencies = JSON.stringify(allCurrencies);
            localStorage.setItem("allCurrencies", serialAllCurrencies);
            resolve(allCurrencies);
        });
        
    })
}

