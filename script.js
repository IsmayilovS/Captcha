const captchaText = document.querySelector('#captchaText')
const input = document.querySelector ('#input')
const btn = document.querySelector('#btn')
const main = document.querySelector('body')
const boxUp = document.querySelector('#color')

const arr = []

let random1 = '0123456789'

let random2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

let random3 = 'abcdefghijklmnopqrstuvwxyz'

const combination = random1.concat(random2,random3)

let captcha ="";

const getRandom = () => {
    return combination [Math.floor(Math.random()*combination.length)]
}

function generateCaptcha(){
    for(let i=0; i<6; i++) {
        captcha += getRandom()
    }
}
generateCaptcha()


captchaText.textContent = captcha

input.addEventListener('input', function (e){
    const givenValue = e.target.value
    
    
    if( givenValue == captcha){
        btn.style.backgroundColor = 'green'
        boxUp.style.backgroundColor = 'green'
    }

    if (givenValue !== captcha && givenValue.length === 6){
        
        btn.style.backgroundColor = ''
        boxUp.style.backgroundColor = 'red'
        input.style.borderColor = 'red'
    }
    else if(givenValue.length === 5){
        btn.style.backgroundColor = ''
        boxUp.style.backgroundColor = ''
        input.style.borderColor = ''
    }
    })

input.addEventListener('keypress', (e) =>{
    if (e.target.value.length === 6) {
        e.preventDefault();
    }

})
