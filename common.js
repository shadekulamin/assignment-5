function getInputValueById(id){
    const inputNumber=document.getElementById(id).value;
    return inputNumber;
}

function getInnerTextById(id){
    const inputText=document.getElementById(id).innerText;
    return inputText;
}

function showSectionById(id){
    document.getElementById('donation-section').classList.add('hidden')
    document.getElementById('history-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}
