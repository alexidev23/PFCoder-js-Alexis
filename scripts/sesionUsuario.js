// Iniciar sesion con usuario creado
const LogIn = document.getElementById('loginForm');

if (LogIn) {
  LogIn.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtenemos los datos ingresados
    const usuario = document.getElementById('usuario').value;
    const password = document.getElementById('password').value;

    // Crea un objeto con los datos del usuario
    const user = {
      usuario: usuario,
      password: password
    };

    // Guarda el objeto user en localStorage
    localStorage.setItem('user', JSON.stringify(user));

    // Redirige al usuario a otra página después del login exitoso
    window.location.href = './index.html'; 
  });
}

// Iniciar sesion con nuevo usuario

const SignUp = document.getElementById('singUpForm');

if (SignUp) {
  SignUp.addEventListener('submit', (event) => {
    event.preventDefault();

    // Obtenemos los datos ingresados
    const usuario = document.getElementById('usuario').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const repitPassword = document.getElementById('repitPassword').value;

    // Crea un objeto con los datos del usuario
    const newUser = {
      usuario: usuario,
      email: email,
      password: password,
      repitPassword: repitPassword
    };

    // Guarda el objeto user en localStorage
    localStorage.setItem('newUser', JSON.stringify(newUser));

    // Redirige al usuario a otra página después del registro exitoso
    window.location.href = './index.html';
  })
}