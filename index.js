let inputbox1 = document.querySelector("input[name=firstName]");
let inputbox2 = document.querySelector("input[name=lastName]");
let inputbox3 = document.querySelector("input[name=email]");
let inputbox4 = document.querySelector("input[name=password]");
let btn = document.getElementById("submitBtn");
let errorDiv1 = document.getElementById("error1");
let errorDiv2 = document.getElementById("error2");
let errorDiv3 = document.getElementById("error3");
let errorDiv4 = document.getElementById("error4");

const checkInput = () => {
    if (inputbox1.value.length == 0) {
        (errorDiv1.innerHTML = "First name cannot be empty");
        inputbox1.style.background = 'url(icon-error.svg) no-repeat 95%';
      }else {
        (errorDiv1.innerHTML = "");
       inputbox1.style.background = '';
      }
    
      if (inputbox2.value.length == 0) {
        (errorDiv2.innerHTML = "Last name cannot be empty");
        inputbox2.style.background = 'url(icon-error.svg) no-repeat 95%';
      }else {
        (errorDiv2.innerHTML = "");
       inputbox2.style.background = '';
      }
    
      if (inputbox3.value.length == 0) {
        (errorDiv3.innerHTML = "Email cannot be empty");
        inputbox3.style.background = 'url(icon-error.svg) no-repeat 95%';

      }  else {
        (errorDiv3.innerHTML = "");
       inputbox3.style.background = '';
      }
    
      if (inputbox4.value.length == 0 || inputbox4.value.length < 8) {
        (errorDiv4.innerHTML = "Password cannot be empty");
        inputbox4.style.background = 'url(icon-error.svg) no-repeat 95%';
      }
       else {
       (errorDiv4.innerHTML = "");
       inputbox4.style.background = '';
      }
}

btn.addEventListener("click", (e) => {
  e.preventDefault();
    checkInput()

});
