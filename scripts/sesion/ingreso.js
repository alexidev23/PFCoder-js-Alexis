// Iniciar sesion con usuario creado
const LogIn = document.getElementById('loginForm')

const usuariosGuardados = [
  { 
    usuario: 'CoderJS', 
    password: 'Coder123' 
  },
  { 
    usuario: 'UserOne', 
    password: 'Pass123' 
  },
  { 
    usuario: 'Admin', 
    password: 'Admin123' 
  }
]

if (LogIn) {
  LogIn.addEventListener('submit', (event) => {
    event.preventDefault()

    // Obtenemos los datos ingresados
    const usuario = document.getElementById('usuario').value
    const password = document.getElementById('password').value

    const error = document.querySelector('.error')

    const usuariosLocalStorage = JSON.parse(localStorage.getItem('nuevoUsuario')) || usuariosGuardados

    // Verificamos si el usuario existe
    const usuarioExistente = usuariosLocalStorage.find(user => user.usuario === usuario)

    if (!usuarioExistente) {
      // Si el usuario no existe, mostramos el mensaje de error correspondiente
      error.innerHTML = `
        <span>El usuario no existe</span>
      `
    } else if (usuarioExistente.password !== password) {
      // Si el usuario existe pero la contraseña es incorrecta
      error.innerHTML = `
        <span>Contraseña incorrecta</span>
      `
    } else {
      
      const sesionIniciada = {
        usuario: usuario
      }
  
      // Guarda el objeto user en localStorage
      localStorage.setItem('sesionIniciada', JSON.stringify(sesionIniciada))

      // Redirige al usuario a otra página después del login exitoso
      window.location.href = './index.html'
    }
  })
}

// Iniciar sesion con nuevo usuario

const SignUp = document.getElementById('singUpForm')

if (SignUp) {
  SignUp.addEventListener('submit', (event) => {
    event.preventDefault()

    // Obtenemos los datos ingresados
    const usuario = document.getElementById('usuario').value
    const email = document.getElementById('email').value
    const password = document.getElementById('password').value
    const repitPassword = document.getElementById('repitPassword').value

    const errorUsuario = document.querySelector('.errorUsuario')
    const errorPassword = document.querySelector('.errorPassword')

    errorUsuario.innerHTML = ''
    errorPassword.innerHTML = ''

    const usuariosLocalStorage = JSON.parse(localStorage.getItem('nuevoUsuario')) || []
    // Validamos si el usuario ya existe
    const usuarioExistente = usuariosLocalStorage.find(user => user.usuario === usuario)

    if (usuarioExistente) {
      // Si el usuario ya existe, mostramos un mensaje de error
      errorUsuario.innerHTML = `
        <span>El usuario ya existe</span>
      `
      return // Salimos de la función
    } else if (password !== repitPassword) {
      // Si las contraseñas no coinciden, mostramos un mensaje de error
      errorPassword.innerHTML = `
        <span>Las contraseñas no coinciden</span>
      `
      return // Salimos de la función
    }

    // Crea un objeto con los datos del usuario
    const newUser = {
      usuario: usuario,
      email: email,
      password: password
    }

    // Agregamos el nuevo usuario al array de usuarios guardados
    usuariosLocalStorage.push(newUser)

    // Guardamos el array actualizado en localStorage
    localStorage.setItem('nuevoUsuario', JSON.stringify(usuariosLocalStorage))
    
    const sesionIniciada = {
      usuario: usuario
    }

    // Guarda el objeto user en localStorage
    localStorage.setItem('sesionIniciada', JSON.stringify(sesionIniciada))

    // Redirige al usuario a otra página después del registro exitoso
    window.location.href = './index.html'
  });
}
