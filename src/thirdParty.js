async function showExternalConnections(tabs){
    
    let tab = tabs.pop();
  
    var conn = document.getElementById('3rd');
    var connNum = document.getElementById('number-3rd');
  
    const itens = await browser.tabs.sendMessage(
      tab.id,
      {method: "external"}
    )
  
    // URL para comparacao
    let currURL = tab.url.split('.')[0];
    
    //Lista das conexoes externas
    let numExtConn = 0;
    if (itens.data.length > 0) {
      for (let item of itens.data) {
        if (item != "") {
          let dom = item.split('.')[0];
          if(dom != currURL){
            let li = document.createElement("li");
            let content = document.createTextNode(item);
            li.appendChild(content);
            conn.appendChild(li);
            numExtConn++;
          }
        }
      }
    }
    let extConnNum = document.createTextNode(numExtConn);
    let extConnNumP = document.createElement("p");
  
    extConnNumP.appendChild(extConnNum);
    connNum.appendChild(extConnNumP);
  
  }

getActiveTab().then(showExternalConnections)
