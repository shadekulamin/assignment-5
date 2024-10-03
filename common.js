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



function getHistory(){
    const div =document.createElement('div')
    div.classList.add('bg-slate-200');
    div.classList.add('px-8')
    div.classList.add('py-8')
    div.classList.add('rounded-xl')
    div.innerHTML=
    `
    <h4>cash out</h4>
    <p>${total} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    `
    document.getElementById('transaction-container').appendChild(div)
}