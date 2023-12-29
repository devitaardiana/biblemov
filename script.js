const ayatList = [
    "MARKUS 9:23",
    "LUKAS 1:37",
    "FILIPI 4:6",
    "ROMA 12:11",
    "FILIPI 4:8-9",
    "AMSAL 4:17-18",
    "AMSAL 17:22",
    "PENGKHOTBAH 3:11",
    "MAZMUR 34:11",
    "MAZMUR 5:13",
    "1 KORINTUS 16:13",
    "MAZMUR 34:14-15",
    "YEREMIA 17:7-8",
    "AMSAL 23:17-18",
    "MAZMUR 37:3-4",
    "MARKUS 11:24",
    "MAZMUR 16:11",
    "MAZMUR 7:11",
    "MAZMUR 37:7",
    "MAZMUR 25:12",
    "ROMA 12:1-2",
    "MATIUS 19:26",
    "MAZMUR 27:1",
    "MAZMUR 27:1",
    "MAZMUR 37:23",
    "MAZMUR 34:9",
    "MAZMUR 37:39",
    "ROMA 12:21",
    "MAZMUR 46:2-4",
    "MAZMUR 105:4-5",
    "AMSAL 16:20",
    "MAZMUR 50:15",
    "MAZMUR 111:5",
    "AMSAL 28:13",
    "2 SAMUEL 22:21",
    "MAZMUR 62:2-3",
    "AMSAL 16:3",
    "MATIUS 12:36-37",
    "1 KORINTUS 2:9",
    "1 KORINTUS 15:58",
    "MAZMUR 54:6",
    "MAZMUR 118:29",
    "YESAYA 41:10",
    "MATIUS 11:6",
    "MAZMUR 55:23",
    "MATIUS 11:28",
    "YESAYA 40:31",
    "LUKAS 11:28",
    "EFESUS 4:26-27",
    "MATIUS 26:41",
    "MAZMUR 54:6",
    "YESAYA 49:15",
    "MAZMUR 84:11-12",
    "EFESUS 4:29",
    "MATIUS 6:33-34",
    "MATIUS 18:19-20",
    "MAZMUR 145:18",
    "MATIUS 18:21-22",
    "MAZMUR 112:1-2",
    "YEREMIA 32:27",
    "MAZMUR 65:12",
    "MAZMUR 73:1",
    "MATIUS 7:26",
    "MAZMUR 50:23",
    "2 SAMUEL 22:26",
    "EFESUS 5:4",
    "ROMA 2:4",
    "MAZMUR 73:1",
    "EFESUS 5:8",
    "MATIUS 4:4",
    "MATIUS 9:28-29",
    "BILANGAN 26:18-19",
    "KELUARAN 23:25",
    "MAZMUR 86:5",
    "MAZMUR 107:24,30",
    "MAZMUR 18:3",
    "MAZMUR 37:5",
    "MAZMUR 37:7",
    "IBRANI 12:1-2",
    "MATIUS 5:37","MATIUS 10:32-33","ULANGAN 14:2","MAZMUR 92:13-15","FILIPI 4:4-7","KOLOSE 4:6","EFESUS 5:16",
    "IBRANI 10:38-39","IBRANI 13:5","MATIUS 7:7-11","ULANGAN 11:26-28","MAZMUR 100:2","MAZMUR 102:6-8","FILIPI 4:13",
    "EFESUS 3:20","EFESUS 5:15","MAZMUR 34:18","YESAYA 55:6","IBRANI 11:6","MATIUS 6:8","ULANGAN 8:17-18","MAZMUR 84:5-6",
    "MAZMUR 115:11-13","IBRANI 11:1","KELUARAN 19:5","MAZMUR 84:12-13","KOLOSE 3:23-25",


];

function generateAyat() {
    const ayatElement = document.getElementById("ayat");
    const randomAyat = ayatList[Math.floor(Math.random() * ayatList.length)];
    ayatElement.classList.remove('animate__fadeInUp');
    void ayatElement.offsetWidth;

    ayatElement.innerHTML = randomAyat;
    ayatElement.classList.add('animate__animated', 'animate__fadeInUp');
    
}

const button = document.querySelector(".gift");
button.addEventListener("click", (e) => {
    e.preventDefault;
    button.classList.add("animate", 'animate__animated', 'animate__headShake');
    setTimeout(() => {
        button.classList.remove("animate", 'animate__animated', 'animate__headShake');
    }, 500);
});
