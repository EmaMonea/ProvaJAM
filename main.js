if (document.readyState === "complete") {
    init();
}
else{
    document.addEventListener("DOMContentLoaded", init)
}

function init(){
    const contenuto = document.getElementById("contenuto");
    fetch("https://prova.directus.app/items/Classifiche?sort=sort,date_created")
    .then(response => response.json())
    .then(data => data.data.forEach(element => {
        const itemToAppend = document.createElement("a");
        itemToAppend.target ="_blank";
        itemToAppend.href = `https://prova.directus.app/assets/${element.File}.pdf?download`
        itemToAppend.text = element.FileName
        contenuto.appendChild(itemToAppend);         
    }));
        console.log(data.data)
        //contenuto.innerHTML =  `<a href="https://prova.directus.app/assets/${data.data[0].File}.pdf?download" target="_blank" download="Your File.pdf">Download</a>`
}   

     
