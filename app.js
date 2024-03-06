function setInnerText(id, value){
    let element = document.getElementById(id);
    element.innerText = value;
    return element;
}
function setValue(id){
    let element = document.getElementById(id);
    element.value = "";
}

function percentage(tk , percent){
    let myPercentage = tk / 100 * percent;
    return myPercentage;
}
