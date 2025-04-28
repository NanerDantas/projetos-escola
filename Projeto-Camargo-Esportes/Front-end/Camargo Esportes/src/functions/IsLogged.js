

let user = null;
let isLogged = false;

  const checkSession = async () => {
    const response = await fetch('https://ce-camargo-esportes-back-end.vercel.app/api/check-session.php', {
      credentials: 'include',
    });
    const data = await response.json();
    if (data.loggedIn) {
      isLogged = true
      user = data.user
    } else {
      isLogged = false
    }

    console.log( user, isLogged);
  };

  function checkLogged(){
    checkSession()
  }

  export default checkLogged();
