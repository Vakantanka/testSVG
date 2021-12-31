const timeZoneList = [
    {
        name: "morning",
        timeStart: "06:00",
        timeEnd: "08:30"
    },
    {
        name: "forenoon",
        timeStart: "09:00",
        timeEnd: "10:30"
    },
    {
        name: "lunch",
        timeStart: "11:00",
        timeEnd: "13:30"
    },
    {
        name: "afternoon",
        timeStart: "14:00",
        timeEnd: "16:30"
    },
    {
        name: "dinner",
        timeStart: "17:00",
        timeEnd: "21:30"
    },
    {
        name: "night",
        timeStart: "22:00",
        timeEnd: "23:30"
    }
]

const reservationsTimeline = (tables) => {
    let tableList = "";
    for (const table of tables) {
        let tableId = table.id.substring(table.id.lastIndexOf("_")+1);
        tableList += `
            <tr>
                <td>
                    ${tableId}
                </td>
            </tr>
        `;
    }
    let returnHTML = `
        <table>
            ${tableList}
        </table>
    `;
    return returnHTML;
}

const renderPage = () => {
    
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    if (month < 10) month = "0" + month;
    if (day < 10) day = "0" + day;
    let today = year + "-" + month + "-" + day;       
        
    let timeZoneOptions = '';
    let selected = "";
    let i = true;
    for (const timeZone of timeZoneList) {
        let disabled = "";
        if (parseInt(timeZone.timeStart) >= hour) {
            if (i) {
                selected = `selected="selected"`;
                i = false;
            }
        } else {
            disabled = `disabled="disabled"`;
        }
        timeZoneOptions += `<option value="${timeZone.timeStart} - ${timeZone.timeEnd}" ${selected} ${disabled}>${timeZone.name}: ${timeZone.timeStart} - ${timeZone.timeEnd}</option>`;
        if (i === false) {
            selected = "";
        }
    }

    let returnHTML = `
    <h1>Senveday restaurant</h1>
    <h2>Coalb us & can year</h2>
    <h3 class="slogan"><q>It hits the ground or reaches the sky</q></h3>
    <div id="reservation">
        <form> 
            <h3>Reservation</h3>
            <label for="date">Date</label>
            <input type="date" name="date" value="${today}">
            <label for="timeZone">Time zone</label>
            <select name="timeZone">${timeZoneOptions}</select>
            <label for="time">Reservation length in hour</label>
            <input type="number" name="time" value="1" min="1" max="6">
        </form>
        <div id="svgContainer">
            <h3>Pick a table</h3>
        </div>
        <div id="reservations">
            <h3>Reservations - timeline</h3>
        </div>
    </div>
    `;
    return returnHTML;
}

async function loadEvent() {
    document.getElementById("root").insertAdjacentHTML("beforeend",renderPage());
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
            }, false);
        }
        document.getElementById("reservations").insertAdjacentHTML("beforeend",reservationsTimeline(tableList));
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });


    console.log("Load completed.");
}

window.addEventListener("load", loadEvent);