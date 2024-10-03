document.getElementById('donation-btn').addEventListener('click',function(event){
    event.preventDefault;
    const noakhaliInput=getInputValueById('noakhali-input');
    const fundForNoakhali=getInnerTextById('fund-for-noakhali');
    const total=parseFloat(noakhaliInput)+parseFloat(fundForNoakhali);
    document.getElementById('fund-for-noakhali').innerText=total;
    const mainBalance=getInnerTextById('main-balance');
    const reduce=parseFloat(mainBalance)-parseFloat(noakhaliInput)
    document.getElementById('main-balance').innerText=reduce


    // add to transaction history 
    const div =document.createElement('div')
    div.classList.add('bg-slate-200');
    div.classList.add('px-8')
    div.classList.add('py-8')
    div.classList.add('mb-2')
    div.classList.add('rounded-xl')
    div.innerHTML=
    `
    <p>${total} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p>${new Date}</p>
    `
    document.getElementById('transaction-container').appendChild(div)
})


document.getElementById('donation-btn-feni').addEventListener('click',function(event){
    event.preventDefault;
    const feniiInput=getInputValueById('feni-input');
    const fundForFeni=getInnerTextById('fund-for-feni');
    const totalFeni=parseFloat(feniiInput)+parseFloat(fundForFeni);
    document.getElementById('fund-for-feni').innerText=totalFeni;
    const mainBalance=getInnerTextById('main-balance');
    console.log(mainBalance,fundForFeni)
    const reduceFeni=parseFloat(mainBalance)-parseFloat(feniiInput)
    document.getElementById('main-balance').innerText=reduceFeni


    // add to transaction history 
    const div =document.createElement('div')
    div.classList.add('bg-slate-200');
    div.classList.add('px-8')
    div.classList.add('py-8')
    div.classList.add('rounded-xl')
    div.classList.add('mb-2')
    div.innerHTML=
    `
    <p>${totalFeni} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p>${new Date}</p>
    `
    document.getElementById('transaction-container').appendChild(div)

})

document.getElementById('quota-donation').addEventListener('click',function(event){
    event.preventDefault;
    const quotaInput=getInputValueById('quota-input');
    const fundForQuota=getInnerTextById('fund-for-quota');
    const totalQuota=parseFloat(quotaInput)+parseFloat(fundForQuota);
    document.getElementById('fund-for-quota').innerText=totalQuota;
    const mainBalance=getInnerTextById('main-balance');
    const reduceQuota=parseFloat(mainBalance)-parseFloat(quotaInput)
    document.getElementById('main-balance').innerText=reduceQuota

    

    // add to transaction history 
    const div =document.createElement('div')
    div.classList.add('bg-slate-200');
    div.classList.add('px-8')
    div.classList.add('py-8')
    div.classList.add('rounded-xl')
    div.classList.add('mb-2')
    div.innerHTML=
    `
    <p>${totalQuota} Taka is Donated for famine-2024 at Feni, Bangladesh</p>
    <p>${new Date}</p>
    `
    document.getElementById('transaction-container').appendChild(div)
})


document.getElementById('donationBtn').addEventListener('click', function(){
    showSectionById('donation-section')
})
document.getElementById('historyBtn').addEventListener('click', function(){
    showSectionById('history-section')
})
