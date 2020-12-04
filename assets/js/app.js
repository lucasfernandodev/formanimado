let $ = (s) => {return document.querySelector(s)};

const container = $('.container');
const btnSignin = $('.btn-signin');
const btnSignup = $('.btn-signup');
const containerForm = $('.container-form');

btnSignin.addEventListener('click', () => {
    containerForm.classList.remove('activeSignUp')
    containerForm.classList.add('activeSignIn') 
    
})

btnSignup.addEventListener('click', () => {
    containerForm.classList.remove('activeSignIn')
    containerForm.classList.add('activeSignUp') 
});

const btnAction =  document.querySelectorAll('.btn-action');

for(i = 0; i < btnAction.length; i++){
    btnAction[i].addEventListener('click', (e) => {
        e.preventDefault();

        container.classList.add('active');
    })
}