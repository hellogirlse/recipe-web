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

function countAmount() {
    var qty = document.getElementById("qtySelect").value;
    console.log(qty);
    var myAmountList = document.getElementsByClassName("amount");

    for (var i = 0; i < myAmountList.length; i++) {
        var newAmount = myAmountList[i].dataset.amount * qty;
        myAmountList[i].innerHTML = newAmount
    }
}

function validateForm(){
    var name = document.getElementById("name").value;
    if (name != "Stina") {
      alert("Namn måste vara Stina");
      return false;
    }
}