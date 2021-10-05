const form_login = document.getElementById("form-login")

console.log(form_login)

form_login.addEventListener ('submit', (evento) => {
    evento.preventDefault()
    
    //1 obterner los datos
    
   // const email = getDatalogin(evento).email
   //  const password = getDatalogin(evento).password

const {email, password} = getDatalogin(evento)

    //2 validar los datos



    if (!email.trim()) {
        alert("ingrese su email")
        return
    }

    if (!password.trim()) {
        alert("ingrese su password")
        return
    }    
    
    if (password.length < 8) {
        alert("su contracena debe ser mayor que 7 caracteres")
        return

    }

    //3 procesar el login

    console.log('email:', email)
    console.log('password:', password)

    console.log("procesar login")


    function getDatalogin(evento) {
        const email = evento.target.email.value.trim()
        const password = evento.target.password.value.trim()
    return { email, password}
    }

})