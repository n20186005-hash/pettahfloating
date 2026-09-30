import type { Locale } from '../i18n';

export interface WeatherLang {
  wmo: Record<string, { label: string; icon: string }>;
  weekdays: string[];
  today: string;
  ui: {
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

const WMO_ICONS: Record<string, string> = {
  '0': '☀️', '1': '🌤️', '2': '⛅', '3': '☁️',
  '45': '🌫️', '48': '🌫️',
  '51': '🌦️', '53': '🌦️', '55': '🌦️',
  '61': '🌧️', '63': '🌧️', '65': '🌧️', '66': '🌧️', '67': '🌧️',
  '71': '❄️', '73': '❄️', '75': '❄️',
  '80': '🌦️', '81': '🌧️', '82': '🌧️',
  '85': '🌨️', '86': '🌨️',
  '95': '⛈️', '96': '⛈️', '99': '⛈️',
};

function wmo(labels: Record<string, string>): Record<string, { label: string; icon: string }> {
  const out: Record<string, { label: string; icon: string }> = {};
  for (const k of Object.keys(WMO_ICONS)) {
    out[k] = { label: labels[k] ?? labels['0'], icon: WMO_ICONS[k] };
  }
  return out;
}

export const WEATHER_I18N: Record<Locale, WeatherLang> = {
  en: {
    wmo: wmo({
      '0': 'Clear sky', '1': 'Mainly clear', '2': 'Partly cloudy', '3': 'Overcast',
      '45': 'Fog', '48': 'Rime fog',
      '51': 'Light drizzle', '53': 'Drizzle', '55': 'Dense drizzle',
      '61': 'Light rain', '63': 'Rain', '65': 'Heavy rain', '66': 'Freezing rain', '67': 'Freezing rain',
      '71': 'Light snow', '73': 'Snow', '75': 'Heavy snow',
      '80': 'Rain showers', '81': 'Rain showers', '82': 'Violent showers',
      '85': 'Snow showers', '86': 'Snow showers',
      '95': 'Thunderstorm', '96': 'Thunderstorm', '99': 'Thunderstorm',
    }),
    weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
    today: 'Today',
    ui: {
      title: 'Current weather & 7-day forecast',
      subtitle: 'Live conditions at Beira Lake, Colombo — plan your visit around the weather.',
      current: 'Current weather', feelsLike: 'Feels like', humidity: 'Humidity', wind: 'Wind',
      precipChance: 'Rain chance', uv: 'UV index', uvNow: 'UV now', loading: 'Loading latest weather data…',
      riskTitle: '⚠️ Safety advisory', outfitTitle: '👕 What to wear', activityTitle: '🗺️ What to do', itemsTitle: '🎒 What to bring',
      week: '7-day forecast', precipLabel: 'Rain', sourceNote: 'Weather data is provided for the local time (Asia/Colombo). Conditions can change quickly — re-check before you set out.',
    },
    phrases: {
      rainUmbrella: 'Carry an umbrella — showers are likely.',
      rainShelter: 'Choose covered, sheltered spots; pause under the market stalls for shade.',
      rainItem: 'Umbrella / rain jacket',
      lightRainClothing: 'Light showers possible; pavements can be slippery — walk carefully.',
      lightRainActivity: 'Outdoor time may be a little limited.',
      lightRainItem: 'Foldable umbrella',
      heavyRisk: 'After heavy rain, avoid pooled water areas and the waterfront edges.',
      heavyActivity: 'Skip long boardwalk walks in the rain; stay near the stalls.',
      heavyItem: 'Raincoat (a long umbrella is unwise in wind)',
      thunderRisk: 'During lightning and storms, avoid the waterfront and sheltering under trees.',
      thunderActivity: 'Water-based activities may close.',
      fogRisk: 'Reduced visibility limits waterfront photos and long-distance views.',
      fogActivity: 'Distant viewpoints are less rewarding now.',
      fogItem: 'Limited open views',
      hotClothing: 'High heat — avoid midday, wear light, breathable clothing.',
      hotActivity: 'Keep boardwalk time short and hydrate.',
      hotItem: 'Sun hat, enough water, heat protection',
      uvClothing: 'High UV — sun protection needed.',
      uvItem: 'Sunscreen, sunglasses, sun hat',
      tempRange: 'Large day–night temperature swing — bring a layer you can add.',
      coldClothing: 'Cooler temperatures — keep warm.',
      coldItem: 'Warm jacket, scarf',
      windRisk: 'Avoid signs, waterfront barriers and similar spots in strong wind.',
      windActivity: 'Water activities and open play may close.',
      windClothing: 'Account for the breeze.',
      windItem: 'Skip loose large clothing that the wind can blow away',
      clearActivity: 'Clear skies are great for the boardwalk and sunrise/sunset photos.',
      clearItem: 'Remember sun protection',
      cloudActivity: 'Soft light is good for photos; good for a long boardwalk stroll.',
    },
  },
  si: {
    wmo: wmo({
      '0': 'පැහැදිලි අහස', '1': 'බොහෝමට පැහැදිලි', '2': 'අර්ධ වශයෙන් වලාකුළු', '3': 'වලාකුළු අහස',
      '45': 'මීදුම / කුණු', '48': 'මීදුම / කුණු',
      '51': 'මෘදු වැසි', '53': 'මෘදු වැසි', '55': 'මෘදු වැසි',
      '61': 'වැසි', '63': 'වැසි', '65': 'තීව්‍ර වැසි', '66': 'ටික වැසි', '67': 'ටික වැසි',
      '71': 'ස්නෝ', '73': 'ස්නෝ', '75': 'ස්නෝ',
      '80': 'වැසි පැද්දීම්', '81': 'වැසි පැද්දීම්', '82': 'වැසි පැද්දීම්',
      '85': 'ස්නෝ පැද්දීම්', '86': 'ස්නෝ පැද්දීම්',
      '95': 'කුණාටු / කෙරිලි', '96': 'කුණාටු සහ අයිස්', '99': 'කුණාටු සහ අයිස්',
    }),
    weekdays: ['ඉරිදා', 'සඳුදා', 'අඟහරුවාදා', 'බදාදා', 'බ්‍රහස්පතින්දා', 'සිකුරාදා', 'සෙනසුරාදා'],
    today: 'අද',
    ui: {
      title: 'වත්මන් කාලගුණය සහ සතියක පුරෝකථනය',
      subtitle: 'බේරේ වැව, කොළඹ හිදී කාලගුණය — කාලගුණයට අනුව ඔබේ සංචාරය සැලසුම් කරන්න.',
      current: 'වත්මන් කාලගුණය', feelsLike: 'අත්හදාගත හැඟීම', humidity: 'ආර්ද්‍රතාව', wind: 'සුළං',
      precipChance: 'වැසි න්‍යාය', uv: 'අතිනීල කිරණ', uvNow: 'වර්තමාන අතිනීල', loading: 'පහත් කාලගුණ දත්ත ලබාගනිමින්…',
      riskTitle: '⚠️ අවදානම් දැනුම්දීම', outfitTitle: '👕 ගමනේ ඇඳුම්', activityTitle: '🗺️ විනෝද කටයුතු', itemsTitle: '🎒 සමඟ රැගෙන යන දෑ',
      week: 'සතියක පුරෝකථනය', precipLabel: 'වැසි', sourceNote: 'කාලගුණ දත්ත නැවුම් ප්‍රදේශීය වේලාව (Asia/Colombo) අනුව සැපයේ. කෙටි කාලයක් ඇතුළත කාලගුණය වෙනස් විය හැකි බැවින් පැමිණීමට පෙර නැවුම් තත්ත්වය නැවත පරීක්ෂා කරන්න.',
    },
    phrases: {
      rainUmbrella: 'සම්භාව්‍යයෙන් වැසි ඇදෙනු ඇත්තේ නිසා කත්තරයක් රැගෙන යන්න.',
      rainShelter: 'ආරක්ෂිත හා වසන ඉඩ තෝරාගන්න; වෙළඳපොළ කුටිවල නැවතී සෙවණ සොයන්න.',
      rainItem: 'කත්තරය / වැසි ඇඳුම',
      lightRainClothing: 'සමන් කුඩා වැසිය; පාරේ පෙදෙස් උළු විය හැකි බැවින් සැලකිලිමත්ව ඇවිදින්න.',
      lightRainActivity: 'විවෘත ස්ථානවල අත්දැකීම මදක් අඩු විය හැක.',
      lightRainItem: 'හැකිළිය හැකි කත්තරය',
      heavyRisk: 'වැසි වැඩිබල් නිසා ජලය රැඳී ඇති පෙදෙස් හා ජලතීරයේ සීමාවන්වලින් වැළකී සිටින්න.',
      heavyActivity: 'වැසි කාලයේ දීර්ඝ ජලතීර ඇවිදීම වළක්වා, කුටි ආශ්‍රිතව සීමිතව ගමන් කරන්න.',
      heavyItem: 'වැසි ඇඳුම (සුළං හේතුවෙන් දිගු කත්තරය සුදුසු නොවේ)',
      thunderRisk: 'කෙරිලි හා කුණාටු අවස්ථාවේ ජලතීරයේ සෙල්ලම් කිරීම, ගස් යටින් සෙවණ සොයාගැනීම වළක්වන්න.',
      thunderActivity: 'ජල මත ක්‍රියාකාරකම් වසා දැමිය හැක.',
      fogRisk: 'දෘශ්‍යතාව අඩු නිසා ජලතීර ඡායාරූප හා දුර දැක්ම සීමිත වේ.',
      fogActivity: 'දුර දැක්ම සහිත ස්ථාන නරඹීමට ගැළපෙන්නේ නැත.',
      fogItem: 'සීමිත ගුවන් විදුලි පළාත',
      hotClothing: 'උෂ්ණත්වය වැඩි නිසා මධ්‍යාහ්නයේ යාම වළක්වා, සැහැල්ලු හා වායු ගමන් ඇඳුම් අදින්න.',
      hotActivity: 'ජලතීරයේ වේලාව කෙටි කර ජලය වැඩිපුර බුද්ගලයින්ට ලබාදෙන්න.',
      hotItem: 'හිරු ආරක්ෂක, ප්‍රමාණවත් ජලය, උණුසුම් වැළැක්වීමේ උපකරණ',
      uvClothing: 'අධික නිසා හිරු ආරක්ෂක අවශ්‍ය වේ.',
      uvItem: 'හිරු කිරීමේ ක්‍රීම්, දර්පණ කණ්ණාඩි, හිරු තොප්පි',
      tempRange: 'දවසේ හා රාත්‍රියේ උෂ්ණත්ව ඵලකය විශාල නිසා ඇඳුම් එකතු කිරීමට පහසු ජැකට් එකක් රැගෙන යන්න.',
      coldClothing: 'උෂ්ණත්වය අඩු නිසා සීතලට ආරක්ෂා වන්න.',
      coldItem: 'ඝන ජැකට්, ගෙල් රෙද්ද',
      windRisk: 'සුළං හේතුවෙන් දැන්වීම් පුවරු, ජලතීර ආරක්ෂක බාධක වැනි ස්ථානවලින් වැළකී සිටින්න.',
      windActivity: 'ජල මත ක්‍රියාකාරකම් වසා දැමිය හැක.',
      windClothing: 'සුළං තත්ත්වය සැලකිල්ලට ගන්න.',
      windItem: 'මූඩිය ඉවත් විය හැකි නිසා විශාල හැකිළි ඇඳුම් නොඅදින්න',
      clearActivity: 'පැහැදිලි කාලගුණය ජලතීර ඇවිදීම සහ හිරු උදාව/සුරිය බිම් ඡායාරූප සඳහා සුදුසු.',
      clearItem: 'හිරු ආරක්ෂක මතක් කරන්න',
      cloudActivity: 'ආලෝකය මෘදු නිසා ඡායාරූප සඳහා හොඳයි; දීර්ඝ වේලාවක් ජලතීරයේ ගත කිරීමට සුදුසු.',
    },
  },
  ta: {
    wmo: wmo({
      '0': 'தெளிவான வானம்', '1': 'பெரும்பாலும் தெளிவு', '2': 'சிறிது மேகமூட்டம்', '3': 'மேகமூட்டம்',
      '45': 'மூடுபனி', '48': 'நுண்பனி',
      '51': 'இலேசான மழைத்தூறல்', '53': 'மழைத்தூறல்', '55': 'அடர்த்தியான மழைத்தூறல்',
      '61': 'இலேசான மழை', '63': 'மழை', '65': 'பலத்த மழை', '66': 'உறைந்த மழை', '67': 'உறைந்த மழை',
      '71': 'இலேசான பனி', '73': 'பனி', '75': 'பலத்த பனி',
      '80': 'மழைப் பொழிவுகள்', '81': 'மழைப் பொழிவுகள்', '82': 'கடும் மழைப் பொழிவுகள்',
      '85': 'பனிப் பொழிவுகள்', '86': 'பனிப் பொழிவுகள்',
      '95': 'இடிமின்னல் புயல்', '96': 'இடிமின்னல் புயல்', '99': 'இடிமின்னல் புயல்',
    }),
    weekdays: ['ஞாயி', 'திங்', 'செவ்', 'புதன்', 'வியா', 'வெள்', 'சனி'],
    today: 'இன்று',
    ui: {
      title: 'தற்போதைய வானிலை மற்றும் 7 நாள் முன்னறிவிப்பு',
      subtitle: 'பேரா ஏரி, கொழும்பில் நிகழ்நிலை நிலைமைகள் — வானிலையை வைத்து உங்கள் பயணத்தைத் திட்டமிடுங்கள்.',
      current: 'தற்போதைய வானிலை', feelsLike: 'உணரப்படும் வெப்பநிலை', humidity: 'ஈரப்பதம்', wind: 'காற்று',
      precipChance: 'மழை வாய்ப்பு', uv: 'புறஊதா அடுக்கு', uvNow: 'தற்போதைய புறஊதா', loading: 'சமீபத்திய வானிலைத் தரவை ஏற்றுகிறோம்…',
      riskTitle: '⚠️ பாதுகாப்பு எச்சரிக்கை', outfitTitle: '👕 அணிய வேண்டியது', activityTitle: '🗺️ செய்ய வேண்டியது', itemsTitle: '🎒 எடுத்து வர வேண்டியது',
      week: '7 நாள் முன்னறிவிப்பு', precipLabel: 'மழை', sourceNote: 'வானிலைத் தரவு உள்ளூர் நேரத்திற்கு (Asia/Colombo) வழங்கப்படுகிறது. நிலைமைகள் விரைவில் மாறலாம் — புறப்படும் முன் மீண்டும் சரிபார்க்கவும்.',
    },
    phrases: {
      rainUmbrella: 'மழை பொழிய வாய்ப்புள்ளதால் குடை எடுத்து வாருங்கள்.',
      rainShelter: 'மூடிய, நிழலான இடங்களைத் தேர்ந்தெடுங்கள்; சந்தைக் கடைகளில் நின்று ஓய்வெடுங்கள்.',
      rainItem: 'குடை / மழைக்கோட்',
      lightRainClothing: 'இலேசான மழை பொழியலாம்; நடைபாதை வழுக்கும் என்பதால் கவனமாக நடந்து செல்லுங்கள்.',
      lightRainActivity: 'திறந்த வெளியில் சிறிது நேரம் குறையலாம்.',
      lightRainItem: 'மடக்கக்கூடிய குடை',
      heavyRisk: 'பலத்த மழைக்குப் பின் தேங்கிய நீர் பகுதிகளையும் நீரோர விளிம்புகளையும் தவிர்க்கவும்.',
      heavyActivity: 'மழையில் நீண்ட நடைபாதைச் சுற்றுலாவைத் தவிர்த்து, கடைகளுக்கு அருகில் இருங்கள்.',
      heavyItem: 'மழைக்கோட் (காற்றில் நீளக் குடை பரிந்துரைக்கப்படுவதில்லை)',
      thunderRisk: 'இடிமின்னல் மற்றும் புயலின் போது நீரோரத்தையும் மர நிழலையும் தவிர்க்கவும்.',
      thunderActivity: 'நீர் சார்ந்த செயல்பாடுகள் மூடப்படலாம்.',
      fogRisk: 'பார்வைக் குறைவால் நீரோரப் புகைப்படங்களும் தொலைநோக்கும் வரையறுக்கப்படும்.',
      fogActivity: 'தொலைநோக்குப் பகுதிகள் இப்போது குறைவான பலன் தரும்.',
      fogItem: 'வரையறுக்கப்பட்ட திறந்த காட்சிகள்',
      hotClothing: 'வெப்பம் அதிகம் — நண்பகலைத் தவிர்த்து, இலகை உடைகளை அணியுங்கள்.',
      hotActivity: 'நீரோர நேரத்தைக் குறைத்து நீரை அருந்துங்கள்.',
      hotItem: 'குறும்படக் கவசம், போதுமான நீர், வெப்பப் பாதுகாப்பு',
      uvClothing: 'புறஊதா அதிகம் — சூரியப் பாதுகாப்புத் தேவை.',
      uvItem: 'சூரியக் கவசக் கிரீம், கண்ணாடி, குறும்படத் தொப்பி',
      tempRange: 'பகல்–இரவு வெப்ப வேறுபாடு அதிகம் — அணியக் கூடிய அங்கியை எடுத்து வாருங்கள்.',
      coldClothing: 'வெப்பநிலை குறைவு — பாதுகாப்பாக இருங்கள்.',
      coldItem: 'தடித்த சூடான அங்கி, துண்டு',
      windRisk: 'பலத்த காற்றில் அறிவிப்புப் பலகைகள், நீரோரத் தடுப்புகள் போன்றவற்றைத் தவிர்க்கவும்.',
      windActivity: 'நீர் சார்ந்த செயல்பாடுகள் மூடப்படலாம்.',
      windClothing: 'காற்றைக் கருத்தில் கொள்ளுங்கள்.',
      windItem: 'காற்றில் பறக்கக்கூடிய பெரிய தளர்வான உடைகளைத் தவிர்க்கவும்',
      clearActivity: 'தெளிவான வானம் நடைபாதை மற்றும் சூரிய உதய/அஸ்தமனப் புகைப்படங்களுக்கு ஏற்றது.',
      clearItem: 'சூரியப் பாதுகாப்பை நினைவில் கொள்ளுங்கள்',
      cloudActivity: 'மென்மையான ஒளி புகைப்படங்களுக்கு நல்லது; நீண்ட நடைபாதைச் சுற்றுலாவுக்கு ஏற்றது.',
    },
  },
  zh: {
    wmo: wmo({
      '0': '晴', '1': '大致晴朗', '2': '局部多云', '3': '阴',
      '45': '雾', '48': '霜雾',
      '51': '小毛毛雨', '53': '毛毛雨', '55': '浓毛毛雨',
      '61': '小雨', '63': '中雨', '65': '大雨', '66': '冻雨', '67': '冻雨',
      '71': '小雪', '73': '雪', '75': '大雪',
      '80': '阵雨', '81': '阵雨', '82': '强阵雨',
      '85': '阵雪', '86': '阵雪',
      '95': '雷暴', '96': '雷暴', '99': '雷暴',
    }),
    weekdays: ['日', '一', '二', '三', '四', '五', '六'],
    today: '今天',
    ui: {
      title: '当前天气与 7 天预报',
      subtitle: '科伦坡贝拉湖实时天气状况——根据天气安排你的行程。',
      current: '当前天气', feelsLike: '体感温度', humidity: '湿度', wind: '风',
      precipChance: '降雨概率', uv: '紫外线指数', uvNow: '当前紫外线', loading: '正在加载最新天气数据…',
      riskTitle: '⚠️ 安全提示', outfitTitle: '👕 穿着建议', activityTitle: '🗺️ 活动建议', itemsTitle: '🎒 随身物品',
      week: '7 天预报', precipLabel: '雨', sourceNote: '天气数据按当地时间（Asia/Colombo）提供。天气可能迅速变化——出发前请再次确认。',
    },
    phrases: {
      rainUmbrella: '可能下雨，请携带雨伞。',
      rainShelter: '选择有遮挡的地方；可在市场摊位下歇息避晒。',
      rainItem: '雨伞 / 雨衣',
      lightRainClothing: '可能有小雨；路面湿滑，请小心行走。',
      lightRainActivity: '户外活动时间可能稍短。',
      lightRainItem: '折叠伞',
      heavyRisk: '大雨后请避开积水区域和水边边缘。',
      heavyActivity: '雨天不要长时间走木板栈道，尽量待在摊位附近。',
      heavyItem: '雨衣（风大不宜用长柄伞）',
      thunderRisk: '雷电和风暴时，请远离水边，勿在树下避雨。',
      thunderActivity: '水上活动可能暂停。',
      fogRisk: '能见度低，水边拍照和远眺受限。',
      fogActivity: '远景观赏点此时效果不佳。',
      fogItem: '视野受限',
      hotClothing: '天气炎热——避免正午出行，穿轻薄透气的衣物。',
      hotActivity: '缩短水边停留时间，注意补水。',
      hotItem: '遮阳帽、充足饮水、防暑用品',
      uvClothing: '紫外线强，需做好防晒。',
      uvItem: '防晒霜、墨镜、遮阳帽',
      tempRange: '昼夜温差大——请带一件可增减的外套。',
      coldClothing: '气温偏低，注意保暖。',
      coldItem: '厚外套、围巾',
      windRisk: '大风时请避开指示牌、水边护栏等设施。',
      windActivity: '水上活动和开阔区域游玩可能暂停。',
      windClothing: '请注意风力影响。',
      windItem: '避免穿容易被风吹走的宽大衣物',
      clearActivity: '晴好天气适合漫步栈道，也适合日出/日落摄影。',
      clearItem: '记得防晒',
      cloudActivity: '光线柔和，适合拍照；也适合长时间漫步栈道。',
    },
  },
};
