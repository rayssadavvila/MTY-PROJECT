Parse.initialize('TKuViPBCfqRDL7EVG8iIXGDCWZ6QwNyBCfU7PpCY', 'qHnj57oD0gzDbKkvLEM3TjgZ1Y3eic5sso2ZEupH');
Parse.serverURL = 'https://parseapi.back4app.com/';

document.getElementById("botaoCadastrar").onclick = function(){cadastrar()};

async function cadastrar(){

    const usuario = new Parse.Object("Usuarios");
    let select = document.getElementById("generos");
    var opcaoGenero = select.options[select.selectedIndex].value;

    usuario.set("Username", document.getElementById("usuario").value);
    usuario.set("Password", document.getElementById("senha").value);
    usuario.set("Email", document.getElementById("email").value);
    usuario.set("Genero", opcaoGenero);

    try{
        let result = await usuario.save();
        alert("New object created with objectId: " + result.id);
    }catch(error){
        alert("Failed to create new object, with error code: " + error.message);
    }

}