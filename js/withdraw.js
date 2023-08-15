document.getElementById('btn-withdraw').addEventListener('click', function(){
   const withdrawField = document.getElementById('withdraw-input');
   const withdrawString = withdrawField.value;
   const newWithdraw = parseFloat(withdrawString);

   withdrawField.value = '';
   if(isNaN(newWithdraw)){
     alert('give number, field is empty');
     return;
   };
  
   //
   const currentWithdraw = document.getElementById('current-withdraw');
   const currentWithdrawString = currentWithdraw.innerText;
   const currentWithdrawBalance = parseFloat(currentWithdrawString);

   // 
   const mainBalance = document.getElementById('balance');
   const mainBalanceString = mainBalance.innerText;
   const mainBalanceAmount = parseFloat(mainBalanceString);
   //    
   if(newWithdraw > mainBalanceAmount){
    alert('you can not withdraw more than your current balance');
    return;
   };

   currentWithdraw.innerText = currentWithdrawBalance + newWithdraw;

   const totalMainBalance = mainBalanceAmount - newWithdraw;
   mainBalance.innerText = totalMainBalance;
   
   
});

