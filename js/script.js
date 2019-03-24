var soupIngredients = [{
    amount: 0.5, ingredient: 'Gullök', unit: 'st'
}, {
    amount: 2, ingredient: 'Tomater', unit: 'st'
}, {
    amount: 0.5, ingredient: 'Krossade krossade', unit: 'burk'
}, {
    amount: 0.5, ingredient: 'Grönsaksbuljongtärning', unit: 'st'
}, {
    amount: 2.5, ingredient: 'Vatten', unit: 'dl'
}, {
    amount: 0.5, ingredient: 'Vispgrädde', unit: 'dl'
}]

function init() {
    var amountList = document.getElementsByClassName("amount");
    var unitList = document.getElementsByClassName("unit");
    var ingredientList = document.getElementsByClassName("ingredient");

    for (var i = 0; i < soupIngredients.length; i++) {
        amountList[i].innerHTML = soupIngredients[i].amount;
        amountList[i].dataset.amount = soupIngredients[i].amount;
        unitList[i].innerHTML = soupIngredients[i].unit;
        ingredientList[i].innerHTML = soupIngredients[i].ingredient;
    }
}

function countAmount() {
    var qty = document.getElementById("qtySelect").value;
    console.log(qty);
    var amountList = document.getElementsByClassName("amount");
/** 
   for (var i = 0; i < soupIngredients.length; i++) {
    amountList[i].innerHTML = soupIngredients[i].amount * antal;
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
    for (var i = 0; i < soupIngredients.length; i++) {
        var tr = document.createElement('tr');

        var tdAmount = document.createElement('td');
        tdAmount.classList.add('amount');
        tdAmount.dataset.amount = soupIngredients[i].amount;
        tdAmount.innerHTML = soupIngredients[i].amount;

        var tdUnit = document.createElement('td');
        tdUnit.innerHTML = soupIngredients[i].unit;

        var tdIngredient = document.createElement('td');
        tdIngredient.innerHTML = soupIngredients[i].ingredient;

        tr.appendChild(tdAmount);
        tr.appendChild(tdUnit);
        tr.appendChild(tdIngredient);
        tbody.appendChild(tr);
    }

}

function submitForm(){
    alert('Tack för ditt meddelande');
}