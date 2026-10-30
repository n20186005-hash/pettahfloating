import type { Locale } from '../i18n';

export interface WeatherLang {
  wmo: Record<string, { label: string; icon: string }>;
  weekdays: string[];
  today: string;
  ui: {
    unavailable: string;
    title: string;
    subtitle: string;
    current: string;
    feelsLike: string;
    humidity: string;
    wind: string;
    precipChance: string;
    uv: string;
    uvNow: string;
    loading: string;
    riskTitle: string;
    outfitTitle: string;
    activityTitle: string;
    itemsTitle: string;
    week: string;
    precipLabel: string;
    sourceNote: string;
  };
  phrases: Record<string, string>;
}

export const WEATHER_I18N: Record<Locale, WeatherLang> = {
  "en": {
    "wmo": {
      "0": {
        "label": "Clear sky",
        "icon": "☀️"
      },
      "1": {
        "label": "Mainly clear",
        "icon": "🌤️"
      },
      "2": {
        "label": "Partly cloudy",
        "icon": "⛅"
      },
      "3": {
        "label": "Overcast",
        "icon": "☁️"
      },
      "45": {
        "label": "Fog",
        "icon": "🌫️"
      },
      "48": {
        "label": "Rime fog",
        "icon": "🌫️"
      },
      "51": {
        "label": "Light drizzle",
        "icon": "🌦️"
      },
      "53": {
        "label": "Drizzle",
        "icon": "🌦️"
      },
      "55": {
        "label": "Dense drizzle",
        "icon": "🌦️"
      },
      "61": {
        "label": "Light rain",
        "icon": "🌧️"
      },
      "63": {
        "label": "Rain",
        "icon": "🌧️"
      },
      "65": {
        "label": "Heavy rain",
        "icon": "🌧️"
      },
      "66": {
        "label": "Freezing rain",
        "icon": "🌧️"
      },
      "67": {
        "label": "Freezing rain",
        "icon": "🌧️"
      },
      "71": {
        "label": "Light snow",
        "icon": "❄️"
      },
      "73": {
        "label": "Snow",
        "icon": "❄️"
      },
      "75": {
        "label": "Heavy snow",
        "icon": "❄️"
      },
      "80": {
        "label": "Rain showers",
        "icon": "🌦️"
      },
      "81": {
        "label": "Rain showers",
        "icon": "🌧️"
      },
      "82": {
        "label": "Violent showers",
        "icon": "🌧️"
      },
      "85": {
        "label": "Snow showers",
        "icon": "🌨️"
      },
      "86": {
        "label": "Snow showers",
        "icon": "🌨️"
      },
      "95": {
        "label": "Thunderstorm",
        "icon": "⛈️"
      },
      "96": {
        "label": "Thunderstorm",
        "icon": "⛈️"
      },
      "99": {
        "label": "Thunderstorm",
        "icon": "⛈️"
      }
    },
    "weekdays": [
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thu",
      "Fri",
      "Sat"
    ],
    "today": "Today",
    "ui": {
      "unavailable": "Fresh forecast unavailable. Check another weather source before travelling.",
      "title": "Model weather & 7-day forecast",
      "subtitle": "Open-Meteo model estimate for Colombo, not live on-site observations or access advice.",
      "current": "Model weather",
      "feelsLike": "Feels like",
      "humidity": "Humidity",
      "wind": "Wind",
      "precipChance": "Rain chance",
      "uv": "UV index",
      "uvNow": "UV now",
      "loading": "Loading latest weather data…",
      "riskTitle": "⚠️ Safety advisory",
      "outfitTitle": "👕 What to wear",
      "activityTitle": "🗺️ What to do",
      "itemsTitle": "🎒 What to bring",
      "week": "7-day forecast",
      "precipLabel": "Rain",
      "sourceNote": "Weather data is provided for the local time (Asia/Colombo). Conditions can change quickly — re-check before you set out."
    },
    "phrases": {
      "rainUmbrella": "Carry an umbrella — showers are likely.",
      "rainShelter": "Identify a suitable substantial shelter before leaving; do not assume closed stalls provide shelter.",
      "rainItem": "Umbrella / rain jacket",
      "lightRainClothing": "Light showers possible; pavements can be slippery — walk carefully.",
      "lightRainActivity": "Prepare for the forecast and check current warnings. Only use a route confirmed open and suitable on the day; clear or cloudy skies do not establish safe paths or visitor hours.",
      "lightRainItem": "Foldable umbrella",
      "heavyRisk": "After heavy rain, avoid pooled water areas and the waterfront edges.",
      "heavyActivity": "Avoid exposed waterfront edges and flooded or damaged paths; postpone the outdoor visit if necessary.",
      "heavyItem": "Raincoat (a long umbrella is unwise in wind)",
      "thunderRisk": "During lightning and storms, avoid the waterfront and sheltering under trees.",
      "thunderActivity": "Postpone exposed outdoor plans during thunderstorms and follow official warnings; this forecast does not establish activity operation.",
      "fogRisk": "Reduced visibility limits waterfront photos and long-distance views.",
      "fogActivity": "Prepare for the forecast and check current warnings. Only use a route confirmed open and suitable on the day; clear or cloudy skies do not establish safe paths or visitor hours.",
      "fogItem": "Limited open views",
      "hotClothing": "High heat — avoid midday, wear light, breathable clothing.",
      "hotActivity": "Carry drinking water, limit heat exposure and plan a suitable rest alternative.",
      "hotItem": "Sun hat, enough water, heat protection",
      "uvClothing": "High UV — sun protection needed.",
      "uvItem": "Sunscreen, sunglasses, sun hat",
      "tempRange": "Large day–night temperature swing — bring a layer you can add.",
      "coldClothing": "Cooler temperatures — keep warm.",
      "coldItem": "Warm jacket, scarf",
      "windRisk": "Avoid signs, waterfront barriers and similar spots in strong wind.",
      "windActivity": "Avoid exposed edges in strong wind and follow current instructions; this model does not establish activity operation.",
      "windClothing": "Account for the breeze.",
      "windItem": "Skip loose large clothing that the wind can blow away",
      "clearActivity": "Prepare for the forecast and check current warnings. Only use a route confirmed open and suitable on the day; clear or cloudy skies do not establish safe paths or visitor hours.",
      "clearItem": "Remember sun protection",
      "cloudActivity": "Prepare for the forecast and check current warnings. Only use a route confirmed open and suitable on the day; clear or cloudy skies do not establish safe paths or visitor hours."
    }
  },
  "si": {
    "wmo": {
      "0": {
        "label": "පැහැදිලි අහස",
        "icon": "☀️"
      },
      "1": {
        "label": "බොහෝමට පැහැදිලි",
        "icon": "🌤️"
      },
      "2": {
        "label": "අර්ධ වශයෙන් වලාකුළු",
        "icon": "⛅"
      },
      "3": {
        "label": "වලාකුළු අහස",
        "icon": "☁️"
      },
      "45": {
        "label": "මීදුම / කුණු",
        "icon": "🌫️"
      },
      "48": {
        "label": "මීදුම / කුණු",
        "icon": "🌫️"
      },
      "51": {
        "label": "මෘදු වැසි",
        "icon": "🌦️"
      },
      "53": {
        "label": "මෘදු වැසි",
        "icon": "🌦️"
      },
      "55": {
        "label": "මෘදු වැසි",
        "icon": "🌦️"
      },
      "61": {
        "label": "වැසි",
        "icon": "🌧️"
      },
      "63": {
        "label": "වැසි",
        "icon": "🌧️"
      },
      "65": {
        "label": "තීව්‍ර වැසි",
        "icon": "🌧️"
      },
      "66": {
        "label": "මිදෙන වැසි",
        "icon": "🌧️"
      },
      "67": {
        "label": "තද මිදෙන වැසි",
        "icon": "🌧️"
      },
      "71": {
        "label": "ස්නෝ",
        "icon": "❄️"
      },
      "73": {
        "label": "ස්නෝ",
        "icon": "❄️"
      },
      "75": {
        "label": "ස්නෝ",
        "icon": "❄️"
      },
      "80": {
        "label": "වැසි පැද්දීම්",
        "icon": "🌦️"
      },
      "81": {
        "label": "වැසි පැද්දීම්",
        "icon": "🌧️"
      },
      "82": {
        "label": "වැසි පැද්දීම්",
        "icon": "🌧️"
      },
      "85": {
        "label": "ස්නෝ පැද්දීම්",
        "icon": "🌨️"
      },
      "86": {
        "label": "ස්නෝ පැද්දීම්",
        "icon": "🌨️"
      },
      "95": {
        "label": "කුණාටු / කෙරිලි",
        "icon": "⛈️"
      },
      "96": {
        "label": "කුණාටු සහ අයිස්",
        "icon": "⛈️"
      },
      "99": {
        "label": "කුණාටු සහ අයිස්",
        "icon": "⛈️"
      }
    },
    "weekdays": [
      "ඉරිදා",
      "සඳුදා",
      "අඟහරුවාදා",
      "බදාදා",
      "බ්‍රහස්පතින්දා",
      "සිකුරාදා",
      "සෙනසුරාදා"
    ],
    "today": "අද",
    "ui": {
      "unavailable": "නැවුම් අනාවැකිය නොමැත. ගමන් කිරීමට පෙර වෙනත් කාලගුණ මූලාශ්‍රයක් පරීක්ෂා කරන්න.",
      "title": "ආකෘති කාලගුණය සහ සතියක පුරෝකථනය",
      "subtitle": "Open-Meteo කොළඹ ආකෘති ඇස්තමේන්තුවකි; සජීවී ස්ථානීය නිරීක්ෂණයක් හෝ ප්‍රවේශ උපදෙසක් නොවේ.",
      "current": "වත්මන් කාලගුණය",
      "feelsLike": "අත්හදාගත හැඟීම",
      "humidity": "ආර්ද්‍රතාව",
      "wind": "සුළං",
      "precipChance": "වැසි න්‍යාය",
      "uv": "අතිනීල කිරණ",
      "uvNow": "වර්තමාන අතිනීල",
      "loading": "පහත් කාලගුණ දත්ත ලබාගනිමින්…",
      "riskTitle": "⚠️ අවදානම් දැනුම්දීම",
      "outfitTitle": "👕 ගමනේ ඇඳුම්",
      "activityTitle": "🗺️ විනෝද කටයුතු",
      "itemsTitle": "🎒 සමඟ රැගෙන යන දෑ",
      "week": "සතියක පුරෝකථනය",
      "precipLabel": "වැසි",
      "sourceNote": "කාලගුණ දත්ත නැවුම් ප්‍රදේශීය වේලාව (Asia/Colombo) අනුව සැපයේ. කෙටි කාලයක් ඇතුළත කාලගුණය වෙනස් විය හැකි බැවින් පැමිණීමට පෙර නැවුම් තත්ත්වය නැවත පරීක්ෂා කරන්න."
    },
    "phrases": {
      "rainUmbrella": "සම්භාව්‍යයෙන් වැසි ඇදෙනු ඇත්තේ නිසා කත්තරයක් රැගෙන යන්න.",
      "rainShelter": "පිටත්වීමට පෙර සුදුසු ස්ථිර ආවරණයක් හඳුනාගන්න; වසා ඇති කඩවල ආවරණ ඇතැයි නොසිතන්න.",
      "rainItem": "කත්තරය / වැසි ඇඳුම",
      "lightRainClothing": "සමන් කුඩා වැසිය; පාරේ පෙදෙස් උළු විය හැකි බැවින් සැලකිලිමත්ව ඇවිදින්න.",
      "lightRainActivity": "අනාවැකියට සූදානම් වී වත්මන් අනතුරු ඇඟවීම් බලන්න. එදින විවෘත හා සුදුසු බව තහවුරු කළ මාර්ග පමණක් භාවිත කරන්න; පැහැදිලි හෝ වළාකුළු අහස මාර්ග ආරක්ෂාව හෝ අමුත්තන්ගේ වේලාව තහවුරු නොකරයි.",
      "lightRainItem": "හැකිළිය හැකි කත්තරය",
      "heavyRisk": "වැසි වැඩිබල් නිසා ජලය රැඳී ඇති පෙදෙස් හා ජලතීරයේ සීමාවන්වලින් වැළකී සිටින්න.",
      "heavyActivity": "නිරාවරණ ජලතීර දාර, ජලයෙන් යටවූ හෝ හානි වූ මාර්ගවලින් වැළකී සිටින්න; අවශ්‍ය නම් එළිමහන් සංචාරය කල් දමන්න.",
      "heavyItem": "වැසි ඇඳුම (සුළං හේතුවෙන් දිගු කත්තරය සුදුසු නොවේ)",
      "thunderRisk": "කෙරිලි හා කුණාටු අවස්ථාවේ ජලතීරයේ සෙල්ලම් කිරීම, ගස් යටින් සෙවණ සොයාගැනීම වළක්වන්න.",
      "thunderActivity": "අකුණු සහිත වැසිවලදී නිරාවරණ එළිමහන් සැලසුම් කල් දමා නිල අනතුරු ඇඟවීම් පිළිපදින්න; අනාවැකියෙන් ක්‍රියාකාරකම් තත්ත්වය තහවුරු නොවේ.",
      "fogRisk": "දෘශ්‍යතාව අඩු නිසා ජලතීර ඡායාරූප හා දුර දැක්ම සීමිත වේ.",
      "fogActivity": "අනාවැකියට සූදානම් වී වත්මන් අනතුරු ඇඟවීම් බලන්න. එදින විවෘත හා සුදුසු බව තහවුරු කළ මාර්ග පමණක් භාවිත කරන්න; පැහැදිලි හෝ වළාකුළු අහස මාර්ග ආරක්ෂාව හෝ අමුත්තන්ගේ වේලාව තහවුරු නොකරයි.",
      "fogItem": "සීමිත ගුවන් විදුලි පළාත",
      "hotClothing": "උෂ්ණත්වය වැඩි නිසා මධ්‍යාහ්නයේ යාම වළක්වා, සැහැල්ලු හා වායු ගමන් ඇඳුම් අදින්න.",
      "hotActivity": "පානීය ජලය රැගෙන තාපයට නිරාවරණය සීමා කර සුදුසු විවේක විකල්පයක් සැලසුම් කරන්න.",
      "hotItem": "හිරු ආරක්ෂක, ප්‍රමාණවත් ජලය, උණුසුම් වැළැක්වීමේ උපකරණ",
      "uvClothing": "අධික නිසා හිරු ආරක්ෂක අවශ්‍ය වේ.",
      "uvItem": "හිරු කිරීමේ ක්‍රීම්, දර්පණ කණ්ණාඩි, හිරු තොප්පි",
      "tempRange": "දවසේ හා රාත්‍රියේ උෂ්ණත්ව ඵලකය විශාල නිසා ඇඳුම් එකතු කිරීමට පහසු ජැකට් එකක් රැගෙන යන්න.",
      "coldClothing": "උෂ්ණත්වය අඩු නිසා සීතලට ආරක්ෂා වන්න.",
      "coldItem": "ඝන ජැකට්, ගෙල් රෙද්ද",
      "windRisk": "සුළං හේතුවෙන් දැන්වීම් පුවරු, ජලතීර ආරක්ෂක බාධක වැනි ස්ථානවලින් වැළකී සිටින්න.",
      "windActivity": "තද සුළඟේ නිරාවරණ දාරවලින් ඈත්වී වත්මන් උපදෙස් පිළිපදින්න; ආකෘතියෙන් ක්‍රියාකාරකම් තත්ත්වය තහවුරු නොවේ.",
      "windClothing": "සුළං තත්ත්වය සැලකිල්ලට ගන්න.",
      "windItem": "මූඩිය ඉවත් විය හැකි නිසා විශාල හැකිළි ඇඳුම් නොඅදින්න",
      "clearActivity": "අනාවැකියට සූදානම් වී වත්මන් අනතුරු ඇඟවීම් බලන්න. එදින විවෘත හා සුදුසු බව තහවුරු කළ මාර්ග පමණක් භාවිත කරන්න; පැහැදිලි හෝ වළාකුළු අහස මාර්ග ආරක්ෂාව හෝ අමුත්තන්ගේ වේලාව තහවුරු නොකරයි.",
      "clearItem": "හිරු ආරක්ෂක මතක් කරන්න",
      "cloudActivity": "අනාවැකියට සූදානම් වී වත්මන් අනතුරු ඇඟවීම් බලන්න. එදින විවෘත හා සුදුසු බව තහවුරු කළ මාර්ග පමණක් භාවිත කරන්න; පැහැදිලි හෝ වළාකුළු අහස මාර්ග ආරක්ෂාව හෝ අමුත්තන්ගේ වේලාව තහවුරු නොකරයි."
    }
  },
  "ta": {
    "wmo": {
      "0": {
        "label": "தெளிவான வானம்",
        "icon": "☀️"
      },
      "1": {
        "label": "பெரும்பாலும் தெளிவு",
        "icon": "🌤️"
      },
      "2": {
        "label": "சிறிது மேகமூட்டம்",
        "icon": "⛅"
      },
      "3": {
        "label": "மேகமூட்டம்",
        "icon": "☁️"
      },
      "45": {
        "label": "மூடுபனி",
        "icon": "🌫️"
      },
      "48": {
        "label": "நுண்பனி",
        "icon": "🌫️"
      },
      "51": {
        "label": "இலேசான மழைத்தூறல்",
        "icon": "🌦️"
      },
      "53": {
        "label": "மழைத்தூறல்",
        "icon": "🌦️"
      },
      "55": {
        "label": "அடர்த்தியான மழைத்தூறல்",
        "icon": "🌦️"
      },
      "61": {
        "label": "இலேசான மழை",
        "icon": "🌧️"
      },
      "63": {
        "label": "மழை",
        "icon": "🌧️"
      },
      "65": {
        "label": "பலத்த மழை",
        "icon": "🌧️"
      },
      "66": {
        "label": "உறைந்த மழை",
        "icon": "🌧️"
      },
      "67": {
        "label": "உறைந்த மழை",
        "icon": "🌧️"
      },
      "71": {
        "label": "இலேசான பனி",
        "icon": "❄️"
      },
      "73": {
        "label": "பனி",
        "icon": "❄️"
      },
      "75": {
        "label": "பலத்த பனி",
        "icon": "❄️"
      },
      "80": {
        "label": "மழைப் பொழிவுகள்",
        "icon": "🌦️"
      },
      "81": {
        "label": "மழைப் பொழிவுகள்",
        "icon": "🌧️"
      },
      "82": {
        "label": "கடும் மழைப் பொழிவுகள்",
        "icon": "🌧️"
      },
      "85": {
        "label": "பனிப் பொழிவுகள்",
        "icon": "🌨️"
      },
      "86": {
        "label": "பனிப் பொழிவுகள்",
        "icon": "🌨️"
      },
      "95": {
        "label": "இடிமின்னல் புயல்",
        "icon": "⛈️"
      },
      "96": {
        "label": "இடிமின்னல் புயல்",
        "icon": "⛈️"
      },
      "99": {
        "label": "இடிமின்னல் புயல்",
        "icon": "⛈️"
      }
    },
    "weekdays": [
      "ஞாயி",
      "திங்",
      "செவ்",
      "புதன்",
      "வியா",
      "வெள்",
      "சனி"
    ],
    "today": "இன்று",
    "ui": {
      "unavailable": "புதிய முன்னறிவிப்பு கிடைக்கவில்லை. பயணத்திற்கு முன் வேறொரு வானிலை ஆதாரத்தைப் பார்க்கவும்.",
      "title": "மாதிரி வானிலை மற்றும் 7 நாள் முன்னறிவிப்பு",
      "subtitle": "கொழும்புக்கான Open-Meteo மாதிரி மதிப்பீடு; நேரடி தள அவதானிப்போ அணுகல் ஆலோசனையோ அல்ல.",
      "current": "தற்போதைய வானிலை",
      "feelsLike": "உணரப்படும் வெப்பநிலை",
      "humidity": "ஈரப்பதம்",
      "wind": "காற்று",
      "precipChance": "மழை வாய்ப்பு",
      "uv": "புறஊதா அடுக்கு",
      "uvNow": "தற்போதைய புறஊதா",
      "loading": "சமீபத்திய வானிலைத் தரவை ஏற்றுகிறோம்…",
      "riskTitle": "⚠️ பாதுகாப்பு எச்சரிக்கை",
      "outfitTitle": "👕 அணிய வேண்டியது",
      "activityTitle": "🗺️ செய்ய வேண்டியது",
      "itemsTitle": "🎒 எடுத்து வர வேண்டியது",
      "week": "7 நாள் முன்னறிவிப்பு",
      "precipLabel": "மழை",
      "sourceNote": "வானிலைத் தரவு உள்ளூர் நேரத்திற்கு (Asia/Colombo) வழங்கப்படுகிறது. நிலைமைகள் விரைவில் மாறலாம் — புறப்படும் முன் மீண்டும் சரிபார்க்கவும்."
    },
    "phrases": {
      "rainUmbrella": "மழை பொழிய வாய்ப்புள்ளதால் குடை எடுத்து வாருங்கள்.",
      "rainShelter": "புறப்படுமுன் பொருத்தமான உறுதியான அடைக்கலத்தை அறியுங்கள்; மூடிய கடைகள் அடைக்கலம் தரும் எனக் கருதாதீர்கள்.",
      "rainItem": "குடை / மழைக்கோட்",
      "lightRainClothing": "இலேசான மழை பொழியலாம்; நடைபாதை வழுக்கும் என்பதால் கவனமாக நடந்து செல்லுங்கள்.",
      "lightRainActivity": "முன்னறிவிப்புக்குத் தயாராகி தற்போதைய எச்சரிக்கையைப் பார்க்கவும். அன்றைய தினம் திறந்ததும் பொருத்தமானதும் என உறுதியான பாதையை மட்டும் பயன்படுத்துங்கள்; தெளிவான அல்லது மேகமூட்ட வானம் பாதைப் பாதுகாப்பையோ வருகை நேரத்தையோ உறுதிப்படுத்தாது.",
      "lightRainItem": "மடக்கக்கூடிய குடை",
      "heavyRisk": "பலத்த மழைக்குப் பின் தேங்கிய நீர் பகுதிகளையும் நீரோர விளிம்புகளையும் தவிர்க்கவும்.",
      "heavyActivity": "வெளிப்புற நீரோர விளிம்பு, நீர் தேங்கிய அல்லது சேதமடைந்த பாதைகளைத் தவிர்த்து, தேவைப்பட்டால் வெளி வருகையை ஒத்திவையுங்கள்.",
      "heavyItem": "மழைக்கோட் (காற்றில் நீளக் குடை பரிந்துரைக்கப்படுவதில்லை)",
      "thunderRisk": "இடிமின்னல் மற்றும் புயலின் போது நீரோரத்தையும் மர நிழலையும் தவிர்க்கவும்.",
      "thunderActivity": "இடிமழையில் வெளிப்புறத் திட்டத்தை ஒத்திவைத்து அதிகாரப்பூர்வ எச்சரிக்கையைப் பின்பற்றுங்கள்; முன்னறிவிப்பு செயல்பாட்டுநிலையை உறுதிப்படுத்தாது.",
      "fogRisk": "பார்வைக் குறைவால் நீரோரப் புகைப்படங்களும் தொலைநோக்கும் வரையறுக்கப்படும்.",
      "fogActivity": "முன்னறிவிப்புக்குத் தயாராகி தற்போதைய எச்சரிக்கையைப் பார்க்கவும். அன்றைய தினம் திறந்ததும் பொருத்தமானதும் என உறுதியான பாதையை மட்டும் பயன்படுத்துங்கள்; தெளிவான அல்லது மேகமூட்ட வானம் பாதைப் பாதுகாப்பையோ வருகை நேரத்தையோ உறுதிப்படுத்தாது.",
      "fogItem": "வரையறுக்கப்பட்ட திறந்த காட்சிகள்",
      "hotClothing": "வெப்பம் அதிகம் — நண்பகலைத் தவிர்த்து, இலகை உடைகளை அணியுங்கள்.",
      "hotActivity": "குடிநீர் எடுத்துச் சென்று வெப்ப வெளிப்பாட்டைக் குறைத்து பொருத்தமான ஓய்வு மாற்றைத் திட்டமிடுங்கள்.",
      "hotItem": "குறும்படக் கவசம், போதுமான நீர், வெப்பப் பாதுகாப்பு",
      "uvClothing": "புறஊதா அதிகம் — சூரியப் பாதுகாப்புத் தேவை.",
      "uvItem": "சூரியக் கவசக் கிரீம், கண்ணாடி, குறும்படத் தொப்பி",
      "tempRange": "பகல்–இரவு வெப்ப வேறுபாடு அதிகம் — அணியக் கூடிய அங்கியை எடுத்து வாருங்கள்.",
      "coldClothing": "வெப்பநிலை குறைவு — பாதுகாப்பாக இருங்கள்.",
      "coldItem": "தடித்த சூடான அங்கி, துண்டு",
      "windRisk": "பலத்த காற்றில் அறிவிப்புப் பலகைகள், நீரோரத் தடுப்புகள் போன்றவற்றைத் தவிர்க்கவும்.",
      "windActivity": "பலத்த காற்றில் வெளிப்புற விளிம்பிலிருந்து விலகி தற்போதைய அறிவுறுத்தலைப் பின்பற்றுங்கள்; மாதிரி செயல்பாட்டுநிலையை உறுதிப்படுத்தாது.",
      "windClothing": "காற்றைக் கருத்தில் கொள்ளுங்கள்.",
      "windItem": "காற்றில் பறக்கக்கூடிய பெரிய தளர்வான உடைகளைத் தவிர்க்கவும்",
      "clearActivity": "முன்னறிவிப்புக்குத் தயாராகி தற்போதைய எச்சரிக்கையைப் பார்க்கவும். அன்றைய தினம் திறந்ததும் பொருத்தமானதும் என உறுதியான பாதையை மட்டும் பயன்படுத்துங்கள்; தெளிவான அல்லது மேகமூட்ட வானம் பாதைப் பாதுகாப்பையோ வருகை நேரத்தையோ உறுதிப்படுத்தாது.",
      "clearItem": "சூரியப் பாதுகாப்பை நினைவில் கொள்ளுங்கள்",
      "cloudActivity": "முன்னறிவிப்புக்குத் தயாராகி தற்போதைய எச்சரிக்கையைப் பார்க்கவும். அன்றைய தினம் திறந்ததும் பொருத்தமானதும் என உறுதியான பாதையை மட்டும் பயன்படுத்துங்கள்; தெளிவான அல்லது மேகமூட்ட வானம் பாதைப் பாதுகாப்பையோ வருகை நேரத்தையோ உறுதிப்படுத்தாது."
    }
  },
  "zh": {
    "wmo": {
      "0": {
        "label": "晴",
        "icon": "☀️"
      },
      "1": {
        "label": "大致晴朗",
        "icon": "🌤️"
      },
      "2": {
        "label": "局部多云",
        "icon": "⛅"
      },
      "3": {
        "label": "阴",
        "icon": "☁️"
      },
      "45": {
        "label": "雾",
        "icon": "🌫️"
      },
      "48": {
        "label": "霜雾",
        "icon": "🌫️"
      },
      "51": {
        "label": "小毛毛雨",
        "icon": "🌦️"
      },
      "53": {
        "label": "毛毛雨",
        "icon": "🌦️"
      },
      "55": {
        "label": "浓毛毛雨",
        "icon": "🌦️"
      },
      "61": {
        "label": "小雨",
        "icon": "🌧️"
      },
      "63": {
        "label": "中雨",
        "icon": "🌧️"
      },
      "65": {
        "label": "大雨",
        "icon": "🌧️"
      },
      "66": {
        "label": "冻雨",
        "icon": "🌧️"
      },
      "67": {
        "label": "冻雨",
        "icon": "🌧️"
      },
      "71": {
        "label": "小雪",
        "icon": "❄️"
      },
      "73": {
        "label": "雪",
        "icon": "❄️"
      },
      "75": {
        "label": "大雪",
        "icon": "❄️"
      },
      "80": {
        "label": "阵雨",
        "icon": "🌦️"
      },
      "81": {
        "label": "阵雨",
        "icon": "🌧️"
      },
      "82": {
        "label": "强阵雨",
        "icon": "🌧️"
      },
      "85": {
        "label": "阵雪",
        "icon": "🌨️"
      },
      "86": {
        "label": "阵雪",
        "icon": "🌨️"
      },
      "95": {
        "label": "雷暴",
        "icon": "⛈️"
      },
      "96": {
        "label": "雷暴",
        "icon": "⛈️"
      },
      "99": {
        "label": "雷暴",
        "icon": "⛈️"
      }
    },
    "weekdays": [
      "日",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六"
    ],
    "today": "今天",
    "ui": {
      "unavailable": "暂时无法获取新鲜预报，出发前请查询其他天气来源。",
      "title": "模型天气与7天预报",
      "subtitle": "Open-Meteo科伦坡模型估计，并非现场实时观测或通行建议。",
      "current": "当前天气",
      "feelsLike": "体感温度",
      "humidity": "湿度",
      "wind": "风",
      "precipChance": "降雨概率",
      "uv": "紫外线指数",
      "uvNow": "当前紫外线",
      "loading": "正在加载最新天气数据…",
      "riskTitle": "⚠️ 安全提示",
      "outfitTitle": "👕 穿着建议",
      "activityTitle": "🗺️ 活动建议",
      "itemsTitle": "🎒 随身物品",
      "week": "7 天预报",
      "precipLabel": "雨",
      "sourceNote": "天气数据按当地时间（Asia/Colombo）提供。天气可能迅速变化——出发前请再次确认。"
    },
    "phrases": {
      "rainUmbrella": "可能下雨，请携带雨伞。",
      "rainShelter": "出发前先确认合适的坚固避雨处，不要假定关闭的摊位可供避雨。",
      "rainItem": "雨伞 / 雨衣",
      "lightRainClothing": "可能有小雨；路面湿滑，请小心行走。",
      "lightRainActivity": "按预报准备并查看最新警报，只使用当天确认开放且适合的路线；晴天或阴天不代表路径安全或访客时段已获确认。",
      "lightRainItem": "折叠伞",
      "heavyRisk": "大雨后请避开积水区域和水边边缘。",
      "heavyActivity": "避开暴露水岸、积水及损坏路径，必要时延后户外行程。",
      "heavyItem": "雨衣（风大不宜用长柄伞）",
      "thunderRisk": "雷电和风暴时，请远离水边，勿在树下避雨。",
      "thunderActivity": "雷雨期间延后暴露的户外安排并遵循官方警报；预报不确认活动是否营业。",
      "fogRisk": "能见度低，水边拍照和远眺受限。",
      "fogActivity": "按预报准备并查看最新警报，只使用当天确认开放且适合的路线；晴天或阴天不代表路径安全或访客时段已获确认。",
      "fogItem": "视野受限",
      "hotClothing": "天气炎热——避免正午出行，穿轻薄透气的衣物。",
      "hotActivity": "自备饮用水，限制高温暴露并安排适合的休息替代方案。",
      "hotItem": "遮阳帽、充足饮水、防暑用品",
      "uvClothing": "紫外线强，需做好防晒。",
      "uvItem": "防晒霜、墨镜、遮阳帽",
      "tempRange": "昼夜温差大——请带一件可增减的外套。",
      "coldClothing": "气温偏低，注意保暖。",
      "coldItem": "厚外套、围巾",
      "windRisk": "大风时请避开指示牌、水边护栏等设施。",
      "windActivity": "强风时远离暴露边缘并遵循现场指示，模型不确认活动是否营业。",
      "windClothing": "请注意风力影响。",
      "windItem": "避免穿容易被风吹走的宽大衣物",
      "clearActivity": "按预报准备并查看最新警报，只使用当天确认开放且适合的路线；晴天或阴天不代表路径安全或访客时段已获确认。",
      "clearItem": "记得防晒",
      "cloudActivity": "按预报准备并查看最新警报，只使用当天确认开放且适合的路线；晴天或阴天不代表路径安全或访客时段已获确认。"
    }
  }
};
