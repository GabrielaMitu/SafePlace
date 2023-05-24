async function showLocalStorage(tabs){
    
    let tab = tabs.pop();
  
      var localstorage = document.getElementById('localstorage');
      var localstorageSize = document.getElementById('localstorage-size');
  
      const storage = await browser.tabs.sendMessage(
      tab.id,
      {method: "localstorage"}
    )
  
    //lista de local storage
    let total = 0;
    let storageSizeP = document.createElement("p");
    if (storage.data.length > 0) {
      for (let item of storage.data) {
        if (item != undefined) {
          let li = document.createElement("li");
          let content = document.createTextNode(item);
          li.appendChild(content);
          localstorage.appendChild(li);
          total += 1;
        }
      }
    }
    let storageSize = document.createTextNode(total);
    storageSizeP.appendChild(storageSize);
    localstorageSize.appendChild(storageSizeP);
  
  }

  getActiveTab().then(showLocalStorage) 