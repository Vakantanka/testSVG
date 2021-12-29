const renderPage = (arr) => {
    let returnHTML = "";

    for (const item of arr) {
        returnHTML += ``;
    }

    return returnHTML;
}

async function loadEvent() {
    document.getElementById("root").insertAdjacentHTML("beforeend",`<div id="svgContainer"></div>`);
    fetch('./small_restaurant_optimized.svg')
    .then(function (response) {
        return response.text();
    })
    .then(function (data) {
        document.getElementById("svgContainer").insertAdjacentHTML("beforeend",data);
        const tableList = document.querySelectorAll(`[id^='table']`);
        for (let table of tableList) {
            table.classList.add("table");
            table.addEventListener("click",function(evt) {
                console.log(table.id);
                table.classList.add("red");
            }, false);
//            console.log(table);
        }    
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });


    console.log("Load completed.");
}

window.addEventListener("load", loadEvent);