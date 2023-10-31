Parse.initialize('TKuViPBCfqRDL7EVG8iIXGDCWZ6QwNyBCfU7PpCY', 'qHnj57oD0gzDbKkvLEM3TjgZ1Y3eic5sso2ZEupH');
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
            window.location.href = "tela_home.html";
        }
        else{
            alert("Login ou Senha inválido!");
        }
    }catch (error){
        console.error("Error: " + error.code + " " + error.message);
    }

}




