async function showSessionStorage(tabs){
    
    let tab = tabs.pop();
  
      var sessionstorage = document.getElementById('sessionstorage');
      var sessionStorageSize = document.getElementById('sessionstorage-size');
  
  
      const itens = await browser.tabs.sendMessage(
      tab.id,
      {method: "sessionstorage"}
    )
    
    //lista de session storage
    let total = 0;
    let storageSizeP = document.createElement("p");
    if (itens.data.length > 0) {
      for (let item of itens.data) {
        if (item != undefined) {
          let li = document.createElement("li");
          let content = document.createTextNode(item);
          li.appendChild(content);
          sessionstorage.appendChild(li);
          total += 1;
        }
      }
    }
    let storageSize = document.createTextNode(total);
    storageSizeP.appendChild(storageSize);
    sessionStorageSize.appendChild(storageSizeP);
  
  }

getActiveTab().then(showSessionStorage) 