document.getElementById('login-btn').addEventListener('click', function(){
    const emailInput = document.getElementById('email-field');
    const email = emailInput.value;

    const passInput = document.getElementById('pass-field');
    const pass = passInput.value;
     
    if(email === 'bap@beta.com' && pass === 'bapbeta'){
        window.location.href = 'bank.html';
    }
    else{
        alert('wrong pass and email')
    }
});