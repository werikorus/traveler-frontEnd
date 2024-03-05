export const handleLogin = () =>{
  const emailField = document.getElementById('email-field');
  const passwordField = document.getElementById('password-field');

  const checkBoxRememberAccess = document.getElementById('remember-me-checkbox');

  if(checkBoxRememberAccess.value === 'checked'){
    const accessFields = {
      email: emailField,
      password: passwordField,
    }

    localStorage.setItem('accessLogin', accessFields);
  };
};