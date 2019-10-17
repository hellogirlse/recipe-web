function countAmount() {
    var qty = document.getElementById("qtySelect").value;
    console.log(qty);
    var myAmountList = document.getElementsByClassName("amount");

    for (var i = 0; i < myAmountList.length; i+1) {
        var newAmount = myAmountList[i].dataset.amount * qty;
        myAmountList[i].innerHTML = newAmount
    }
}

function stepDone(element) {
    console.log(element);
    var myClassList = element.classList;
    if (myClassList.contains('step-done')) {
        console.log('Klass step-done finns');
        myClassList.remove('step-done');
    }
    else {
        console.log('Klass step-done saknas');
        myClassList.add('step-done');
    }
}

function submitForm(){
    alert('Tack för ditt meddelande');
}