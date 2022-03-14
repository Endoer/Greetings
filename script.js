const select = document.getElementById("select")
const output = document.getElementById("output");
select.addEventListener("change", changeLabel)

function getTime() {
    let currentDate = new Date()
    let hour = currentDate.getHours();
    if (hour < 7) return "morning";
    if (hour < 13) return "day";
    if (hour < 19) return "evening";
    return "night";
}

let Localization = {
    Russia: {
        morning: "Доброе утро",
        day: "Добрый день",
        evening: "Добрый вечер",
        night: "Доброй ночи"
    },
    English: {
        morning: "Good morning",
        day: "Good day",
        evening: "Good evening",
        night: "Good night"
    },
    Spanish: {
        morning: "Buenos días",
        day: "Buena tarde",
        evening: "Buenas noches",
        night: "Buenas noches"
    },
    German: {
        morning: "Guten Morgen",
        day: "Schönen Tag",
        evening: "Guten Abend",
        night: "Gute Nacht"
    }
}

function changeLabel() {
    console.log(this.options[this.selectedIndex].text)
    output.value = Localization[this.options[this.selectedIndex].text][getTime()]
}

output.value = Localization.Russia[getTime()]