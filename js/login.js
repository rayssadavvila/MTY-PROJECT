const botaoLogin = document.getElementById("botaoLogin");

botaoLogin.onclick = async () => {
    let usuario = document.getElementById("")
    try {
      const response = await fetch(
        "https://parseapi.back4app.com/",
        {
          method: "POST",
          headers: {
            "X-Parse-Application-Id": "vJOrDlRHl4tbH6efi7hvQanbUsKpCLYqzEIYnTvm",
            "X-Parse-REST-API-Key": "1WA6pUj2fnbqbtGws5A10g5AK6a5L9eVGBiBkjpm",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username: usuario }),
        }
      );
    } catch (error) {
      console.log("error = ", error);
    }
  };


