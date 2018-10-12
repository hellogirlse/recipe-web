var kladdkakaIngredients = [{
    amount: 125, ingredient: 'Smör', unit: 'g'
}, {
    amount: 2.5, ingredient: 'Strösocker', unit: 'dl'
}, {
    amount: 2, ingredient: 'Ägg', unit: 'st'
}, {
    amount: 1, ingredient: 'Vetemjöl', unit: 'dl'
}, {
    amount: 3, ingredient: 'Kakao', unit: 'msk'
}, {
    amount: 1, ingredient: 'Vaniljsocker', unit: 'tsk'
}]

function init() {
    var amountList = document.getElementsByClassName("amount");
    var unitList = document.getElementsByClassName("unit");
    var ingredientList = document.getElementsByClassName("ingredient");

    for (var i = 0; i < kladdkakaIngredients.length; i++) {
        amountList[i].innerHTML = kladdkakaIngredients[i].amount;
        amountList[i].dataset.amount = kladdkakaIngredients[i].amount;
        unitList[i].innerHTML = kladdkakaIngredients[i].unit;
        ingredientList[i].innerHTML = kladdkakaIngredients[i].ingredient;
    }
}

function countAmount() {
    var qty = document.getElementById("qtySelect").value;
    console.log(qty);
    var amountList = document.getElementsByClassName("amount");
/** 
   for (var i = 0; i < kladdkakaIngredients.length; i++) {
    amountList[i].innerHTML = kladdkakaIngredients[i].amount * antal;
    }
    */
    for (var i = 0; i < amountList.length; i++) {
        var newAmount = amountList[i].dataset.amount * qty;
        amountList[i].innerHTML = newAmount
    }
}

function stepDone(element) {
    console.log(element);
    var classList = element.classList;
    if (classList.contains('step-done')) {
        console.log('Klass step-done finns');
        classList.remove('step-done');
    }
    else {
        console.log('Klass step-done saknas');
        classList.add('step-done');
    }
}


function init2() {
    var tbody = document.getElementsByTagName('tbody')[0];
    for (var i = 0; i < kladdkakaIngredients.length; i++) {
        var tr = document.createElement('tr');

        var tdAmount = document.createElement('td');
        tdAmount.classList.add('amount');
        tdAmount.dataset.amount = kladdkakaIngredients[i].amount;
        tdAmount.innerHTML = kladdkakaIngredients[i].amount;

        var tdUnit = document.createElement('td');
        tdUnit.innerHTML = kladdkakaIngredients[i].unit;

        var tdIngredient = document.createElement('td');
        tdIngredient.innerHTML = kladdkakaIngredients[i].ingredient;

        tr.appendChild(tdAmount);
        tr.appendChild(tdUnit);
        tr.appendChild(tdIngredient);
        tbody.appendChild(tr);
    }

}

function submitForm(){
    alert('Tack för ditt meddelande');
}