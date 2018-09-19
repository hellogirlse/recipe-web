var kladdkakaIngredienser = [{
    mangd: 125, ravara: 'Smör', enhet: 'g'
}, {
    mangd: 2.5, ravara: 'Strösocker', enhet: 'dl'
}, {
    mangd: 2, ravara: 'Ägg', enhet: 'st'
}, {
    mangd: 1, ravara: 'Vetemjöl', enhet: 'dl'
}, {
    mangd: 3, ravara: 'Kakao', enhet: 'msk'
}, {
    mangd: 1, ravara: 'Vaniljsocker', enhet: 'tsk'
}]

function init() {
    var mangdList = document.getElementsByClassName("mangd");
    var enhetList = document.getElementsByClassName("enhet");
    var ravaraList = document.getElementsByClassName("ravara");

    for (var i = 0; i < kladdkakaIngredienser.length; i++) {
        mangdList[i].innerHTML = kladdkakaIngredienser[i].mangd;
        enhetList[i].innerHTML = kladdkakaIngredienser[i].enhet;
        ravaraList[i].innerHTML = kladdkakaIngredienser[i].ravara;
    }
}

function countMangd() {
    // Hämta antal från select
    var antal = document.getElementById("antalSelect").value;
    var mangdList = document.getElementsByClassName("mangd");

   for (var i = 0; i < kladdkakaIngredienser.length; i++) {
    mangdList[i].innerHTML = kladdkakaIngredienser[i].mangd * antal;
    }

    /**
     for (var i = 0; i < mangdList.length; i++) {
        mangdList[i].innerHTML = mangdList[i].innerHTML * antal;
    }*/
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
    for (var i = 0; i < kladdkakaIngredienser.length; i++) {
        var tr = document.createElement('tr');

        var tdMangd = document.createElement('td');
        tdMangd.classList.add('mangd');
        tdMangd.innerHTML = kladdkakaIngredienser[i].mangd;

        var tdEnhet = document.createElement('td');
        tdEnhet.innerHTML = kladdkakaIngredienser[i].enhet;

        var tdRavara = document.createElement('td');
        tdRavara.innerHTML = kladdkakaIngredienser[i].ravara;

        tr.appendChild(tdMangd);
        tr.appendChild(tdEnhet);
        tr.appendChild(tdRavara);
        tbody.appendChild(tr);
    }

}

function submitForm(){
    alert('Tack för ditt meddelande');
}