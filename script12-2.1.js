
let button = document.querySelector('button');
button.addEventListener('click', initial);

(async () => {
    try {
        let currencies = await getCurrencies();
        createSelect(currencies);
    } catch (err) {
        alert ('error')
    }
})();

async function initial() {
	try {
		let rate = await getOfficialRate();
		convertBynAndResult(rate);
	} catch (err) {
        console.log ('error!')
    }
}

async function getCurrencies() {
	let response = await fetch("http://www.nbrb.by/API/ExRates/Currencies");
	let allCurrencies = await response.json();
	return allCurrencies;
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
let curId = function() {
	let select = document.querySelector('select');
    let indOpt = select.options.selectedIndex;
    return select.options[indOpt].dataset.id;
}

async function getOfficialRate() {
        let url = "http://www.nbrb.by/api/exrates/rates" + "/" + curId()
        try {
        	let response = await fetch(url);
        	let res = await response.json();
        	
        	return  res.Cur_OfficialRate;
        } catch (err) {
                alert("No data for selected currency");
            }
};

async function convertBynAndResult(rate) {
    let byn = input.value;
    let result = Math.ceil((+byn / rate) * 100) / 100;

    let allCurrencies = JSON.parse(localStorage.getItem('allCurrencies'));
    allCurrencies.forEach(function(currency) {
        if (currency.Cur_ID === +curId()) {
            curName = currency.Cur_Name_Eng;
        }
    })
	let h3 = document.querySelector('h3');    
    h3.innerText = `You can by ${result} ${curName} for ${byn} BYN`;
}

function checkSelection() {
	let select = document.querySelector('select');

    if (!input.value.length || select.options.selectedIndex === 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}



