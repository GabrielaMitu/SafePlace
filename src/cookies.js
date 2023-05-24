async function showCookiesForTab(tabs) {

  let tab = tabs.pop();

  //Pega os cookies
  var gettingAllCookies = browser.cookies.getAll({url: tab.url});
  gettingAllCookies.then((cookies) => {

    var numCookies = document.getElementById('numCookies');
    var cookieList = document.getElementById('cookie-list');
    var cookieListSize = document.getElementById('cookie-list-size');

    //Cookies da pagina
    let currURL = document.createTextNode(tab.url);
    let urlP = document.createElement("p");
    urlP.appendChild(currURL);

    //Quantidade de cookies
    let content = document.createTextNode(cookies.length);
    let p = document.createElement("p");
    p.appendChild(content);
    numCookies.appendChild(p);

    //Lista de cookies
    if (cookies.length > 0) {
      for (let cookie of cookies) {
        let li = document.createElement("li");
        let content = document.createTextNode(cookie.name + ": "+ cookie.value);
        li.appendChild(content);
        cookieList.appendChild(li);
      }

      //Tamanho total
      let cookieSizeP = document.createElement("p");
      cookieListSize.appendChild(cookieSizeP);
    }
  });
}

function getActiveTab() {
  return browser.tabs.query({currentWindow: true, active: true});
}

getActiveTab().then(showCookiesForTab) 
