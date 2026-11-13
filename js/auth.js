document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos el contenedor del icono de salida en la cabecera
    const authContainer = document.getElementById("auth-container");
    if (!authContainer) return;

    // 2. Comprobamos si el usuario ya inició sesión
    const isLoggedIn = localStorage.getItem("hikariUserLoggedIn") === "true";
    const userAvatar = localStorage.getItem("hikariUserAvatar") || "img/Logo.png"; 
    const userName = localStorage.getItem("hikariUserName") || "Mi Cuenta";

    // 3. Si ya inició sesión, mostramos su foto de perfil circular
    if (isLoggedIn) {
        authContainer.innerHTML = `
            <a href="perfil.html" title="${userName}">
              <span class='tIc bIc' style='overflow: hidden; border-radius: 50%; display: flex; align-items: center; justify-content: center;'>
                <img src="${userAvatar}" alt="Perfil" style="width: 28px; height: 28px; object-fit: cover; border-radius: 50%;">
              </span>
            </a>
        `;
    } else {
        // 4. Si NO ha iniciado sesión, mantenemos el botón pero cambiado para ir al login
        authContainer.innerHTML = `
            <a href="login.html" id="auth-btn" title="Iniciar sesión">
              <span aria-label='Iniciar sesión' class='tSrch tIc bIc'>
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"/>
                </svg>
              </span>
            </a>
        `;
    }
});