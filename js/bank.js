document.getElementById('btn-deposit').addEventListener('click', function(){
    console.log('hii')
    const depositField = document.getElementById('deposit-input');
    const depositString = depositField.value;
    const newDepositAmount = parseFloat(depositString);

    depositField.value = '';
    if(isNaN(newDepositAmount)){
        alert('give number');
        return;
    };
    // 
    const currentDepositBalance = document.getElementById('current-deposit');
    const currentDepositString = currentDepositBalance.innerText;
    const currentDeposit = parseFloat(currentDepositString);
    // 
    const currentDepositTotal = currentDeposit + newDepositAmount;
    currentDepositBalance.innerText = currentDepositTotal;
    
    // 
    const currentBalance = document.getElementById('balance');
    const balanceString = currentBalance.innerText;
    const balanceAmount = parseFloat(balanceString);
    
    const currentTotalBalance = balanceAmount + newDepositAmount;
    currentBalance.innerText = currentTotalBalance;
    
});

