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
    document.getElementById("root").insertAdjacentHTML("beforeend",`<h1>Load completed</h1>`);
    console.log("Load completed.");
}

window.addEventListener("load", loadEvent);