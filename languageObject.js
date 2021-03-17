﻿const flag = "gi";

const sharedRegex = {
    czech: new RegExp("jsem|jsi", flag),
    hungarian: new RegExp(" nem ", flag),
    slovak: new RegExp(" ako |poriadku|myslím", flag),
    slovenian: new RegExp("kaj", flag),
    albanian: new RegExp("nuk", flag),
    english: new RegExp(" the ", flag),
    french: new RegExp("c'est", flag),
    portuguese: new RegExp(" não ", flag),
    spanish: new RegExp("bien|siempre|ahora", flag),
    german: new RegExp(" das ", flag),
    italian: new RegExp(" che ", flag),
    danish: new RegExp("hvad|noget", flag),
    norwegian: new RegExp("deg", flag),
    swedish: new RegExp(" jag ", flag),
    dutch: new RegExp(" het ", flag),
    finnish: new RegExp("hän", flag),
    "serbo-croatian": new RegExp(" sam | kako ", flag),
    estonian: new RegExp("see", flag),
    icelandic: new RegExp("Það", flag),
    indonesian: new RegExp("tidak", flag),
    turkish: new RegExp(" bir ", flag),
};

module.exports = [
    {
        name: "polish",
        count: 0,
        utfRegex: new RegExp("się", flag),
        isoRegex: new RegExp("siê", flag),
        isoEncoding: "CP1250"
    },
    {
        name: "czech",
        count: 0,
        utfRegex: sharedRegex.czech,
        isoRegex: sharedRegex.czech,
        isoEncoding: "CP1250"
    },
    {
        name: "hungarian",
        count: 0,
        utfRegex: sharedRegex.hungarian,
        isoRegex: sharedRegex.hungarian,
        isoEncoding: "CP1250"
    },
    {
        name: "romanian",
        count: 0,
        utfRegex: new RegExp("sunt|eşti", flag),
        isoRegex: new RegExp("sunt|eºti", flag),
        isoEncoding: "CP1250"
    },
    {
        name: "slovak",
        count: 0,
        utfRegex: sharedRegex.slovak,
        isoRegex: sharedRegex.slovak,
        isoEncoding: "CP1250"
    },
    {
        name: "slovenian",
        count: 0,
        utfRegex: sharedRegex.slovenian,
        isoRegex: sharedRegex.slovenian,
        isoEncoding: "CP1250"
    },
    {
        name: "albanian",
        count: 0,
        utfRegex: sharedRegex.albanian,
        isoRegex: sharedRegex.albanian,
        isoEncoding: "CP1250"
    },
    {
        name: "russian",
        count: 0,
        utfRegex: new RegExp("что", flag),
        isoRegex: new RegExp("÷òî", flag),
        isoEncoding: "CP1251"
    },
    {
        name: "ukrainian",
        count: 0,
        utfRegex: new RegExp("він|але", flag),
        isoRegex: new RegExp("â³í|àëå", flag),
        isoEncoding: "CP1251"
    },
    {
        name: "bulgarian",
        count: 0,
        utfRegex: new RegExp("това|какво", flag),
        isoRegex: new RegExp("òîâà|äîáðå|êaêâo", flag),
        isoEncoding: "CP1251"
    },
    {
        name: "english",
        count: 0,
        utfRegex: sharedRegex.english,
        isoRegex: sharedRegex.english,
        isoEncoding: "CP1252"
    },
    {
        name: "french",
        count: 0,
        utfRegex: sharedRegex.french,
        isoRegex: sharedRegex.french,
        isoEncoding: "CP1252"
    },
    {
        name: "portuguese",
        count: 0,
        utfRegex: sharedRegex.portuguese,
        isoRegex: sharedRegex.portuguese,
        isoEncoding: "CP1252"
    },
    {
        name: "spanish",
        count: 0,
        utfRegex: sharedRegex.spanish,
        isoRegex: sharedRegex.spanish,
        isoEncoding: "CP1252"
    },
    {
        name: "german",
        count: 0,
        utfRegex: sharedRegex.german,
        isoRegex: sharedRegex.german,
        isoEncoding: "CP1252"
    },
    {
        name: "italian",
        count: 0,
        utfRegex: sharedRegex.italian,
        isoRegex: sharedRegex.italian,
        isoEncoding: "CP1252"
    },
    {
        name: "danish",
        count: 0,
        utfRegex: sharedRegex.danish,
        isoRegex: sharedRegex.danish,
        isoEncoding: "CP1252"
    },
    {
        name: "norwegian",
        count: 0,
        utfRegex: sharedRegex.norwegian,
        isoRegex: sharedRegex.norwegian,
        isoEncoding: "CP1252"
    },
    {
        name: "swedish",
        count: 0,
        utfRegex: sharedRegex.swedish,
        isoRegex: sharedRegex.swedish,
        isoEncoding: "CP1252"
    },
    {
        name: "dutch",
        count: 0,
        utfRegex: sharedRegex.dutch,
        isoRegex: sharedRegex.dutch,
        isoEncoding: "CP1252"
    },
    {
        name: "finnish",
        count: 0,
        utfRegex: sharedRegex.finnish,
        isoRegex: sharedRegex.finnish,
        isoEncoding: "CP1252"
    },
    {
        name: "serbo-croatian",
        count: 0,
        utfRegex: sharedRegex["serbo-croatian"],
        isoRegex: sharedRegex["serbo-croatian"],
        isoEncoding: "CP1252"
    },
    {
        name: "estonian",
        count: 0,
        utfRegex: sharedRegex.estonian,
        isoRegex: sharedRegex.estonian,
        isoEncoding: "CP1252"
    },
    {
        name: "icelandic",
        count: 0,
        utfRegex: sharedRegex.icelandic,
        isoRegex: sharedRegex.icelandic,
        isoEncoding: "CP1252"
    },
    {
        name: "indonesian",
        count: 0,
        utfRegex: sharedRegex.indonesian,
        isoRegex: sharedRegex.indonesian,
        isoEncoding: "CP1252"
    },
    {
        name: "greek",
        count: 0,
        utfRegex: new RegExp("είναι", flag),
        isoRegex: new RegExp("åßíáé", flag),
        isoEncoding: "CP1253"
    },
    {
        name: "turkish",
        count: 0,
        utfRegex: sharedRegex.turkish,
        isoRegex: sharedRegex.turkish,
        isoEncoding: "CP1254"
    },
    {
        name: "hebrew",
        count: 0,
        utfRegex: new RegExp("אתה", flag),
        isoRegex: new RegExp("àúä", flag),
        isoEncoding: "CP1255"
    },
    {
        name: "arabic",
        count: 0,
        utfRegex: new RegExp("هذا", flag),
        isoRegex: new RegExp("åðç", flag),
        isoEncoding: "CP1256"
    },
    {
        name: "chinese-simplified",
        count: 0,
        utfRegex: new RegExp("个|人", flag),
        isoRegex: new RegExp("´ó|¶¯|Å®", flag),
        isoEncoding: "GB18030"
    },
    {
        name: "chinese-traditional",
        count: 0,
        utfRegex: new RegExp("在", flag),
        isoRegex: new RegExp("¦b", flag),
        isoEncoding: "BIG5"
    },
    {
        name: "japanese",
        count: 0,
        utfRegex: new RegExp("ど", flag),
        isoRegex: new RegExp("‚»", flag),
        isoEncoding: "Shift-JIS"
    },
    {
        name: "korean",
        count: 0,
        utfRegex: new RegExp("도", flag),
        isoRegex: new RegExp("àö¾î|å¾ß|¡¼­", flag),
        isoEncoding: "EUC-KR"
    },
    {
        name: "thai",
        count: 0,
        utfRegex: new RegExp("แฮร์รี่|พอตเตอร์", flag),
        isoRegex: new RegExp("áîãìãõè|¾íµàµíãì­", flag),
        isoEncoding: "TIS-620"
    }
];