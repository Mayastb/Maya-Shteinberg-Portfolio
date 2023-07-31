const days = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"];
const months = ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"];

function showDate() {
    const d = new Date();

    const date = `${d.getDate()}/${d.getMonth() +1}/${d.getFullYear()}`;
    const time = `${d.getHours()}:${d.getMinutes() +1}:${d.getSeconds()}`;

    document.querySelector("#time").innerHTML = time;   
    document.querySelector("#date").innerHTML = date;   
}

    
