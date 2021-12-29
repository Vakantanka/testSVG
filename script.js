const renderPage = (arr) => {
    let returnHTML = "";

    for (const item of arr) {
        returnHTML += ``;
    }

    return returnHTML;
}

async function loadEvent() {
    // const res = await fetch(""); // resource URL
    // const arr = await res.json();

    // document.getElementById("root").insertAdjacentHTML("beforeend",renderPage(arr));
    document.getElementById("root").insertAdjacentHTML("beforeend",`<div id="svgContainer"></div>`);

    xhr = new XMLHttpRequest();
    xhr.open("GET","small_restaurant_optimized.svg",false);
    xhr.overrideMimeType("image/svg+xml");
    xhr.onload = function(e) {
        document.getElementById("svgContainer").appendChild(xhr.responseXML.documentElement);
    };
    xhr.send("");

    const tableList = document.querySelectorAll(`[id^='table']`);
    for (let table of tableList) {
        table.classList.add("table");
        table.addEventListener("click",function(evt) {
            console.log(table.id);
            table.classList.add("red");
        },
        false);
        console.log(table);
    }    

    console.log("Load completed.");
}

window.addEventListener("load", loadEvent);