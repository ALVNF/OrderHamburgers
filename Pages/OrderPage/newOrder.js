function resetCount(){
    const hamS = document.querySelector('#hamItemS');
    const hamB = document.querySelector('#hamItemB');
    const hamQ = document.querySelector('#hamItemQ');
    const hamBQ = document.querySelector('#hamItemBQ');

    hamS.callResetCount();
    hamB.callResetCount();
    hamQ.callResetCount();
    hamBQ.callResetCount();
}

function valueCount(){
    const hamS = document.querySelector('#hamItemS');
    const hamB = document.querySelector('#hamItemB');
    const hamQ = document.querySelector('#hamItemQ');
    const hamBQ = document.querySelector('#hamItemBQ');
    
    const hamSValue= hamS.getItemName() + " Cantidad= " +hamS.callGetCountVal();
    const hamBValue= hamB.getItemName() + " Cantidad= " + hamB.callGetCountVal();
    const hamQValue= hamQ.getItemName() + " Cantidad= " + hamQ.callGetCountVal();
    const hamBQValue= hamBQ.getItemName() + " Cantidad= " + hamBQ.callGetCountVal();

    const fname = document.getElementById("fname").value;
    const sname = document.getElementById("sname").value;
    const streat = document.getElementById("streat").value;
    const tlp = document.getElementById("tlp").value;
    const mail = document.getElementById("mail").value;

    const data = JSON.stringify(
        {fname:fname,
        sname:sname,
        streat:streat,
        tlp:tlp,
        mail:mail,
        hamSValue:hamSValue,
        hamBValue:hamBValue,
        hamQValue:hamQValue,
        hamBQValue:hamBQValue});


    var xhr = new XMLHttpRequest();
    xhr.open("POST","../../emailSender.php");
    xhr.setRequestHeader("Content-Type","application/json");
    xhr.onreadystatechange = function() { //Call a function when the state changes.
        if(xhr.readyState == 4 && xhr.status == 200) { // complete and no errors
            showOrderDone();
        }
    };
    xhr.send(data);

    resetCount();
}

function showOrderDone(){

    let divBack = document.getElementById('divBackgnd');
    let divOrd = document.getElementById('DivOrder');
    let divblur = document.getElementById('div4blur');

    divBack.classList.toggle('show');
    divOrd.classList.toggle('show');
    divblur.classList.toggle('blur');

}

function hideOrderDone(){
 
    let divBack = document.getElementById('divBackgnd');
    let divOrd = document.getElementById('DivOrder');
    let divblur = document.getElementById('div4blur');

    divBack.classList.toggle('show');
    divOrd.classList.toggle('show');
    divblur.classList.toggle('blur');

}
