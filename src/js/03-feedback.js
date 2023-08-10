import throttle from "lodash.throttle";

const STORAGE_KEY = "feedback-form-state";

const form = document.querySelector('.feedback-form')

const formEmail = document.querySelector('form input')

const formText = document.querySelector('form textarea')



const formData = {};
// document.addEventListener('DOMContentLoaded',()=>fillForm())
fillForm()
// get informatin, send on localstorage
form.addEventListener('input',throttle(onFormInput,500))
function onFormInput(evt) {
    formData[evt.target.name] = evt.target.value;
  

localStorage.setItem('STORAGE_KEY', JSON.stringify(formData))
}

//  reset form
form.addEventListener('submit', onSubmitForm)
function onSubmitForm(evt) {
    evt.preventDefault();
    evt.currentTarget.reset();
    localStorage.removeItem('STORAGE_KEY')
    console.log(formData);
    // formData.email = ''
    // formData.email = ''

}

// check localstorage - empty or no 
function fillForm() {
    const savedFormData =JSON.parse(localStorage.getItem("STORAGE_KEY")) 
    if (savedFormData) {
        formData.email = savedFormData.email || '';
        formData.message = savedFormData.message || '';
        formEmail.value = formData.email;
        formText.value = formData.message;
       
    } 
}