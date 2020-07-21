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
                    'E-mail': inpEm,
                    'Password': inpPass,
                    'Connected' : true
        
                }
                console.log(ObjPerson);
                let lockalStorage = localStorage.setItem(inpLog,  JSON.stringify(ObjPerson))
               setTimeout(() => {
                window.location.href = 'own_cabinet.html'  
               }, 1000);
                
            
            }


     } else{
            alert('Пароли не совпадают!')
            console.error('Error in the Pass')
    }


    

}); 


// let Arg = (localStorage !== -1)  ?  console.log('Сначало зарегестрируйтесь') :  console.log('Пользователь зарегестрирован! Поздровляю на в личном кабинете!') // РЕШИТЬ ОШИБКУ!1111






