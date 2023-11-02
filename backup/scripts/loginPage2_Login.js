

var url = window.location.href
if(url == 'http://127.0.0.1:5500//homePage.html#' || url == 'http://127.0.0.1:5500//homePage.html'){
    alert('Home page')
    var nome = window.document.getElementById('profile_name');
}
//alert(nome.innerText)
function clicar(){
    var email = window.document.getElementById('email').value;
    var senha = window.document.getElementById('senha').value;
    var url = window.location.href

    if(email != ''){
        //alert(email)
       // nome.innerText = email.value
        if(url == 'http://127.0.0.1:5500/loginPage_2.html#' || url == 'http://127.0.0.1:5500/loginPage_2.html'){
            window.location.href = '/homePage.html'
        }
        else{
            window.location.href = '/IF-Academics/homePage.html'
        }
    }

    if(email.toLowerCase() == 'admin' && senha.toLowerCase() == 'admin'){
        window.alert('Olá desenvolvedor!');
        
        if(url == 'http://127.0.0.1:5500/loginPage_2.html#' || url == 'http://127.0.0.1:5500/loginPage_2.html'){
            window.location.href = '/homePage.html'
        }
        else{
            window.location.href = '/IF-Academics/homePage.html'
        }
    }
}