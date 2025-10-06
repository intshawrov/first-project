const form = document.getElementById('form')
const firstname_input = document.getElementById('firstname-input')
const eamil_input = document.getElementById('email-input')
const password_input = document.getElementById('password-input')
const repeat_password_input = document.getElementById('repeat-password-input')

form.addEventListener('submit', (e) => {
      // e.preventDefault() Prevent Submit

      let errors = []

      if(firstname_input){
         // If we have a firstname input then we are the signup
         errors = getSignupFormErrors(firstname_input.value, eamil_input.value, password_input.value, reapet_password_input.value)   
      }else{
            // If we don't have a firstname input we are in the login
            errors = getLoginFormErrors(eamil_input.value, passwrod_input.value)
      }

      if(errors.length > 0){
            // If there are any errors
            e.preventDefault()
      }

})

function getSignupFormErrors(firstname, email, password, reapetPasswrod){
     let errors = []
     
     if(firstname === '' || firstname == null){
      errors.push('Firstname is required')
      firstname_input.parentElement.classList.add('incorrect')
     }
      if(email === '' || email == null){
      errors.push('Email is required')
      email_input.parentElement.classList.add('incorrect')
     }
      if(password === '' || password == null){
      errors.push('Password is required')
      password_input.parentElement.classList.add('incorrect')
     }

     return errors;
}



