
let btn = document.querySelector('#btn')

btn.addEventListener('click', () => {


let inpLog = document.querySelector('#inp-log').value
let inpEm = document.querySelector('#inp-em').value
let inpPass = document.querySelector('#inp-pass').value
let inpPass2 = document.querySelector('#inp-pass2').value





    
  
        if (inpPass == inpPass2) {
            

        if (inpLog == '' || inpEm == '' || inpPass == '' || inpPass2 == '') {
                alert('Заполните все поля!')
    } else {
    
                let ObjPerson = {
                    'Login': inpLog,
                    'E-mail': inpEm,
                    'Password': inpPass
        
                }
                localStorage.setItem('One', ObjPerson)
                console.log(ObjPerson);
            }


     } else{
            alert('Пароли не совпадают!')
            console.error('Error in Pass')
    }



    
    




})










