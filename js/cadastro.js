Parse.initialize('UyJ6UipI1LN2cfcLV7OiY31WMdPrTzEGjS02NZod', 'FdkQh6QicRJOetg3KJHxoOgfVSmdKwsgpBSYVJsI');
Parse.serverURL = 'https://parseapi.back4app.com/';

document.getElementById("botaoCadastrar").onclick = function(){cadastrar()};

async function cadastrar(){

    const usuario = new Parse.Object("Usuarios");
    let select = document.getElementById("generos");
    let opcaoGenero = select.options[select.selectedIndex].value;
    let usuarioInput = document.getElementById("usuario").value;
    let senhaInput = document.getElementById("senha").value;
    let emailInput = document.getElementById("email").value;


    usuario.set("Username", usuarioInput);
    usuario.set("Password", senhaInput);
    usuario.set("Email", emailInput);
    usuario.set("Genero", opcaoGenero);

    try{
        let result = await usuario.save();
        alert("Cadastro feito com sucesso!");
        window.location.href = "index.html";
    }catch(error){
        alert("Todos os campos devem ser preenchidos!");
    }

}