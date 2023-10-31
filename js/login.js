Parse.initialize('UyJ6UipI1LN2cfcLV7OiY31WMdPrTzEGjS02NZod', 'FdkQh6QicRJOetg3KJHxoOgfVSmdKwsgpBSYVJsI');
Parse.serverURL = 'https://parseapi.back4app.com/';

document.getElementById("botaoLogin").onclick = function(){login()};

async function login(){
    const usernameEntrada = document.getElementById("usuario").value;
    const senhaEntrada  = document.getElementById("senha").value;

    const Usuario = Parse.Object.extend("Usuarios");
    const query = new Parse.Query(Usuario);

    query.equalTo("Username", usernameEntrada);
    query.equalTo("Password", senhaEntrada);

    try{
        const usuario = await query.first();

        if(usuario){

            const results = await query.find();

            for(const object of results){
                const genero = object.get('Genero');
                localStorage.setItem('generoLogin', genero);
            }

            window.location.href = "tela_home.html";

        }
        else{
            alert("Login ou Senha inválido!");
        }
    }catch (error){
        console.error("Error: " + error.code + " " + error.message);
    }

}




