import type { Locale } from '../i18n';
import { ATTRACTION_FULL_NAME, ATTRACTION_SHORT_NAME, CITY_NAME, STATE_PROVINCE, COUNTRY_NAME, STREET_ADDRESS, POSTAL_CODE, NEARBY_LANDMARK_1, NEARBY_LANDMARK_2 } from './site';

type L4<T> = Record<Locale, T>;

/* ----------------------------- UI chrome ----------------------------- */
export const ui: L4<{
  skip: string;
  home: string;
  language: string;
  navAbout: string; navWeather: string; navGettingHere: string; navServices: string;
  navVisit: string; navFood: string; navNearby: string; navSeasons: string;
  navItineraries: string; navReviews: string; navMap: string; navFaq: string;
  googleMaps: string;
  notOfficial: string;
}> = {
  en: {
    skip: `Skip to content`, home: `Home`, language: `Language`,
    navAbout: `About`, navWeather: `Weather`, navGettingHere: `Getting here`, navServices: `Services`,
    navVisit: `Plan visit`, navFood: `Food`, navNearby: `Nearby`, navSeasons: `Seasons`,
    navItineraries: `Itineraries`, navReviews: `Reviews`, navMap: `Map`, navFaq: `FAQ`,
    googleMaps: `Google Maps`,
    notOfficial: `This is an independent visitor-information guide, not the official site. Google Maps and Google are trademarks of Google LLC.`,
  },
  si: {
    skip: `අන්තර්ගතයට යන්න`, home: `මුල් පිටුව`, language: `භාෂය`,
    navAbout: `අත්දැකීම`, navWeather: `කාලගුණය`, navGettingHere: `පැමිණීම`, navServices: `සේවා`,
    navVisit: `සංචාරය`, navFood: `ආහාර`, navNearby: `අසල`, navSeasons: `සමය`,
    navItineraries: `මාර්ග`, navReviews: `සමාලෝචන`, navMap: `සිතියම`, navFaq: `ප්‍රශ්න`,
    googleMaps: `Google Maps`,
    notOfficial: `මෙය නිල වෙබ් අඩවියක් නොවේ; සංචාර සැලසුම් කිරීම සඳහා ස්වාධීන තොරතුරු මාර්ගෝපදේශයකි. Google Maps සහ Google සිතියම් යනු Google LLC හි වෙළඳ ලකුණු වේ.`,
  },
  ta: {
    skip: `உள்ளடக்கத்திற்குச் செல்லவும்`, home: `முகப்பு`, language: `மொழி`,
    navAbout: `அறிமுகம்`, navWeather: `வானிலை`, navGettingHere: `வரும் வழி`, navServices: `சேவைகள்`,
    navVisit: `பயணத் திட்டம்`, navFood: `உணவு`, navNearby: `அருகில்`, navSeasons: `பருவங்கள்`,
    navItineraries: `பயணத் திட்டங்கள்`, navReviews: `மதிப்புரைகள்`, navMap: `வரைபடம்`, navFaq: `கேள்விகள்`,
    googleMaps: `Google Maps`,
    notOfficial: `இது அதிகாரப்பூர்வ தளம் அல்ல; பார்வையாளர் தகவல் வழிகாட்டி மட்டுமே. Google Maps மற்றும் Google ஆகியவை Google LLC இன் வர்த்தக முத்திரைகள்.`,
  },
  zh: {
    skip: `跳到正文`, home: `首页`, language: `语言`,
    navAbout: `简介`, navWeather: `天气`, navGettingHere: `交通`, navServices: `服务`,
    navVisit: `行程规划`, navFood: `美食`, navNearby: `周边`, navSeasons: `季节`,
    navItineraries: `路线`, navReviews: `评价`, navMap: `地图`, navFaq: `常见问题`,
    googleMaps: `Google 地图`,
    notOfficial: `这是一个独立的游客信息指南，并非官方网站。Google 地图和 Google 是 Google LLC 的商标。`,
  },
};

/* ------------------------------- Meta -------------------------------- */
export const meta: L4<{ title: string; description: string; ogTitle: string }> = {
  en: {
    title: `Pettah Floating Market Colombo | Visitor Guide, Opening Hours & Shops`,
    description: `Explore ${ATTRACTION_FULL_NAME} in ${CITY_NAME}, ${COUNTRY_NAME}. Find location map, opening hours, free entry, local shops, dining and how to get there.`,
    ogTitle: `${ATTRACTION_FULL_NAME} - ${CITY_NAME} Travel Guide`,
  },
  si: {
    title: `පිටකොටුව පාවෙන වෙළඳපොළ කොළඹ | සංචාරක මාර්ගෝපදේශය, විවෘත වේලාවන් සහ කුඩා කඩවල්`,
    description: `කොළඹ, ශ්‍රී ලංකාවේ පිටකොටුව පාවෙන වෙළඳපොළ ගැන සොයන්න. සිතියම, විවෘත වේලාවන්, නොමිලේ ප්‍රවේශය, දේශීය කුඩා කඩවල්, ආහාර සහ එහා පැමිණීමේ ක්‍රම බලන්න.`,
    ogTitle: `පිටකොටුව පාවෙන වෙළඳපොළ - කොළඹ සංචාරක මාර්ගෝපදේශය`,
  },
  ta: {
    title: `பெட்டா மிதக்கும் சந்தை கொழும்பு | வருகையாளர் வழிகாட்டி, நேரம் மற்றும் கடைகள்`,
    description: `இலங்கை, கொழும்பில் உள்ள பெட்டா மிதக்கும் சந்தையை ஆராயுங்கள். இருப்பிட வரைபடம், நேரம், இலவச நுழைவு, உள்ளூர் கடைகள், உணவு மற்றும் எவ்வாறு வருவது என்பதை அறியவும்.`,
    ogTitle: `பெட்டா மிதக்கும் சந்தை - கொழும்பு பயண வழிகாட்டி`,
  },
  zh: {
    title: `佩塔水上市场 科伦坡 | 游客指南、开放时间与店铺`,
    description: `探索斯里兰卡科伦坡的佩塔水上市场。查看位置地图、开放时间、免费入场、当地店铺、餐饮以及交通方式。`,
    ogTitle: `佩塔水上市场 - 科伦坡旅游指南`,
  },
};

/* ------------------------------- Hero -------------------------------- */
export const hero: L4<{
  badge: string;
  titleName: string;
  titleCity: string;
  titleSub: string;
  lead: string;
  ctaPlan: string;
  ctaMap: string;
  quick: { rating: string; reviews: string; free: string; time: string; hours: string; hoursValue: string; mapsNote: string; ratingNote: string };
}> = {
  en: {
    badge: `Beira Lake · Pettah · Colombo 01`,
    titleName: ATTRACTION_FULL_NAME,
    titleCity: `(Colombo)`,
    titleSub: `A different rhythm of the city, right by the water.`,
    lead: `${ATTRACTION_SHORT_NAME} is the waterfront marketplace of ${CITY_NAME}: a regenerated stretch of ${STREET_ADDRESS} beside Beira Lake where 92 stalls sit on and beside the water. It is one of the easiest half-hour stops to combine with a walk through Pettah.`,
    ctaPlan: `Plan your visit`,
    ctaMap: `View the map`,
    quick: {
      rating: `Rating`, reviews: `Reviews`, free: `General entry`, time: `Suggested time`, hours: `Hours`,
      hoursValue: `Mon–Sat · 08:00–22:30`,
      mapsNote: `Synced from Google Maps user reviews`,
      ratingNote: `Synced September 2026 · copyright belongs to the original authors and Google Maps.`,
    },
  },
  si: {
    badge: `බේරේ වැව · පිටකොටුව · කොළඹ 01`,
    titleName: ATTRACTION_FULL_NAME,
    titleCity: `(කොළඹ)`,
    titleSub: `ජලය අසල නගරයේ වෙනස් රිද්මයක්.`,
    lead: `බේරේ වැව අසල පැරණි Bastian Mawatha ප්‍රදේශය නැවත සංවර්ධනය කර නිර්මාණය කළ මෙම වෙළඳපොළ 2014දී ජනතාවට විවෘත විය. නාගරික සංවර්ධන අධිකාරියේ තොරතුරු අනුව මෙහි වෙළඳ කුටි 92ක් ඇති අතර, ඇතැම් කුටි ජලය මත පිහිටුවා තිබේ.`,
    ctaPlan: `සංචාරය සැලසුම් කරන්න`,
    ctaMap: `සිතියම බලන්න`,
    quick: {
      rating: `ශ්‍රේණිගත කිරීම`, reviews: `සමාලෝචන ගණන`, free: `සාමාන්‍ය ප්‍රවේශය`, time: `යෝජිත කාලය`, hours: `වේලාව`,
      hoursValue: `සඳු–සෙන 08:00–22:30`,
      mapsNote: `Google Maps පරිශීලක සමාලෝචන වලින්`,
      ratingNote: `සමමුහුර්ත කාලය 2026 සැප්තැම්බර් · ප්‍රකාශන හිමිකම් මුල් කර්තෘ සහ Google Maps සතුය.`,
    },
  },
  ta: {
    badge: `பேரா ஏரி · பெட்டா · கொழும்பு 01`,
    titleName: ATTRACTION_FULL_NAME,
    titleCity: `(கொழும்பு)`,
    titleSub: `நீரோரத்தில் நகரத்தின் வேறு தாளம்.`,
    lead: `${ATTRACTION_SHORT_NAME} என்பது ${CITY_NAME} நகரத்தின் நீரோரச் சந்தையாகும்: பேரா ஏரிக்கு அருகில் உள்ள ${STREET_ADDRESS} பகுதியில், 92 கடைகள் நீர்மீதும் அதன் ஓரத்திலும் அமைந்துள்ளன. பெட்டாவில் நடந்து செல்வதோடு இணைத்துக் கொள்ள ஏதுவான அரைமணிநேர நிறுத்தமாகும்.`,
    ctaPlan: `உங்கள் பயணத்தைத் திட்டமிடுங்கள்`,
    ctaMap: `வரைபடத்தைப் பார்க்க`,
    quick: {
      rating: `மதிப்பீடு`, reviews: `மதிப்புரைகள்`, free: `பொது நுழைவு`, time: `பரிந்துரைக்கப்பட்ட நேரம்`, hours: `நேரம்`,
      hoursValue: `திங்–சனி · 08:00–22:30`,
      mapsNote: `Google Maps பயனர் மதிப்புரைகளிலிருந்து`,
      ratingNote: `செப்டம்பர் 2026 உடன் ஒத்திசைக்கப்பட்டது · காப்புரிமை அசல் ஆசிரியர்கள் மற்றும் Google Maps உடையது.`,
    },
  },
  zh: {
    badge: `贝拉湖 · 佩塔 · 科伦坡 01`,
    titleName: ATTRACTION_FULL_NAME,
    titleCity: `（科伦坡）`,
    titleSub: `城市在水边换了一种节奏。`,
    lead: `${ATTRACTION_SHORT_NAME} 是 ${CITY_NAME} 的水岸集市：在贝拉湖畔重新开发的 ${STREET_ADDRESS} 路段，92 个摊位坐落或紧邻水面，是与佩塔老城漫步结合最轻松的半小时站点之一。`,
    ctaPlan: `规划你的行程`,
    ctaMap: `查看地图`,
    quick: {
      rating: `评分`, reviews: `评价数`, free: `一般入场`, time: `建议时长`, hours: `时间`,
      hoursValue: `周一–周六 · 08:00–22:30`,
      mapsNote: `同步自 Google 地图用户评价`,
      ratingNote: `同步时间 2026 年 9 月；版权归原作者与 Google 地图所有`,
    },
  },
};

/* ------------------------------- About ------------------------------- */
export const about: L4<{ label: string; kicker: string; title: string; p1: string; p2: string; p3: string }> = {
  en: {
    label: `About ${ATTRACTION_FULL_NAME}`,
    kicker: `About ${ATTRACTION_FULL_NAME}`,
    title: `Where Pettah's trading energy meets the waterfront.`,
    p1: `Redeveloped from the old Bastian Mawatha stretch beside Beira Lake, the market opened to the public in 2014. According to the Urban Development Authority, it has 92 stalls, some built right over the water.`,
    p2: `What makes it distinctive is the mix: handicrafts, clothing, sundries, fruit and short eats gathered along a single waterfront boardwalk. Today the main draw, beyond shopping, is simply walking by the water, taking city photos, and stealing a quiet break from busy Pettah.`,
    p3: `${ATTRACTION_FULL_NAME} is the waterfront marketplace of ${CITY_NAME}: a regenerated stretch of ${STREET_ADDRESS} beside Beira Lake where 92 stalls sit on and beside the water, making it one of the easiest half-hour stops to combine with a walk through Pettah.`,
  },
  si: {
    label: `අත්දැකීම`,
    kicker: `About ${ATTRACTION_FULL_NAME}`,
    title: `පිටකොටුවේ වෙළඳ ශක්තිය ජලතීරයට ගෙනා නගර අවකාශයක්.`,
    p1: `බේරේ වැව අසල පැරණි Bastian Mawatha ප්‍රදේශය නැවත සංවර්ධනය කර නිර්මාණය කළ මෙම වෙළඳපොළ 2014දී ජනතාවට විවෘත විය. නාගරික සංවර්ධන අධිකාරියේ තොරතුරු අනුව මෙහි වෙළඳ කුටි 92ක් ඇති අතර, ඇතැම් කුටි ජලය මත පිහිටුවා තිබේ.`,
    p2: `අත්කම්, ඇඳුම්, අමතර භාණ්ඩ, පලතුරු සහ කුඩා ආහාර අත්දැකීම එකම ජලතීර ගමන් මාර්ගයක එකතුවීම මෙහි විශේෂත්වයයි. අද පැමිණීමේ ප්‍රධාන ආකර්ෂණය වෙළඳාමට අමතරව ජලය අසල ඇවිදීම, නගර ඡායාරූප සහ පිටකොටුවේ කාර්යබහුලත්වයෙන් කෙටි විරාමයක් ගැනීමයි.`,
    p3: `${ATTRACTION_FULL_NAME} is the waterfront marketplace of ${CITY_NAME}: a regenerated stretch of ${STREET_ADDRESS} beside Beira Lake where 92 stalls sit on and beside the water, making it one of the easiest half-hour stops to combine with a walk through Pettah.`,
  },
  ta: {
    label: `அறிமுகம்`,
    kicker: `About ${ATTRACTION_FULL_NAME}`,
    title: `பெட்டாவின் வணிக ஆற்றல் நீரோரத்தைச் சந்திக்கும் இடம்.`,
    p1: `பேரா ஏரிக்கு அருகிலுள்ள பழைய பாஸ்டியன் மவாதா பகுதி மறுசீரமைக்கப்பட்டு, இச்சந்தை 2014 இல் மக்களுக்குத் திறக்கப்பட்டது. நகர்ப்புற மேம்பாட்டு அதிகாரத்தின் கூற்றுப்படி இங்கு 92 கடைகள் உள்ளன, சில நீர்மீதே அமைந்துள்ளன.`,
    p2: `இதன் தனித்துவம் இந்தக் கலவையே: கைவினைப் பொருட்கள், ஆடைகள், பொதுப்பொருட்கள், பழங்கள் மற்றும் சிறுஉணவுகள் ஒரே நீரோர நடைபாதையில் ஒன்றிணைகின்றன. கடைக்கடையாகச் செல்வதைத் தாண்டி, நீரோரம் நடப்பது, நகரப் புகைப்படங்கள் எடுப்பது, பரபரப்பான பெட்டாவிலிருந்து அமைதியான இடைவேளை எடுப்பதே இன்று முக்கிய ஈர்ப்பாக உள்ளது.`,
    p3: `${ATTRACTION_FULL_NAME} is the waterfront marketplace of ${CITY_NAME}: a regenerated stretch of ${STREET_ADDRESS} beside Beira Lake where 92 stalls sit on and beside the water, making it one of the easiest half-hour stops to combine with a walk through Pettah.`,
  },
  zh: {
    label: `简介`,
    kicker: `About ${ATTRACTION_FULL_NAME}`,
    title: `佩塔的交易活力，遇见水岸。`,
    p1: `沿贝拉湖畔的旧 Bastian Mawatha 路段经过再开发，该市场于 2014 年向公众开放。据城市发展局资料，这里有 92 个摊位，其中一些就架在水面上。`,
    p2: `它的特别之处在于融合：手工艺品、服装、日用杂货、水果和小吃汇聚在同一条水岸木板栈道上。如今，除了购物，最吸引人的便是在水边漫步、拍摄城市照片，并从繁忙的佩塔偷得片刻宁静。`,
    p3: `${ATTRACTION_FULL_NAME} is the waterfront marketplace of ${CITY_NAME}: a regenerated stretch of ${STREET_ADDRESS} beside Beira Lake where 92 stalls sit on and beside the water, making it one of the easiest half-hour stops to combine with a walk through Pettah.`,
  },
};

export const galleryCaptions: L4<string[]> = {
  en: [`Waterfront stalls and boardwalk`, `Red-roofed market stalls`, `Boardwalk stretching across Beira Lake`, `Pettah floating market at sunset`],
  si: [`ජලතීර වෙළඳ කුටි සහ ගමන් මාර්ගය`, `රතු වහල සහිත වෙළඳ කුටි`, `බේරේ වැව හරහා ගමන් මාර්ගය`, `හිරු බැස යන වේලාවේ පිටකොටුව පාවෙන වෙළඳපොළ`],
  ta: [`நீரோரக் கடைகளும் நடைபாதையும்`, `சிவப்பு கூரைக் கடைகள்`, `பேரா ஏரியைக் கடந்து செல்லும் நடைபாதை`, `சூரிய அஸ்தமனத்தில் பெட்டா மிதக்கும் சந்தை`],
  zh: [`水岸摊位与木板栈道`, `红顶市场摊位`, `横越贝拉湖的木板栈道`, `日落时分的佩塔水上市场`],
};

/* ------------------------------ History ------------------------------ */
export const history: L4<{ label: string; kicker: string; title: string; p1: string; p2: string; p3: string; sub: string; legendTitle: string; legendText: string }> = {
  en: {
    label: `History & Significance`,
    kicker: `History & Significance of ${ATTRACTION_FULL_NAME}`,
    title: `The waterfront reborn beside Beira Lake.`,
    p1: `Pettah is one of Colombo's oldest and busiest trading districts. The market opened in 2014 as part of a project to turn disused land and waterways beside Beira Lake back into a public urban space.`,
    p2: `Its significance is not only commercial. It brings Pettah's traditional market culture to a waterfront, gives vendors fixed stalls, and creates a walkable public space in the city centre — all at once.`,
    p3: `Today ${ATTRACTION_FULL_NAME} is both a working market and a public waterfront: visitors come for handicrafts, fruit and short eats, but stay for the boardwalk, the reflections on Beira Lake, and the contrast with the busy streets of Pettah just behind it.`,
    sub: `The story of Beira Lake`,
    legendTitle: `A note worth knowing`,
    legendText: `A local saying among Pettah traders holds that in the evening the noise of the city softens in the reflection of Beira Lake — a rest taken after the commercial bustle. (This is a regional folktale, not an official or historical document.)`,
  },
  si: {
    label: `ඉතිහාසය සහ වැදගත්කම`,
    kicker: `History & Significance of ${ATTRACTION_FULL_NAME}`,
    title: `බේරේ වැව අසල නැවත ජීවය ලැබූ වෙළඳ ප්‍රදේශය.`,
    p1: `පිටකොටුව යනු කොළඹේ පැරණිතම සහ වඩාත් ජවසම්පන්න වෙළඳ ප්‍රදේශයකි. බේරේ වැව අසල පැවති අක්‍රිය ඉඩම් සහ ජල මාර්ග නැවත නගර අවකාශයක් ලෙස සංවර්ධනය කිරීමේ ව්‍යාපෘතියක් ලෙස මෙම වෙළඳපොළ 2014දී ජනතාවට විවෘත විය.`,
    p2: `මෙහි වැදගත්කම ඇත්තේ වෙළඳාමට පමණක් නොවේ. පිටකොටුවේ සම්ප්‍රදායික වෙළඳ සංස්කෘතිය ජලතීර අවකාශයකට ගෙන ඒම, වීදි වෙළඳුන්ට ස්ථිර කුටි ලබා දීම සහ නගර මධ්‍යයේ ඇවිදීමට සුදුසු පොදු අවකාශයක් නිර්මාණය කිරීම යන අරමුණ් එකවර ඉටු කරයි.`,
    p3: `අද ${ATTRACTION_FULL_NAME} යනු වෙළඳාමක් සහ ජලතීර ජනතා ඉඩක් දෙකමයි. අත්කම්, පලතුරු සහ කුඩා ආහාර සඳහා පැමිණෙන අතර, ජලතීරය, බේරේ වැවේ ප්‍රතිබිම්බ සහ පිටකොටුවේ කාර්යබහුල වීදි වලට වඩා වෙනස්කමින් එහි රැඳී සිටිති.`,
    sub: `බේරේ වැවේ කථාව`,
    legendTitle: `සිහිපත් කථාවක්`,
    legendText: `පිටකොටුවේ වෙළඳුන් අතර පැවතෙන ජනප්‍රවාදයක් නම් සවස් කාලයේ බේරේ වැවේ ජලයේ පරාවර්තනය තුළ නගරයේ හඬ මෘදු වී යන බවයි — එය වාණිජ කොලාහලයෙන් පස්සේ ලැබෙන විවේකයක් ලෙස සලකනු ලැබේ. (මෙය ප්‍රාදේශීය ජන කථාවක් පමණි; නිල හෝ ඓතිහාසික ලේඛනයක් නොවේ.)`,
  },
  ta: {
    label: `வரலாறும் முக்கியத்துவமும்`,
    kicker: `History & Significance of ${ATTRACTION_FULL_NAME}`,
    title: `பேரா ஏரிக்கு அருகே மீண்டும் பிறந்த நீரோரம்.`,
    p1: `பெட்டா கொழும்பின் பழமையான மற்றும் பரபரப்பான வணிக மாவட்டங்களில் ஒன்று. பேரா ஏரியோரத்தில் உபயோகமற்ற நிலம் மற்றும் நீர்வழிகளை மீண்டும் பொதுமக்கள் நகர்ப்புற இடமாக மாற்றும் திட்டத்தின் ஒரு பகுதியாக இச்சந்தை 2014 இல் திறக்கப்பட்டது.`,
    p2: `இதன் முக்கியத்துவம் வணிகம் மட்டுமல்ல. பெட்டாவின் பாரம்பரியச் சந்தைப் பண்பாட்டை நீரோரத்திற்குக் கொண்டுவருதல், விற்பனையாளர்களுக்கு நிலையான கடைகளை வழங்குதல், நடக்கக்கூடிய பொதுவெளியை உருவாக்குதல் ஆகியவற்றை ஒருசேரச் செய்கிறது.`,
    p3: `இன்று ${ATTRACTION_FULL_NAME} என்பது ஒரு செயல்படும் சந்தையும் பொது நீரோரமும் ஆகும்: கைவினைப் பொருட்கள், பழங்கள் மற்றும் சிறுஉணவுகளுக்காக மக்கள் வருகிறார்கள், ஆனால் நடைபாதை, பேரா ஏரியின் பிம்பங்கள் மற்றும் அதன் பின்னால் உள்ள பரபரப்பான பெட்டா தெருக்களுக்கு மாறான தன்மைக்காகவே தங்குகிறார்கள்.`,
    sub: `பேரா ஏரியின் கதை`,
    legendTitle: `தெரிந்துகொள்ள வேண்டிய குறிப்பு`,
    legendText: `பெட்டா வணிகர்களிடையே உள்ள ஒரு உள்ளூர் சொல்லாடல்: மாலை நேரத்தில் நகரத்தின் சத்தம் பேரா ஏரியின் பிம்பத்தில் மெலிந்துவிடும் — வணிகக் கூட்டத்துக்குப் பின் கிடைக்கும் ஓய்வு அது. (இது உள்ளூர் நாட்டுப்புறக் கதை; அதிகாரப்பூர்வ அல்லது வரலாற்று ஆவணம் அல்ல.)`,
  },
  zh: {
    label: `历史与意义`,
    kicker: `History & Significance of ${ATTRACTION_FULL_NAME}`,
    title: `贝拉湖畔重生的水岸。`,
    p1: `佩塔是科伦坡最古老、最繁忙的商圈之一。该市场于 2014 年开放，是將贝拉湖畔闲置土地与水道重新改造为公共城市空间的项目一部分。`,
    p2: `它的意义不仅在商业。它把佩塔传统的市集文化带到水岸，为商贩提供固定摊位，并在市中心创造出可漫步的公共空间——一举数得。`,
    p3: `如今 ${ATTRACTION_FULL_NAME} 既是一座在营的市场，也是一处公共水岸：游客为手工艺品、水果和小吃而来，却因木板栈道、贝拉湖的倒影，以及与身后繁忙佩塔街巷形成的反差而驻足。`,
    sub: `贝拉湖的故事`,
    legendTitle: `一段值得了解的故事`,
    legendText: `佩塔商贩间流传着一种说法：傍晚时分，城市的喧嚣在贝拉湖的水面倒影中渐渐柔和——那是一天商旅喧嚣后的休憩。（这是一则地方传说，并非官方或历史文献。）`,
  },
};

/* ------------------------------- Visit ------------------------------- */
export const visit: L4<{
  label: string; kicker: string; title: string;
  cards: { title: string; text: string }[];
  hoursLabel: string; hoursValue: string; hoursNote: string; note: string;
}> = {
  en: {
    label: `Plan your visit`,
    kicker: `Plan Your Visit to ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `What to know before you go.`,
    cards: [
      { title: `Tickets / Fees`, text: `General entry is free. You only pay for the food, drinks and goods you buy.` },
      { title: `Best time`, text: `Mornings are calmest for a stroll. Late afternoon gives the best light and water reflections for photos.` },
      { title: `Suggested time`, text: `30–60 minutes is enough. Add Pettah Market and the red mosque and you have a half-day.` },
      { title: `Parking`, text: `The project provides visitor and trader parking. It fills up at peak times, so public transport is often easier.` },
    ],
    hoursLabel: `Opening hours`,
    hoursValue: `Mon–Sat · 08:00–22:30`,
    hoursNote: `Listings currently show Sunday closed. Hours can change — confirm by phone or Google Maps before you come.`,
    note: `Opening hours and service levels can change because of public holidays, maintenance, stall activity and special events. Call +94 11 287 3640 or check Google Maps before visiting.`,
  },
  si: {
    label: `සංචාරය සැලසුම් කරන්න`,
    kicker: `Plan Your Visit to ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `වෙළඳපොළට යාමට පෙර දැනගත යුතු දේ.`,
    cards: [
      { title: `ටිකට් / ගාස්තු`, text: `සාමාන්‍ය ප්‍රවේශය නොමිලේ. මිලදී ගන්නා ආහාර, බීම සහ භාණ්ඩ සඳහා පමණක් ගෙවීම අවශ්‍ය වේ.` },
      { title: `හොඳම වේලාව`, text: `නිස්කලංකව ඇවිදීමට උදෑසන. ඡායාරූප, මෘදු ආලෝකය සහ ජලයේ ප්‍රතිබිම්බ සඳහා සවස අවසාන පැය.` },
      { title: `යෝජිත කාලය`, text: `මිනිත්තු 30–60ක් ප්‍රමාණවත්. පිටකොටුව වෙළඳපොළ සහ රතු පල්ලියද එක් කළහොත් අර්ධ දිනක් වෙන් කළ හැක.` },
      { title: `රථ ගාල්`, text: `ව්‍යාපෘති පරිසරයේ පාරිභෝගික රථ ගාල් ඇත. කාර්යබහුල වේලාවල ඉඩකඩ සීඝ්‍රයෙන් පිරී යයි; දුම්රිය හෝ බස් වඩා පහසුය.` },
    ],
    hoursLabel: `විවෘත වේලාව`,
    hoursValue: `සඳු–සෙන · 08:00–22:30`,
    hoursNote: `වත්මන් ලැයිස්තුගත කිරීම් අනුව ඉරිදා වසා ඇත. වේලාවන් වෙනස් විය හැක.`,
    note: `රජයේ නිවාඩු, නඩත්තු, වෙළඳ කුටි ක්‍රියාකාරිත්වය සහ විශේෂ අවස්ථා නිසා සැබෑ වේලාවන් වෙනස් විය හැක. පැමිණීමට පෙර දුරකථනයෙන් +94 11 287 3640 හෝ Google Maps හරහා තහවුරු කරන්න.`,
  },
  ta: {
    label: `உங்கள் பயணத்தைத் திட்டமிடுங்கள்`,
    kicker: `Plan Your Visit to ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `செல்வதற்கு முன் தெரிந்துகொள்ள வேண்டியவை.`,
    cards: [
      { title: `டிக்கெட் / கட்டணம்`, text: `பொது நுழைவு இலவசம். நீங்கள் வாங்கும் உணவு, பானம் மற்றும் பொருட்களுக்கு மட்டுமே பணம் செலுத்த வேண்டும்.` },
      { title: `சிறந்த நேரம்`, text: `காலை நேரங்கள் நடைபயிற்சிக்கு அமைதியானவை. மாலைப் பொழுது புகைப்படங்களுக்குச் சிறந்த ஒளியையும் நீர்ப் பிம்பத்தையும் தரும்.` },
      { title: `பரிந்துரைக்கப்பட்ட நேரம்`, text: `30–60 நிமிடங்கள் போதுமானது. பெட்டா சந்தை மற்றும் சிவப்புப் பள்ளியையும் சேர்த்தால் அரைநாள் ஆகும்.` },
      { title: `வாகன நிறுத்தம்`, text: `திட்டம் பார்வையாளர் மற்றும் வியாபாரி வாகன நிறுத்தத்தை வழங்குகிறது. உச்ச நேரங்களில் நிரம்பிவிடும், எனவே பொது போக்குவரத்தே எளிதானது.` },
    ],
    hoursLabel: `திறக்கும் நேரம்`,
    hoursValue: `திங்–சனி · 08:00–22:30`,
    hoursNote: `தற்போதைய பட்டியலின்படி ஞாயிறு மூடப்பட்டுள்ளது. நேரங்கள் மாறலாம் — வருவதற்கு முன் தொலைபேசி அல்லது Google Maps மூலம் உறுதிப்படுத்தவும்.`,
    note: `பொது விடுமுறைகள், பராமரிப்பு, கடைச் செயல்பாடு மற்றும் சிறப்பு நிகழ்வுகளால் திறப்பு நேரங்களும் சேவைகளும் மாறலாம். வருவதற்கு முன் +94 11 287 3640 என்று அழைத்தோ Google Maps இல் பார்த்தோ உறுதிப்படுத்தவும்.`,
  },
  zh: {
    label: `规划你的行程`,
    kicker: `Plan Your Visit to ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `出发前要知道的事。`,
    cards: [
      { title: `门票 / 费用`, text: `一般入场免费。只需为你购买的餐饮和商品付费。` },
      { title: `最佳时间`, text: `清晨漫步最清净。傍晚光线柔和、水面倒影最美，适合拍照。` },
      { title: `建议时长`, text: `30–60 分钟足够。加上佩塔市场和红色清真寺，可凑成半天。` },
      { title: `停车`, text: `项目设有游客与商贩停车场。高峰时段很快满位，公共交通往往更方便。` },
    ],
    hoursLabel: `开放时间`,
    hoursValue: `周一–周六 · 08:00–22:30`,
    hoursNote: `当前列表显示周日闭市。时间可能变动——出发前请电话或 Google 地图确认。`,
    note: `因公共假日、维护、摊位营业情况和特别活动，开放时间与服务可能变动。到访前请致电 +94 11 287 3640 或查看 Google 地图确认。`,
  },
};

/* ----------------------------- Directions ---------------------------- */
export const directions: L4<{ label: string; kicker: string; title: string; articles: { title: string; text: string }[] }> = {
  en: {
    label: `Directions`,
    kicker: `Location & How to Visit ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `Easy via Fort and Pettah.`,
    articles: [
      { title: `By train`, text: `From Colombo Fort railway station head towards Pettah / Bastian Mawatha. The station is the main public-transport gateway close to the market.` },
      { title: `By bus`, text: `Use the routes serving Pettah's central bus terminal and the Bastian Mawatha area. A short city walk follows from the stop to the market.` },
      { title: `Tuk-tuk / taxi`, text: `Set the destination as "Pettah Floating Market, W E Bastian Mawatha". Allow extra time for Pettah traffic at busy hours.` },
    ],
  },
  si: {
    label: `විස්තරාත්මක ගමනාගමනය`,
    kicker: `Location & How to Visit ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `Fort සහ Pettah හරහා පහසුවෙන්.`,
    articles: [
      { title: `දුම්රියෙන්`, text: `Colombo Fort දුම්රිය ස්ථානයෙන් Pettah / Bastian Mawatha දිශාවට පැමිණිය හැක. ස්ථානය වෙළඳපොළට ආසන්නතම ප්‍රධාන පොදු ප්‍රවාහන පිවිසුමකි.` },
      { title: `බස් රථයෙන්`, text: `Pettah හි මධ්‍යම බස් පර්යන්ත සහ Bastian Mawatha ප්‍රදේශයට සේවා කරන මාර්ග භාවිතා කරන්න. බැසීමෙන් පසු වෙළඳපොළ දක්වා කෙටි නගර ඇවිදීමක් ඇත.` },
      { title: `ටුක්-ටුක් / ටැක්සි`, text: `ගමනාන්තය "Pettah Floating Market, W E Bastian Mawatha" ලෙස දෙන්න. කාර්යබහුල වේලාවල Pettah මාර්ග තදබදය සැලකිල්ලට ගන්න.` },
    ],
  },
  ta: {
    label: `வழிகாட்டுதல்`,
    kicker: `Location & How to Visit ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `போர்ட் மற்றும் பெட்டா வழியாக எளிது.`,
    articles: [
      { title: `ரயில் மூலம்`, text: `கொழும்பு போர்ட் ரயில் நிலையத்திலிருந்து பெட்டா / பாஸ்டியன் மவாதா நோக்கி செல்லவும். நிலையம் சந்தைக்கு அருகிலுள்ள முக்கியப் பொது போக்குவரத்து நுழைவாயில்.` },
      { title: `பேருந்து மூலம்`, text: `பெட்டாவின் மையப் பேருந்து நிலையத்துக்கும் பாஸ்டியன் மவாதா பகுதிக்கும் சேவை செய்யும் வழித்தடங்களைப் பயன்படுத்தவும். நிறுத்தத்திலிருந்து சந்தைக்கு சிறு நடைபயிற்சி உண்டு.` },
      { title: `ஆட்டோ / டேக்சி`, text: `சேரிடத்தை "Pettah Floating Market, W E Bastian Mawatha" என்று கொடுங்கள். பரபரப்பான நேரங்களில் பெட்டா போக்குவரத்துக்குக் கூடுதல் நேரம் ஒதுக்கவும்.` },
    ],
  },
  zh: {
    label: `路线指引`,
    kicker: `Location & How to Visit ${ATTRACTION_SHORT_NAME} in ${CITY_NAME}`,
    title: `经 Fort 与佩塔，轻松抵达。`,
    articles: [
      { title: `火车`, text: `从科伦坡堡（Colombo Fort）火车站前往佩塔 / Bastian Mawatha 方向。该站是距离市场最近的主要公共交通枢纽。` },
      { title: `公交`, text: `搭乘开往佩塔中央公交总站及 Bastian Mawatha 一带的线路。下车后步行一小段即可到达市场。` },
      { title: `突突车 / 出租车`, text: `将目的地设为“Pettah Floating Market, W E Bastian Mawatha”。繁忙时段佩塔交通拥堵，请预留时间。` },
    ],
  },
};

/* ---------------------------- Getting here --------------------------- */
export const gettingHere: L4<{ label: string; kicker: string; title: string; articles: { title: string; text: string; list: string[] }[] }> = {
  en: {
    label: `Getting here`,
    kicker: `How to Get to ${ATTRACTION_FULL_NAME}`,
    title: `From the airport, by train and by road.`,
    articles: [
      {
        title: `From the airport (Bandaranaike Intl · CMB)`,
        text: `About 28–32 km from Katunayake airport. Take a ride-hailing service from the airport, a metered taxi, or connect to a train/bus into the city. With traffic, allow 45 minutes to 1.5 hours.`,
        list: [
          `From the airport take a ride service or train/bus towards the city centre (Colombo Fort).`,
          `From Fort station a short walk or tuk-tuk towards Pettah / Bastian Mawatha.`,
          `Set the destination as "Pettah Floating Market, W E Bastian Mawatha, Colombo 01000".`,
        ],
      },
      {
        title: `By train & bus`,
        text: `Colombo Fort station is the closest major public-transport hub to the market. From the Pettah central bus terminal it is about a 10–15 minute walk to Bastian Mawatha. Both options are the most economical and eco-friendly.`,
        list: [
          `Train: Fort station → 5–10 min walk.`,
          `Bus: Pettah terminal → 10–15 min.`,
          `Both are low-cost and environmentally friendly.`,
        ],
      },
      {
        title: `Tuk-tuk / taxi`,
        text: `From anywhere in the city or your hotel, use a tuk-tuk or ride service. Give the exact destination: "Pettah Floating Market, W E Bastian Mawatha, Colombo 01000". Allow for Pettah congestion at busy hours.`,
        list: [],
      },
      {
        title: `By car (private)`,
        text: `The project provides parking beside Beira Lake. Spaces fill quickly on busy weekends and holidays. Confirm chilled/AC bays before you come if that matters to you.`,
        list: [],
      },
    ],
  },
  si: {
    label: `සවිස්තරාත්මක ගමනාගමන මාර්ගෝපදේශය`,
    kicker: `How to Get to ${ATTRACTION_FULL_NAME}`,
    title: `ගුවන්තොටුපළෙන්, දුම්රියෙන් සහ රථවලින් පැමිණීම.`,
    articles: [
      {
        title: `ගුවන්තොටුපළෙන් (Bandaranaike Intl · CMB)`,
        text: `කටුනායක ගුවන්තොටුපළේ සිට කිලෝමීටර් 28–32ක් පමණ දුරින්. ගුවන්තොටුපළේ ලබාදෙන රයිඩ් සේවාව, මීටර් කරන රථ හෝ නගරයට යන දුම්රිය/බස් සම්බන්ධ කිරීම භාවිතා කරන්න. මාර්ග තදබදය අනුව වේලාව මිනිත්තු 45ක් සිට පැය 1.5ක් දක්වා විය හැක.`,
        list: [
          `ගුවන්තොටුපළින් නගර මධ්‍යය (Colombo Fort) දක්වා රයිඩ් සේවාවක් හෝ දුම්රිය ගන්න.`,
          `Fort දුම්රිය ස්ථානයෙන් Pettah / Bastian Mawatha දිශාවට කෙටි ඇවිදීමක් හෝ ටුක්-ටුක් යන්න.`,
          `ගමනාන්තය "Pettah Floating Market, W E Bastian Mawatha, Colombo 01000" ලෙස දෙන්න.`,
        ],
      },
      {
        title: `දුම්රිය සහ බස් මගින්`,
        text: `Colombo Fort දුම්රිය ස්ථානය වෙළඳපොළට ආසන්නතම ප්‍රධාන පොදු ප්‍රවාහන මධ්‍යස්ථානයයි. Pettah මධ්‍යම බස් පර්යන්තයේ සිට Bastian Mawatha දක්වා කාලය මිනිත්තු 10–15ක් පමණි. මෙම ක්‍රම දෙකම වඩාත් ආර්ථික හා පරිසර හිතකාමී විකල්ප වේ.`,
        list: [
          `දුම්රිය: Fort ස්ථානය → කාලය මිනිත්තු 5–10ක් ඇවිදීම.`,
          `බස්: Pettah පර්යන්තය → කාලය මිනිත්තු 10–15ක්.`,
          `මෙම ක්‍රම දෙකම ආර්ථික හා පරිසර හිතකාමී.`,
        ],
      },
      {
        title: `ටුක්-ටුක් / ටැක්සි`,
        text: `නගරය තුළින් හෝ ඔබේ නවාතැනින් පැමිණීමට ටුක්-ටුක් හෝ රථ රයිඩ් සේවාව භාවිතා කරන්න. ගමනාන්තය නිශ්චිතව දෙන්න: "Pettah Floating Market, W E Bastian Mawatha, Colombo 01000". කාර්යබහුල වේලාවල Pettah මාර්ග තදබදය සැලකිල්ලට ගන්න.`,
        list: [],
      },
      {
        title: `රථයෙන් (පෞද්ගලික)`,
        text: `බේරේ වැව අසල ව්‍යාපෘති රථ ගාල් පහසුකම් සලසා ඇත. කාර්යබහුල සෙනසුරාදා හා නිවාඩු දිනවල ඉඩකඩ සීඝ්‍රයෙන් පිරී යයි. සීත්කරණ රථ සඳහා සෘජු පහසුකම් ඇති බව පැමිණීමට පෙර තහවුරු කරගන්න.`,
        list: [],
      },
    ],
  },
  ta: {
    label: `சவிஸ்தாரமான பயண வழிகாட்டி`,
    kicker: `How to Get to ${ATTRACTION_FULL_NAME}`,
    title: `விமான நிலையத்திலிருந்து, ரயிலில் மற்றும் சாலை வழியாக.`,
    articles: [
      {
        title: `விமான நிலையத்திலிருந்து (Bandaranaike Intl · CMB)`,
        text: `கடுநாயக்கை விமான நிலையத்திலிருந்து சுமார் 28–32 கிமீ தூரம். விமான நிலையத்தின் ரைட்-ஹெய்லிங் சேவை, மீட்டர் டாக்ஸி அல்லது நகரத்திற்குச் செல்லும் ரயில்/பேருந்து ஆகியவற்றைப் பயன்படுத்தவும். போக்குவரத்தைப் பொறுத்து 45 நிமிடங்கள் முதல் 1.5 மணி நேரம் வரை ஆகலாம்.`,
        list: [
          `விமான நிலையத்திலிருந்து நகர மையம் (கொழும்பு போர்ட்) நோக்கி ரைட் சேவை அல்லது ரயில் எடுங்கள்.`,
          `போர்ட் நிலையத்திலிருந்து பெட்டா / பாஸ்டியன் மவாதா நோக்கி சிறு நடைபயிற்சி அல்லது ஆட்டோ.`,
          `சேரிடத்தை "Pettah Floating Market, W E Bastian Mawatha, Colombo 01000" என்று கொடுங்கள்.`,
        ],
      },
      {
        title: `ரயில் & பேருந்து மூலம்`,
        text: `கொழும்பு போர்ட் நிலையம் சந்தைக்கு மிக அருகிலுள்ள முக்கியப் பொது போக்குவரத்து மையம். பெட்டா மையப் பேருந்து நிலையத்திலிருந்து பாஸ்டியன் மவாதா வரை சுமார் 10–15 நிமிட நடைபயிற்சி. இரண்டும் மிகவும் சிக்கனமான, சுற்றுச்சூழலுக்கு உகந்த வழிகள்.`,
        list: [
          `ரயில்: போர்ட் நிலையம் → 5–10 நிமிட நடைபயிற்சி.`,
          `பேருந்து: பெட்டா நிலையம் → 10–15 நிமிடங்கள்.`,
          `இரண்டும் குறைந்த செலவு, சுற்றுச்சூழல் நட்பு.`,
        ],
      },
      {
        title: `ஆட்டோ / டேக்சி`,
        text: `நகரத்தின் எங்கிருந்தோ உங்கள் உடலியல் இருப்பிடத்திலிருந்தோ ஆட்டோ அல்லது ரைட் சேவையைப் பயன்படுத்தவும். சரியான சேரிடத்தைக் கொடுங்கள்: "Pettah Floating Market, W E Bastian Mawatha, Colombo 01000". பரபரப்பான நேரங்களில் பெட்டா போக்குவரத்துக்கு முன்கூட்டியே திட்டமிடுங்கள்.`,
        list: [],
      },
      {
        title: `கார் மூலம் (தனியார்)`,
        text: `பேரா ஏரிக்கு அருகில் திட்டம் வாகன நிறுத்தத்தை வழங்குகிறது. பரபரப்பான வாரஇறுதிகளிலும் விடுமுறை நாட்களிலும் இடம் விரைவில் நிரம்பும். உங்களுக்குத் தேவைப்பட்டால் குளிரூட்டிய இடத்தை முன்பே உறுதிப்படுத்தவும்.`,
        list: [],
      },
    ],
  },
  zh: {
    label: `详细交通指引`,
    kicker: `How to Get to ${ATTRACTION_FULL_NAME}`,
    title: `从机场、乘火车或自驾抵达。`,
    articles: [
      {
        title: `从机场（班达拉奈克国际机场 · CMB）`,
        text: `距卡图纳亚克机场约 28–32 公里。可在机场使用网约车、打表出租车，或换乘火车/公交进入市区。视交通情况，需 45 分钟至 1.5 小时。`,
        list: [
          `从机场乘坐网约车或火车前往市中心（科伦坡堡 Colombo Fort）。`,
          `从 Fort 站步行一小段或乘突突车前往佩塔 / Bastian Mawatha。`,
          `将目的地设为“Pettah Floating Market, W E Bastian Mawatha, Colombo 01000”。`,
        ],
      },
      {
        title: `火车与公交`,
        text: `科伦坡堡站是距离市场最近的主要公共交通枢纽。从佩塔中央公交总站步行至 Bastian Mawatha 约 10–15 分钟。两种都最经济、最环保。`,
        list: [
          `火车：Fort 站 → 步行 5–10 分钟。`,
          `公交：佩塔总站 → 10–15 分钟。`,
          `两者均低花费、环境友好。`,
        ],
      },
      {
        title: `突突车 / 出租车`,
        text: `从市区任何地点或酒店出发，可乘突突车或网约车。请明确目的地：“Pettah Floating Market, W E Bastian Mawatha, Colombo 01000”。繁忙时段佩塔易堵车，请预留时间。`,
        list: [],
      },
      {
        title: `自驾（私家车）`,
        text: `项目在贝拉湖畔设有停车场。繁忙的周末和假日车位很快满。若在意空调车位，请提前确认。`,
        list: [],
      },
    ],
  },
};

/* -------------------------------- Food ------------------------------- */
export const food: L4<{ label: string; title: string; cards: { kicker: string; title: string; text: string }[]; note: string }> = {
  en: {
    label: `Food nearby`,
    title: `A quick bite inside the market, local flavour in Pettah.`,
    cards: [
      { kicker: `Inside the market`, title: `Food Court`, text: `The easiest choice for a break between browsing, short eats, cold drinks and a stroll. Not every stall is open at all times.` },
      { kicker: `Near Fort`, title: `Oldfort Cafe`, text: `A light cafe option for Sri Lankan and international food in the city centre.` },
      { kicker: `Local food`, title: `Matara Gedara`, text: `A simple option around Pettah / Fort for rice, curry and local flavours.` },
    ],
    note: `Opening hours and service at food spots can change — check current details before you go.`,
  },
  si: {
    label: `අසල ආහාර`,
    title: `වෙළඳපොළ ඇතුළත කෙටි කෑමකින්, පිටකොටුවේ දේශීය රසයට.`,
    cards: [
      { kicker: `වෙළඳපොළ ඇතුළත`, title: `Food Court`, text: `කෙටි කෑම, සිසිල් බීම සහ ඇවිදීම අතර විවේකයක් සඳහා පහසුම තේරීම. සියලු කුටි සෑම වේලාවකම විවෘත නොවිය හැක.` },
      { kicker: `Fort අසල`, title: `Oldfort Cafe`, text: `ශ්‍රී ලාංකික සහ ජාත්‍යන්තර කෑම සඳහා නගර මධ්‍යයේ සැහැල්ලු කැෆේ විකල්පයක්.` },
      { kicker: `දේශීය කෑම`, title: `Matara Gedara`, text: `බත්, කරි සහ දේශීය රසවලට කැමති අයට Pettah / Fort ප්‍රදේශයේ සරල විකල්පයක්.` },
    ],
    note: `ආහාර ස්ථානවල වේලාවන් සහ සේවා වෙනස් විය හැක. යාමට පෙර වත්මන් තොරතුරු පරීක්ෂා කරන්න.`,
  },
  ta: {
    label: `அருகிலுள்ள உணவு`,
    title: `சந்தைக்குள் ஒரு சிறுஉணவு, பெட்டாவில் உள்ளூர் சுவை.`,
    cards: [
      { kicker: `சந்தைக்குள்`, title: `உணவு மையம்`, text: `உலாவுவதற்கிடையே ஓய்வெடுக்க, சிறுஉணவுகள், குளிர்பானங்கள் மற்றும் நடைபயிற்சிக்கு எளிதான தேர்வு. எல்லாக் கடைகளும் எப்போதும் திறந்திருக்காது.` },
      { kicker: `போர்ட் அருகில்`, title: `Oldfort Cafe`, text: `நகர மையத்தில் இலங்கை மற்றும் சர்வதேச உணவுகளுக்கான இலேசான கஃபே விருப்பம்.` },
      { kicker: `உள்ளூர் உணவு`, title: `Matara Gedara`, text: `சோறு, கறி மற்றும் உள்ளூர் சுவைகளுக்குப் பெட்டா / போர்ட் பகுதியில் எளிய விருப்பம்.` },
    ],
    note: `உணவகங்களின் நேரங்களும் சேவையும் மாறலாம் — செல்வதற்கு முன் தற்போதைய விவரங்களைப் பார்க்கவும்.`,
  },
  zh: {
    label: `周边美食`,
    title: `市场内小食，佩塔本地风味。`,
    cards: [
      { kicker: `市场内`, title: `美食广场`, text: `边逛边歇、吃小食、喝冷饮、散散步最方便的选择。并非所有摊位都全天营业。` },
      { kicker: `Fort 附近`, title: `Oldfort Cafe`, text: `市中心提供斯里兰卡与国际轻食的咖啡馆选择。` },
      { kicker: `本地餐`, title: `Matara Gedara`, text: `佩塔 / Fort 一带吃米饭咖喱与本地风味的简易去处。` },
    ],
    note: `餐饮店的营业时间与服务可能变动——出发前请查看最新信息。`,
  },
};

/* ------------------------------- Nearby ------------------------------ */
export const nearby: L4<{ label: string; kicker: string; title: string; intro: string; cards: { title: string; text: string }[] }> = {
  en: {
    label: `Nearby landmarks`,
    kicker: `Landmarks & Attractions Around ${ATTRACTION_SHORT_NAME}`,
    title: `Add them to the same city walk.`,
    intro: `When visiting ${ATTRACTION_FULL_NAME}, visitors can easily explore surrounding historical landmarks and points of interest, including ${NEARBY_LANDMARK_1} and ${NEARBY_LANDMARK_2}.`,
    cards: [
      { title: `Pettah Market`, text: `Colombo's busiest street-market experience, right next door.` },
      { title: `Khan Clock Tower`, text: `A recognisable historic city marker at the Pettah entrance.` },
      { title: `Jami Ul-Alfar Mosque`, text: `One of Colombo's most photographed buildings, famous for its red-and-white facade.` },
      { title: `Colombo Lotus Tower`, text: `A modern tall landmark near Beira Lake for city views.` },
    ],
  },
  si: {
    label: `අසල්වැසි ස්ථාන`,
    kicker: `Landmarks & Attractions Around ${ATTRACTION_SHORT_NAME}`,
    title: `එකම නගර ගමනක එකතු කරගන්න.`,
    intro: `${ATTRACTION_FULL_NAME} වෙත පැමිණෙන විට, නවාතැනේ ඓතිහාසික ස්ථාන සහ ආකර්ෂණීය ස්ථාන, විශේෂයෙන් ${NEARBY_LANDMARK_1} සහ ${NEARBY_LANDMARK_2} පරීක්ෂා කිරීමට පහසු වේ.`,
    cards: [
      { title: `Pettah Market`, text: `කොළඹේ වඩාත් ජවසම්පන්න වෙළඳ වීදි අත්දැකීමට.` },
      { title: `Khan Clock Tower`, text: `Pettah ප්‍රවේශයේ හඳුනාගත හැකි ඓතිහාසික නගර සලකුණක්.` },
      { title: `Jami Ul-Alfar Mosque`, text: `රතු-සුදු මුහුණත නිසා කොළඹේ වඩාත් ප්‍රසිද්ධ ගොඩනැගිලිවලින් එකක්.` },
      { title: `Colombo Lotus Tower`, text: `නගර දසුන් සඳහා බේරේ වැව අසල නවීන උසස් සලකුණක්.` },
    ],
  },
  ta: {
    label: `அருகிலுள்ள இடங்கள்`,
    kicker: `Landmarks & Attractions Around ${ATTRACTION_SHORT_NAME}`,
    title: `அதே நகர நடைப்பயணத்தில் சேர்த்துக் கொள்ளுங்கள்.`,
    intro: `${ATTRACTION_FULL_NAME} வரும் போது, ${NEARBY_LANDMARK_1} மற்றும் ${NEARBY_LANDMARK_2} உட்பட அருகிலுள்ள வரலாற்று அடையாளங்களையும் இடங்களையும் எளிதாக ஆராயலாம்.`,
    cards: [
      { title: `பெட்டா சந்தை`, text: `கொழும்பின் பரபரப்பான தெருச் சந்தை அனுபவம், அருகிலேயே.` },
      { title: `கான் கடிகாரக் கோபுரம்`, text: `பெட்டா நுழைவில் அடையாளம் காணக்கூடிய வரலாற்று நகரச் சின்னம்.` },
      { title: `ஜாமி உல்-அல்ஃபார் மசூதி`, text: `சிவப்பு-வெள்ளை முகப்புக்குப் பெயர் பெற்ற கொழும்பின் அதிகம் புகைப்படமெடுக்கப்பட்ட கட்டிடங்களில் ஒன்று.` },
      { title: `கொழும்பு தாமரைக் கோபுரம்`, text: `நகரக் காட்சிகளுக்குப் பேரா ஏரிக்கு அருகிலுள்ள நவீன உயரமான அடையாளம்.` },
    ],
  },
  zh: {
    label: `周边地标`,
    kicker: `Landmarks & Attractions Around ${ATTRACTION_SHORT_NAME}`,
    title: `把它们加进同一趟城市漫步。`,
    intro: `游览 ${ATTRACTION_FULL_NAME} 时，游客可轻松探索周边的历史地标与景点，包括 ${NEARBY_LANDMARK_1} 和 ${NEARBY_LANDMARK_2}。`,
    cards: [
      { title: `佩塔市场`, text: `就在隔壁，科伦坡最热闹的街市体验。` },
      { title: `汗钟楼`, text: `佩塔入口处辨识度很高的历史城市标志。` },
      { title: `Jami Ul-Alfar 清真寺`, text: `以红白相间的外墙闻名，是科伦坡最多人拍照的建筑之一。` },
      { title: `科伦坡莲花塔`, text: `贝拉湖附近可俯瞰城市景色的现代高塔地标。` },
    ],
  },
};

/* ------------------------------ Services ----------------------------- */
export const services: L4<{ label: string; title: string; intro: string; cards: { icon: string; title: string; text: string }[] }> = {
  en: {
    label: `Facilities & nearby services`,
    title: `What to expect before you come.`,
    intro: `The points below are general guidance about the types of services available — described by category only, as an impartial, factual orientation (no specific shops or providers are named).`,
    cards: [
      { icon: `🚻`, title: `Toilets & hygiene`, text: `Public toilet facilities are provided for visitors and traders. Hours and condition vary, so plan ahead.` },
      { icon: `🅿️`, title: `Parking`, text: `Visitor parking is available on the project premises. It fills quickly at peak times; public transport is often easier.` },
      { icon: `🍛`, title: `Food & drink`, text: `A few small stalls offer short eats, cakes, fruit and cold drinks. Variety and hours can change.` },
      { icon: `🛏️`, title: `Stays`, text: `Fort, Pettah and Colombo 01 have lodging across price bands (budget to mid-range). The closest area to the market is Fort / Pettah.` },
      { icon: `🛒`, title: `Supermarkets & kiosks`, text: `Supermarkets, corner shops and pharmacies around Pettah and the nearby city cover daily needs — easy to pick up essentials before you arrive.` },
      { icon: `🔌`, title: `EV & fuel`, text: `EV charging and public fuel stations exist in Colombo 01. Confirm a charging point if you are on a long drive.` },
    ],
  },
  si: {
    label: `චාරිකා සේවා සහ අසල්වැසි පහසුකම්`,
    title: `පැමිණීමට පෙර දැනගත යුතු පහසුකම්.`,
    intro: `පහත දැක්වෙන්නේ සේවාවන් පිළිබඳ උපදේශී දැනුමකි. විශේෂිත වෙළඳසල් හෝ සේවාවන් නම් කිරීමෙන් තොරව වර්ගය පමණක් දක්වා ඇත.`,
    cards: [
      { icon: `🚻`, title: `ස්නානාගාර සහ සෞඛ්‍ය`, text: `සංචාරක සහ වෙළඳුන් සඳහා පොදු ස්නානාගාර පහසුකම් සලසා ඇත. වේලාවන් හා තත්ත්වය වෙනස් විය හැකි බැවින් පැමිණීමට පෙර සැලසුම් කරගන්න.` },
      { icon: `🅿️`, title: `රථ ගාල්`, text: `ව්‍යාපෘති පරිසරයේ පාරිභෝගික රථ ගාල් පහසුකම් ඇත. කාර්යබහුල වේලාවල ඉඩකඩ සීඝ්‍රයෙන් පිරී යයි; පොදු ප්‍රවාහනය වඩාත් පහසු විකල්පයකි.` },
      { icon: `🍛`, title: `ආහාර සහ බීම`, text: `වෙළඳපොළ ඇතුළත කෙටි ආහාර, කේක්, පලතුරු සහ සිසිල් බීම සඳහා කුඩා කුටි වර්ග කිහිපයක් ඇත. ආහාර වර්ග සහ වේලාවන් වෙනස් විය හැක.` },
      { icon: `🛏️`, title: `නැවතුම්`, text: `Fort, පිටකොටුව සහ කොළඹ 01 ප්‍රදේශවල විවිධ මිල මට්ටම්වල නැවතුම් සහ ගෙස්තලා ඇත. වෙළඳපොළට ආසන්නතම ප්‍රදේශය Fort / Pettah වේ.` },
      { icon: `🛒`, title: `සුපිරි වෙළඳසල සහ කඩේ`, text: `දෛනික අවශ්‍යතා සඳහා පිටකොටුවේ සහ ආසන්න නගර ප්‍රදේශවල සුපිරි වෙළඳසල්, කෙටි කඩේ සහ ඖෂධහල් සලසා ඇත.` },
      { icon: `🔌`, title: `විදුලි රථ සහ ඉන්ධන`, text: `විදුලි රථ සඳහා ආරෝපණ පහසුකම් සහ පොදු ඉන්ධන ස්ථාන කොළඹ 01 ප්‍රදේශයේ ඇත.` },
    ],
  },
  ta: {
    label: `வசதிகள் மற்றும் அருகிலுள்ள சேவைகள்`,
    title: `வருவதற்கு முன் எதிர்பார்ப்புகள்.`,
    intro: `கீழே உள்ளவை கிடைக்கும் சேவை வகைகள் பற்றிய பொதுவான வழிகாட்டல் — குறிப்பிட்ட கடைகள் அல்லது வழங்குநர்கள் பெயரிடாமல், வகை அடிப்படையில் மட்டும் கூறப்பட்டுள்ளன.`,
    cards: [
      { icon: `🚻`, title: `கழிப்பறை & சுகாதாரம்`, text: `பார்வையாளர்கள் மற்றும் வியாபாரிகளுக்குப் பொது கழிப்பறை வசதிகள் உள்ளன. நேரங்களும் நிலையும் மாறலாம், எனவே முன்கூட்டியே திட்டமிடுங்கள்.` },
      { icon: `🅿️`, title: `வாகன நிறுத்தம்`, text: `திட்ட வளாகத்தில் பார்வையாளர் வாகன நிறுத்தம் உள்ளது. உச்ச நேரங்களில் விரைவில் நிரம்பும்; பொது போக்குவரத்தே எளிதானது.` },
      { icon: `🍛`, title: `உணவு & பானம்`, text: `சிறிய கடைகள் சில சிறுஉணவுகள், கேக், பழங்கள் மற்றும் குளிர்பானங்களை வழங்குகின்றன. வகைகளும் நேரங்களும் மாறலாம்.` },
      { icon: `🛏️`, title: `தங்கும் இடம்`, text: `போர்ட், பெட்டா மற்றும் கொழும்பு 01 இல் பல விலைப் பட்டைகளிலும் (பட்ஜெட் முதல் நடுத்தரம் வரை) தங்கும் வசதிகள் உள்ளன. சந்தைக்கு அருகிலுள்ள பகுதி போர்ட் / பெட்டா.` },
      { icon: `🛒`, title: `சூப்பர் மார்க்கெட்கள் & கடைகள்`, text: `பெட்டா மற்றும் அருகிலுள்ள நகர்ப்பகுதிகளில் அன்றாடத் தேவைகளைச் சூப்பர் மார்க்கெட்கள், சிறு கடைகள் மற்றும் மருந்தகங்கள் சேவை செய்கின்றன.` },
      { icon: `🔌`, title: `இவி & எரிபொருள்`, text: `கொழும்பு 01 இல் இவி சார்ஜிங் மற்றும் பொது எரிபொருள் நிலையங்கள் உள்ளன. நீண்ட பயணமானால் சார்ஜிங் இடத்தை உறுதிப்படுத்தவும்.` },
    ],
  },
  zh: {
    label: `设施与周边服务`,
    title: `出发前可预期的安排。`,
    intro: `以下仅按类别概述可获得的设施类型，作为中立、客观的导引（不点名任何具体店铺或商家）。`,
    cards: [
      { icon: `🚻`, title: `卫生间与清洁`, text: `为游客与商贩提供公共厕所设施。开放时间与状况可能变动，请提前规划。` },
      { icon: `🅿️`, title: `停车`, text: `项目场地内设有游客停车场。高峰时段很快满位；公共交通往往更方便。` },
      { icon: `🍛`, title: `餐饮`, text: `市场内有少量小摊位提供小吃、蛋糕、水果与冷饮。种类和时间可能变动。` },
      { icon: `🛏️`, title: `住宿`, text: `Fort、佩塔与科伦坡 01 有不同价位的住宿（经济到中档）。离市场最近的是 Fort / 佩塔。` },
      { icon: `🛒`, title: `超市与便利店`, text: `佩塔及周边城区有超市、便利店和药店，满足日常所需，到访前补给很方便。` },
      { icon: `🔌`, title: `电动车与加油`, text: `科伦坡 01 有电动车充电站与公共加油站。长途驾驶请确认充电点。` },
    ],
  },
};

/* ------------------------------ Seasons ------------------------------ */
export const seasons: L4<{ label: string; title: string; intro: string; rows: { period: string; weather: string; advice: string }[]; note: string }> = {
  en: {
    label: `Seasonal strategy`,
    kicker: `Seasonal travel strategy`,
    title: `Pick the best time from Colombo's long-term climate.`,
    intro: `Because Colombo sits in a dry-zone fringe, the market can be visited year-round. The monthly plan below is based on the long-term climate pattern.`,
    rows: [
      { period: `January – March`, weather: `Less rain, average temperatures, calm winds`, advice: `The best window of the year. Good for day visits and photos.` },
      { period: `April – September`, weather: `Hotter, some rain and cooling`, advice: `Prefer late afternoon (around 4–6 pm); bring water and sun protection.` },
      { period: `October – December`, weather: `More rain, cooler and humid`, advice: `Build in a rain plan; an umbrella and rain gear may be needed.` },
    ],
    note: `Colombo's rain pattern is tied to monsoon winds, but being a dry-zone fringe it is often limited to short showers. For the live condition, see the weather module above.`,
  },
  si: {
    label: `මාස අනුව සංචාර උපායමාර්ගය`,
    kicker: `Seasonal travel strategy`,
    title: `කොළඹේ දීර්ඝකාලීන කාලගුණ දත්ත අනුව හොඳම වේලාව තෝරාගැනීම.`,
    intro: `කොළඹ නිරාවරණ කලාපයක පිහිටි නිසා වසර පුරාම සංචාරය කළ හැක. පහත ලේඛනගත කර ඇත්තේ දීර්ඝකාලීන කාලගුණ පැතිකඩ මත පදනම්ව මාසික උපායමාර්ගයකි.`,
    rows: [
      { period: `ජනවාරි – මාර්තු`, weather: `වැසි අඩු, උෂ්ණත්වය සාමාන්‍ය, සුළං සන්සුන්`, advice: `වසරේ හොඳම කාලය. දවස්ගත පැමිණීම සහ ඡායාරූප සඳහා යෝග්‍ය.` },
      { period: `අප්‍රේල් – සැප්තැම්බර්`, weather: `උණුසුම වැඩි, සමහර වැසි සහ සීත්කරණය`, advice: `සවස් වේලාව (4–6 පමණ) තේරෙන්න; ජලය සහ සීත්කරණ බීම රැගෙන යන්න.` },
      { period: `ඔක්තෝබර් – දෙසැම්බර්`, weather: `වැසි වැඩි, සීතල සහ තෙතමනය`, advice: `වැසි කලාවක් සැලසුම්වල ඇතුළත් කරන්න; කත්තරය සහ වැසි ආරක්ෂක අවශ්‍ය විය හැක.` },
    ],
    note: `කොළඹේ වැසි රටාව මොනසූන් සුළං හා සම්බන්ධ වුවද, නිරාවරණ ප්‍රදේශයක් වීමෙන් බොහෝ විට වැසි කෙටි කාලයකින් සීමා වේ. නිශ්චිත තත්ත්වය සඳහා ඉහත කාලගුණ මොඩියුලය බලන්න.`,
  },
  ta: {
    label: `பருவகால உத்தி`,
    kicker: `Seasonal travel strategy`,
    title: `கொழும்பின் நீண்டகால காலநிலையிலிருந்து சிறந்த நேரத்தைத் தேர்ந்தெடுங்கள்.`,
    intro: `கொழும்பு வறண்ட பகுதியின் ஓரத்தில் அமைந்திருப்பதால், ஆண்டு முழுவதும் சந்தையைப் பார்வையிடலாம். கீழே உள்ள மாதத் திட்டம் நீண்டகால காலநிலை வடிவத்தை அடிப்படையாகக் கொண்டது.`,
    rows: [
      { period: `சனவரி – மார்ச்`, weather: `மழை குறைவு, சராசரி வெப்பநிலை, அமைதியான காற்று`, advice: `ஆண்டின் சிறந்த காலகட்டம். பகல்நேர வருகைக்கும் புகைப்படங்களுக்கும் ஏற்றது.` },
      { period: `ஏப்ரல் – செப்டம்பர்`, weather: `வெப்பம் அதிகம், சில மழை மற்றும் குளிர்ச்சி`, advice: `மாலைப் பொழுதை (சுமார் 4–6 மணி) தேர்ந்தெடுங்கள்; நீர் மற்றும் சூரியப் பாதுகாப்பை எடுத்துச் செல்லுங்கள்.` },
      { period: `அக்டோபர் – டிசம்பர்`, weather: `மழை அதிகம், குளிர்ச்சி மற்றும் ஈரப்பதம்`, advice: `மழைத் திட்டத்தைச் சேர்த்துக் கொள்ளுங்கள்; குடை மற்றும் மழைக்கவசம் தேவைப்படலாம்.` },
    ],
    note: `கொழும்பின் மழை முறை மழைக்காலக் காற்றுடன் தொடர்புடையது, ஆனால் வறண்ட ஓரப் பகுதியாக இருப்பதால் பெரும்பாலும் சிறு மழைக்கே வரையறுக்கப்படும். நிகழ்நிலைக்கு மேலுள்ள வானிலைத் தொகுதியைப் பார்க்கவும்.`,
  },
  zh: {
    label: `季节性策略`,
    kicker: `Seasonal travel strategy`,
    title: `依据科伦坡的长期气候挑选最佳时段。`,
    intro: `科伦坡位于干旱区边缘，全年都可游览。以下按月计划基于长期气候规律。`,
    rows: [
      { period: `1 月 – 3 月`, weather: `少雨、气温适中、风平`, advice: `一年中最佳窗口，适合白天游览与拍照。` },
      { period: `4 月 – 9 月`, weather: `较热，偶有降雨与凉爽`, advice: `优选傍晚（约 16–18 点）；带好饮水与防晒。` },
      { period: `10 月 – 12 月`, weather: `降雨较多、凉爽潮湿`, advice: `预留雨天方案；可能需要雨伞与雨具。` },
    ],
    note: `科伦坡的降雨与季风相关，但地处干旱区边缘，多为短时阵雨。实时情况请见上方天气模块。`,
  },
};

/* ---------------------------- Itineraries ---------------------------- */
export const itineraries: L4<{ label: string; title: string; cards: { kicker: string; title: string; text: string }[]; halfDay: { title: string; text: string }; fullDay: { title: string; text: string } }> = {
  en: {
    label: `Itineraries`,
    title: `Choose the route that fits your trip.`,
    cards: [
      { kicker: `Families & kids`, title: `Safe & light`, text: `Flat boardwalk, short eats and rest spots — 60–90 minutes suits children. Go before the midday heat or in the evening.` },
      { kicker: `Photos & nature`, title: `Light & reflections`, text: `Sunrise or evening light on Beira Lake's reflections is best. Red-roof stalls and the boardwalk make great photo frames.` },
      { kicker: `Low mobility / access`, title: `Easy & calm`, text: `Flat paths and shaded rest areas. Avoid the midday heat; choose morning or evening.` },
    ],
    halfDay: { title: `Half-day route`, text: `Market (45–60 min) → Pettah market district near the bus terminal → photo at Jami Ul-Alfar Mosque. A short trip in central Colombo 01.` },
    fullDay: { title: `Full-day route`, text: `Market → Pettah market → Fort → Colombo Lotus Tower → walk along Beira Lake. History, trade and waterfront in a single day.` },
  },
  si: {
    label: `චාරිකා මාර්ග`,
    title: `ඔබේ ගමනේ රිටියට ගැලපෙන මාර්ගය තෝරන්න.`,
    cards: [
      { kicker: `පවුල් සහ ළමුන්`, title: `සුරක්ෂිත හා සැහැල්ලු`, text: `සමතලා ජලතීර පාර, කෙටි ආහාර සහ විවේක ඉඩ — ළමුන් සමඟ මිනිත්තු 60–90ක් සුදුසු. උණුසුම් වේලාවට පෙර හෝ සවස් වේලාවේ යන්න.` },
      { kicker: `ඡායාරූප සහ ස්වභාවය`, title: `ආලෝකය සහ පරාවර්තනය`, text: `හිරු උදාව හෝ සවස් ආලෝකයේ බේරේ වැවේ ප්‍රතිබිම්බ හොඳමයි. රතු වහල් කුටි සහ ජලතීරය ඡායාරූප සඳහා සුදුසු දර්ශන සපයයි.` },
      { kicker: `අඩු කායික ශක්තිය / ප්‍රවේශ්‍යතා`, title: `පහසු හා සන්සුන්`, text: `සමතලා පාර සහ සෙවණ ඇති විවේක ඉඩ ඇත. මධ්‍යාහ්න උණුසුමේ ගමනේ නොගෙන උදෑසන හෝ සවස් වේලාව තෝරන්න.` },
    ],
    halfDay: { title: `අර්ධ දින මාර්ගය`, text: `වෙළඳපොළ (45–60 මිනි.) → පිටකොටුව බස් මධ්‍යස්ථානය අසල වෙළඳ ප්‍රදේශය → ජාමි උල්-අල්ෆාර් මස්ජිදය ඡායාරූප. කොළඹ 01 කේන්ද්‍රයේ කෙටි ගමනක් සඳහා සුදුසු.` },
    fullDay: { title: `පූර්ණ දින මාර්ගය`, text: `වෙළඳපොළ → පිටකොටුව වෙළඳපොළ → Fort → කොළඹ ලෝටස් කුලුන → බේරේ වැව හරහා ඇවිදීම. නගර ඉතිහාසය, වෙළඳාම සහ ජලතීරය එකම දිනයක එකතු කරයි.` },
  },
  ta: {
    label: `பயணத் திட்டங்கள்`,
    title: `உங்கள் பயணத்திற்குப் பொருந்தும் வழியைத் தேர்ந்தெடுங்கள்.`,
    cards: [
      { kicker: `குடும்பங்கள் & குழந்தைகள்`, title: `பாதுகாப்பானது & இலேசானது`, text: `சமதள நடைபாதை, சிறுஉணவுகள் மற்றும் ஓய்விடங்கள் — 60–90 நிமிடங்கள் குழந்தைகளுக்குப் போதுமானது. மதிய வெப்பத்திற்கு முன் அல்லது மாலையில் செல்லுங்கள்.` },
      { kicker: `புகைப்படங்கள் & இயற்கை`, title: `ஒளி & பிம்பங்கள்`, text: `பேரா ஏரியின் பிம்பங்களில் சூரிய உதயம் அல்லது மாலை ஒளி சிறந்தது. சிவப்புக் கூரைக் கடைகளும் நடைபாதையும் அருமையான புகைப்படக் காட்சிகளைத் தரும்.` },
      { kicker: `குறைந்த நடமாட்டம் / அணுகல்`, title: `எளிதானது & அமைதியானது`, text: `சமதளப் பாதைகளும் நிழலான ஓய்விடங்களும் உள்ளன. மதிய வெப்பத்தைத் தவிர்த்து, காலை அல்லது மாலையைத் தேர்ந்தெடுங்கள்.` },
    ],
    halfDay: { title: `அரைநாள் வழி`, text: `சந்தை (45–60 நிமி) → பேருந்து நிலையத்தருகே உள்ள பெட்டா சந்தைப் பகுதி → ஜாமி உல்-அல்ஃபார் மசூதியில் புகைப்படம். கொழும்பு 01 மையத்தில் சிறு பயணம்.` },
    fullDay: { title: `முழுநாள் வழி`, text: `சந்தை → பெட்டா சந்தை → போர்ட் → கொழும்பு தாமரைக் கோபுரம் → பேரா ஏரியோரம் நடைபயிற்சி. வரலாறு, வணிகம் மற்றும் நீரோரம் ஒரே நாளில்.` },
  },
  zh: {
    label: `路线推荐`,
    title: `选择适合你行程的路线。`,
    cards: [
      { kicker: `亲子家庭`, title: `安全轻松`, text: `平坦的木板栈道、小吃与休息点——60–90 分钟适合带孩子。正午炎热前或傍晚前往。` },
      { kicker: `摄影与自然`, title: `光线与倒影`, text: `日出或傍晚贝拉湖倒影最美。红顶摊位与栈道都是绝佳取景框。` },
      { kicker: `行动不便 / 无障碍`, title: `轻松安静`, text: `道路平坦、有遮阴休息区。避开正午高温，选择清晨或傍晚。` },
    ],
    halfDay: { title: `半日路线`, text: `市场（45–60 分钟）→ 公交总站附近的佩塔市场区 → 在 Jami Ul-Alfar 清真寺拍照。科伦坡 01 中心区的短途行程。` },
    fullDay: { title: `一日路线`, text: `市场 → 佩塔市场 → Fort → 科伦坡莲花塔 → 沿贝拉湖漫步。一天内看尽历史、市集与水岸。` },
  },
};

/* ---------------------------- Responsible ---------------------------- */
export const responsible: L4<{ label: string; kicker: string; title: string; intro: string; cards: { title: string; text: string }[] }> = {
  en: {
    label: `Science & responsibility`,
    kicker: `Factual knowledge and travel responsibility`,
    title: `Beira Lake: a water system of the city.`,
    intro: `Beira Lake links Colombo's history and urban water management. Restored as part of the city's water system, it contributes to the urban wetland. The waterfront market is a public space where people can engage with that water environment.`,
    cards: [
      { title: `Don't litter`, text: `Keeping the waterfront clean is everyone's responsibility. Use the bins provided.` },
      { title: `Respect vendors`, text: `Don't block the stalls and boardwalk. Ask before photographing vendors.` },
      { title: `Travel lightly`, text: `Public transport, walking and tuk-tuks lower the city's footprint.` },
      { title: `Support the local economy`, text: `Buying food, handicrafts and fruit from the stalls directly benefits local traders.` },
      { title: `Protect the water`, text: `Don't leave anything in or near Beira Lake; respect the living wetland.` },
      { title: `Free information`, text: `This site is a non-profit, factual guide. Our aim is neutral, evidence-based information.` },
    ],
  },
  si: {
    label: `විද්‍යාත්මක දැනුම සහ චාරිකා වගකීම`,
    kicker: `Factual knowledge and travel responsibility`,
    title: `බේරේ වැව: නගරයේ ජල පද්ධතියක් ලෙස.`,
    intro: `බේරේ වැව යනු කොළඹේ ඉතිහාසය සහ නගර ජල කළමනාකරණය අතර සම්බන්ධකයකි. එය නාගරික ජල පද්ධතියේ කොටසක් ලෙස නැවත ප්‍රතිසංස්කරණය වී ඇති අතර, නගර ජීවි වාතාවරණයට (urban wetland) දායක වේ.`,
    cards: [
      { title: `අපද්‍රව්‍ය නොතැන්පත් කිරීම`, text: `ජලතීරය පිරිසිදුව තබාගැනීම සැමදෙනාගේම වගකීමකි. අපද්‍රව්‍ය නියමිත බඳුන්වල දමන්න.` },
      { title: `වෙළඳුන්ව ගෞරව කිරීම`, text: `කුටි සහ ජලතීර පාර අවුල් නොකරන්න. ඡායාරූප ගැනීමේදී වෙළඳුන්ගේ කැමැත්ත ලබාගන්න.` },
      { title: `පරිසර හිතකාමී ගමන`, text: `පොදු ප්‍රවාහනය, ඇවිදීම සහ ටුක්-ටුක් භාවිතා කිරීම නගර ගෝලීය බර අඩු කරයි.` },
      { title: `ප්‍රදේශීය ආර්ථිකයට දායක වීම`, text: `වෙළඳපොළේ කුටිවලින් ආහාර, අත්කම් සහ පලතුරු මිලදී ගැනීම ප්‍රදේශීය වෙළඳුන්ට සෘජු වාසියක් ලබාදෙයි.` },
      { title: `ජල පරිසරය ආරක්ෂා කිරීම`, text: `බේරේ වැවේ ජලයට හෝ වැව ආසන්නයට කිසිවක් නොතැන්පත් කරන්න; ජීවි වාතාවරණය ආරක්ෂා කරන්න.` },
      { title: `නොමිලේ තොරතුරු මාර්ගෝපදේශය`, text: `මෙම අඩවිය ලාභ නොලබන විද්‍යාත්මක තොරතුරු මූලාශ්‍රයකි. අපගේ අරමුණ නිෂ්පක්ෂ, පරීක්ෂණාත්මක දැනුම සැපයීමයි.` },
    ],
  },
  ta: {
    label: `அறிவியலும் பொறுப்பும்`,
    kicker: `Factual knowledge and travel responsibility`,
    title: `பேரா ஏரி: நகரத்தின் நீரமைப்பு.`,
    intro: `பேரா ஏரி கொழும்பின் வரலாற்றையும் நகர்ப்புற நீர் மேலாண்மையையும் இணைக்கிறது. நகர நீரமைப்பின் ஒரு பகுதியாக மீட்டமைக்கப்பட்டு, நகர்ப்புற சதுப்பு நிலத்திற்குப் பங்களிக்கிறது. நீரோரச் சந்தை அந்த நீர்ச்சூழலை மக்கள் அணுகும் பொது இடம்.`,
    cards: [
      { title: `குப்பை போடாதீர்`, text: `நீரோரத்தைச் சுத்தமாக வைத்திருப்பது அனைவரின் பொறுப்பு. வைக்கப்பட்டுள்ள தொட்டிகளில் போடுங்கள்.` },
      { title: `வியாபாரிகளை மதியுங்கள்`, text: `கடைகளையும் நடைபாதையையும் அடைத்துவிடாதீர். வியாபாரிகளைப் புகைப்படம் எடுப்பதற்கு முன் அனுமதி கேளுங்கள்.` },
      { title: `இலகுவாகப் பயணியுங்கள்`, text: `பொது போக்குவரத்து, நடைபயிற்சி மற்றும் ஆட்டோ நகரத்தின் சுற்றுச்சூழல் சுமையைக் குறைக்கிறது.` },
      { title: `உள்ளூர் பொருளாதாரத்திற்கு உதவுங்கள்`, text: `கடைகளில் உணவு, கைவினைப் பொருட்கள் மற்றும் பழங்களை வாங்குவது உள்ளூர் வியாபாரிகளுக்கு நேரடிப் பலன் அளிக்கிறது.` },
      { title: `நீரைப் பாதுகாப்போம்`, text: `பேரா ஏரியின் நீரிலோ அருகிலோ எதையும் விட்டுவிடாதீர்; உயிர்ப்பொருள் சதுப்பு நிலத்தை மதியுங்கள்.` },
      { title: `இலவசத் தகவல்`, text: `இந்தத் தளம் லாப நோக்கற்ற, உண்மை அடிப்படையிலான வழிகாட்டி. எங்கள் நோக்கம் நடுநிலையான, சான்றுகளை அடிப்படையான தகவல்களை வழங்குவதே.` },
    ],
  },
  zh: {
    label: `科普与责任`,
    kicker: `Factual knowledge and travel responsibility`,
    title: `贝拉湖：城市的水系。`,
    intro: `贝拉湖连接着科伦坡的历史与城市水务管理。作为城市水系的一部分被修复后，它贡献于城市湿地。水岸市场是公众接触这片水环境公共空间。`,
    cards: [
      { title: `不乱丢垃圾`, text: `保持水岸清洁是每个人的责任。请使用提供的垃圾桶。` },
      { title: `尊重商贩`, text: `不要堵塞摊位与栈道。拍摄商贩前请先征得同意。` },
      { title: `轻量出行`, text: `公共交通、步行与突突车能降低城市的环境负担。` },
      { title: `支持本地经济`, text: `在摊位购买餐饮、手工艺品与水果，直接惠及本地商贩。` },
      { title: `保护水体`, text: `不要把任何东西丢入或留在贝拉湖边；爱护这片活湿地。` },
      { title: `免费信息`, text: `本站是非营利的科普信息指南，目标是提供中立、基于证据的信息。` },
    ],
  },
};

/* ------------------------------ Reviews ------------------------------ */
export const reviews: L4<{ label: string; kicker: string; title: string; intro: string; ratingNote: string; topics: string[] }> = {
  en: {
    label: `Google Maps reviews`,
    kicker: `Reviews of ${ATTRACTION_FULL_NAME}`,
    title: `Google Maps user reviews & rating.`,
    intro: `Synced from Google Maps user reviews.`,
    ratingNote: `Synced September 2026 · copyright belongs to the original authors and Google Maps.`,
    topics: [
      `Waterfront walk and photo opportunities`,
      `Short eats, drinks and food-court experience`,
      `Variety of stalls and price levels`,
      `Evening light and reflections on the water`,
      `Crowding, parking and cleanliness`,
    ],
  },
  si: {
    label: `Google Maps සමාලෝචන`,
    kicker: `Reviews of ${ATTRACTION_FULL_NAME}`,
    title: `Google Maps පරිශීලක සමාලෝචන සහ ශ්‍රේණිගත කිරීම.`,
    intro: `Google Maps පරිශීලක සමාලෝචන වලින් සමමුහුර්ත කරන ලදී.`,
    ratingNote: `සමමුහුර්ත කාලය 2026 සැප්තැම්බර් · ප්‍රකාශන හිමිකම් මුල් කර්තෘ සහ Google Maps සතුය.`,
    topics: [
      `ජලතීර ඇවිදීම සහ ඡායාරූප අවස්ථා`,
      `කෙටි ආහාර, බීම සහ food court අත්දැකීම`,
      `වෙළඳ කුටිවල විවිධත්වය සහ මිල මට්ටම්`,
      `සවස කාලයේ ආලෝකය සහ ජලයේ ප්‍රතිබිම්බ`,
      `කාර්යබහුල බව, රථගාල් සහ පිරිසිදුකම`,
    ],
  },
  ta: {
    label: `Google Maps மதிப்புரைகள்`,
    kicker: `Reviews of ${ATTRACTION_FULL_NAME}`,
    title: `Google Maps பயனர் மதிப்புரைகள் மற்றும் மதிப்பீடு.`,
    intro: `Google Maps பயனர் மதிப்புரைகளிலிருந்து ஒத்திசைக்கப்பட்டது.`,
    ratingNote: `செப்டம்பர் 2026 உடன் ஒத்திசைக்கப்பட்டது · காப்புரிமை அசல் ஆசிரியர்கள் மற்றும் Google Maps உடையது.`,
    topics: [
      `நீரோர நடைப்பயிற்சி மற்றும் புகைப்பட வாய்ப்புகள்`,
      `சிறுஉணவுகள், பானங்கள் மற்றும் உணவு மைய அனுபவம்`,
      `கடைகளின் வகைகள் மற்றும் விலை நிலைகள்`,
      `மாலை ஒளி மற்றும் நீர்ப் பிம்பங்கள்`,
      `கூட்டம், வாகன நிறுத்தம் மற்றும் தூய்மை`,
    ],
  },
  zh: {
    label: `Google 地图评价`,
    kicker: `Reviews of ${ATTRACTION_FULL_NAME}`,
    title: `Google 地图用户评价与评分。`,
    intro: `同步自 Google 地图用户评价。`,
    ratingNote: `同步时间 2026 年 9 月；版权归原作者与 Google 地图所有`,
    topics: [
      `水岸漫步与拍照机会`,
      `小吃、饮品与美食广场体验`,
      `摊位种类与价格区间`,
      `傍晚光线与水面的倒影`,
      `拥挤程度、停车与清洁`,
    ],
  },
};

/* -------------------------------- Map -------------------------------- */
export const map: L4<{ label: string; kicker: string; title: string; note: string; govtLabel: string; nationalLabel: string; footer: string }> = {
  en: {
    label: `Map`,
    kicker: `Location & Map of ${ATTRACTION_FULL_NAME}, ${CITY_NAME}`,
    title: `Straight to W E Bastian Mawatha.`,
    note: `The map is served by Google. Data use and Google's privacy policy may apply.`,
    govtLabel: `Urban Development Authority · Sri Lanka Official Project Page`,
    nationalLabel: `Sri Lanka Official Tourism Portal`,
    footer: `For official updates and regional tourism information, visit the Sri Lanka / Western Province official tourism portals linked above.`,
  },
  si: {
    label: `සිතියම`,
    kicker: `Location & Map of ${ATTRACTION_FULL_NAME}, ${CITY_NAME}`,
    title: `W E Bastian Mawatha වෙත සෘජුව.`,
    note: `සිතියම Google සේවාවෙන් පැටවේ. දත්ත භාවිතය සහ Google හි පෞද්ගලිකත්ව නීති අදාළ විය හැක.`,
    govtLabel: `නාගරික සංවර්ධන අධිකාරිය · ශ්‍රී ලංකාව නිල ව්‍යාපෘති පිටුව`,
    nationalLabel: `ශ්‍රී ලංකා නිල සංචාරක පොර්ටලය`,
    footer: `නිළ යාවත්කාලීන කිරීම් සහ ප්‍රාදේශීය සංචාරක තොරතුරු සඳහා ඉහත සබැඳි කළ ශ්‍රී ලංකා / බස්නාහිර පළාත් නිල සංචාරක පොර්ටල් බලන්න.`,
  },
  ta: {
    label: `வரைபடம்`,
    kicker: `Location & Map of ${ATTRACTION_FULL_NAME}, ${CITY_NAME}`,
    title: `W E Bastian Mawatha வரை நேரடியாக.`,
    note: `வரைபடம் Google மூலம் வழங்கப்படுகிறது. தரவுப் பயன்பாடு மற்றும் Google இன் தனியுரிமைக் கொள்கை பொருந்தும்.`,
    govtLabel: `நகர்ப்புற மேம்பாட்டு அதிகாரம் · இலங்கை அதிகாரப்பூர்வ திட்டப் பக்கம்`,
    nationalLabel: `இலங்கை அதிகாரப்பூர்வ சுற்றுலா போர்ட்டல்`,
    footer: `அதிகாரப்பூர்வப் புதுப்பிப்புகள் மற்றும் பிராந்திய சுற்றுலா தகவல்களுக்கு மேலே இணைக்கப்பட்ட இலங்கை / மேல் மாகாண அதிகாரப்பூர்வ சுற்றுலா போர்ட்டல்களைப் பார்க்கவும்.`,
  },
  zh: {
    label: `地图`,
    kicker: `Location & Map of ${ATTRACTION_FULL_NAME}, ${CITY_NAME}`,
    title: `直达 W E Bastian Mawatha。`,
    note: `地图由 Google 提供。数据使用及 Google 隐私政策可能适用。`,
    govtLabel: `城市发展局 · 斯里兰卡官方项目页`,
    nationalLabel: `斯里兰卡官方旅游门户`,
    footer: `如需官方更新与地区旅游信息，请访问上方链接的斯里兰卡 / 西部省官方旅游门户。`,
  },
};

/* -------------------------------- FAQ ------------------------------- */
export const faqs: Record<Locale, { q: string; a: string }[]> = {
  en: [
    { q: `Where is ${ATTRACTION_FULL_NAME} located?`, a: `${ATTRACTION_FULL_NAME} is on ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME}, beside Beira Lake in Pettah.` },
    { q: `Is ${ATTRACTION_SHORT_NAME} free to visit?`, a: `Yes — general entry is free of charge. You only pay for food, drinks or goods you buy.` },
    { q: `What are the opening hours?`, a: `Listings currently show Mon–Sat 08:00–22:30, with Sunday closed. Hours can change, so confirm by phone or Google Maps before you come.` },
    { q: `What is the best time to visit?`, a: `Mornings are calmest; late afternoon gives the best light and water reflections for photos. Watch the heat and rain.` },
    { q: `How much time should I set aside?`, a: `30–60 minutes is typical for the stalls, boardwalk and a short food break. Add Pettah Market and the mosque for a half-day.` },
    { q: `Can I get there from Fort railway station?`, a: `Yes. The market is close to Colombo Fort station and the Pettah bus terminal, so public transport is very convenient.` },
    { q: `Is parking available?`, a: `The project provides visitor and trader parking. It can fill up at busy times, so public transport is often easier.` },
  ],
  si: [
    { q: `${ATTRACTION_FULL_NAME} පිහිටියේ කවුරු කොටුවේ ද?`, a: `${ATTRACTION_FULL_NAME} පිහිටියේ ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME}, බේරේ වැව අසල පිටකොටුවේ ය.` },
    { q: `${ATTRACTION_SHORT_NAME} ටිකට් පතක් අවශ්‍යද?`, a: `සාමාන්‍ය ප්‍රවේශය නොමිලේ. ඔබ මිලදී ගන්නා ආහාර, බීම, අත්කම් හෝ වෙනත් භාණ්ඩ සඳහා පමණක් වෙනම ගෙවීම් සිදු වේ.` },
    { q: `විවෘත වේලාවන් කුමක්ද?`, a: `වත්මන් ලැයිස්තුව අනුව සදුදා–සෙනසුරාදා 08:00–22:30, ඉරිදා වසා ඇත. වේලාවන් වෙනස් විය හැකි බැවින් පැමිණීමට පෙර දුරකථනයෙන් හෝ Google Maps හරහා තහවුරු කරන්න.` },
    { q: `හොඳම වේලාව කුමක්ද?`, a: `උදෑසන සාපේක්ෂව නිස්කලංක අත්දැකීමක් ලබා දෙයි. ඡායාරූප සහ ජලතීර ආලෝකය සඳහා සවස අවසාන පැය වඩාත් සුන්දරය. උණුසුම සහ වැසි සැලකිල්ලට ගන්න.` },
    { q: `කොපමණ වේලාවක් වෙන් කරගත යුතුද?`, a: `වෙළඳ කුටි, ජලතීරය සහ කෙටි ආහාර විවේකයක් සඳහා මිනිත්තු 30–60ක් සාමාන්‍යයෙන් ප්‍රමාණවත්ය. පිටකොටුව වෙළඳපොළ සහ මස්ජිදය එක් කළහොත් වැඩි කාලයක් වෙන් කරන්න.` },
    { q: `Fort දුම්රිය ස්ථානයෙන් පැමිණිය හැකිද?`, a: `ඔව්. මෙම වෙළඳපොළ Fort දුම්රිය ස්ථානය සහ පිටකොටුව බස් මධ්‍යස්ථානයට ආසන්නව පිහිටා ඇති නිසා පොදු ප්‍රවාහනය ඉතා පහසු විකල්පයකි.` },
    { q: `රථ ගාල් පහසුකම් තිබේද?`, a: `නාගරික සංවර්ධන අධිකාරියේ ව්‍යාපෘති තොරතුරු අනුව පාරිභෝගික සහ වෙළඳුන් සඳහා රථ ගාල් පහසුකම් සලසා ඇත. කාර්යබහුල වේලාවල ඉඩකඩ වෙනස් විය හැකි බැවින් පොදු ප්‍රවාහනය වඩාත් පහසු විය හැක.` },
  ],
  ta: [
    { q: `${ATTRACTION_FULL_NAME} எங்கு அமைந்துள்ளது?`, a: `${ATTRACTION_FULL_NAME} ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME} ஆகிய இடத்தில், பெட்டாவில் உள்ள பேரா ஏரிக்கு அருகில் உள்ளது.` },
    { q: `${ATTRACTION_SHORT_NAME} பார்வையிட இலவசமா?`, a: `ஆம் — பொது நுழைவு இலவசம். நீங்கள் வாங்கும் உணவு, பானம் அல்லது பொருட்களுக்கு மட்டுமே பணம் செலுத்த வேண்டும்.` },
    { q: `திறக்கும் நேரம் என்ன?`, a: `தற்போதைய பட்டியலின்படி திங்கள்–சனி 08:00–22:30, ஞாயிறு மூடப்பட்டுள்ளது. நேரங்கள் மாறலாம், எனவே வருவதற்கு முன் தொலைபேசி அல்லது Google Maps மூலம் உறுதிப்படுத்தவும்.` },
    { q: `பார்வையிட சிறந்த நேரம் எது?`, a: `காலை நேரங்கள் அமைதியானவை; மாலைப் பொழுது புகைப்படங்களுக்குச் சிறந்த ஒளியையும் நீர்ப் பிம்பத்தையும் தரும். வெப்பத்தையும் மழையையும் கவனியுங்கள்.` },
    { q: `எவ்வளவு நேரம் ஒதுக்க வேண்டும்?`, a: `கடைகள், நடைபாதை மற்றும் ஒரு சிறு உணவு இடைவேளைக்கு 30–60 நிமிடங்கள் போதுமானது. பெட்டா சந்தை மற்றும் மசூதியையும் சேர்த்தால் அரைநாள் ஆகும்.` },
    { q: `போர்ட் ரயில் நிலையத்திலிருந்து வர முடியுமா?`, a: `ஆம். சந்தை கொழும்பு போர்ட் நிலையத்திற்கும் பெட்டா பேருந்து நிலையத்திற்கும் அருகில் உள்ளது, எனவே பொது போக்குவரத்து மிகவும் வசதியானது.` },
    { q: `வாகன நிறுத்தம் உள்ளதா?`, a: `திட்டம் பார்வையாளர் மற்றும் வியாபாரி வாகன நிறுத்தத்தை வழங்குகிறது. உச்ச நேரங்களில் நிரம்பிவிடும், எனவே பொது போக்குவரத்தே எளிதானது.` },
  ],
  zh: [
    { q: `${ATTRACTION_FULL_NAME} 在哪里？`, a: `它位于 ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME}，佩塔区贝拉湖畔。` },
    { q: `${ATTRACTION_SHORT_NAME} 免费吗？`, a: `是的——一般入场免费。只需为购买的餐饮或商品付费。` },
    { q: `开放时间是？`, a: `当前列表显示周一至周六 08:00–22:30，周日闭市。时间可能变动，出发前请电话或 Google 地图确认。` },
    { q: `最佳游览时间？`, a: `清晨最清净；傍晚光线与水面倒影最适合拍照。注意高温与降雨。` },
    { q: `需要预留多久？`, a: `摊位、栈道和简短用餐通常 30–60 分钟足够。加上佩塔市场和清真寺可凑成半天。` },
    { q: `能从 Fort 火车站到达吗？`, a: `可以。市场靠近科伦坡堡站与佩塔公交总站，公共交通非常方便。` },
    { q: `有停车位吗？`, a: `项目设有游客与商贩停车场。高峰时段可能满位，公共交通往往更方便。` },
  ],
};

/* ------------------------------ Sources ------------------------------ */
export const sources: L4<{ title: string; intro: string; reviewsKicker: string; reviewsText: string; placeKicker: string; placeText: string; footer: string }> = {
  en: {
    title: `Sources · Image & data credits`,
    intro: `Key location facts are based on the Sri Lanka Urban Development Authority, Sri Lanka Tourism, Google Maps listings and licensed Wikimedia Commons photographs. Image links show their original licence and author.`,
    reviewsKicker: `Reviews`,
    reviewsText: `Google Maps user reviews · synced September 2026 · rating ${`3.7`}/5 · 18,853 reviews`,
    placeKicker: `Place data`,
    placeText: `${ATTRACTION_FULL_NAME} · ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME} · 6.9329, 79.8554 · +94 11 287 3640`,
    footer: `Sri Lanka / Western Province Official Tourism Portal`,
  },
  si: {
    title: `මූලාශ්‍ර · ඡායාරූප සහ දත්ත සලකුණු`,
    intro: `ප්‍රධාන ස්ථාන තොරතුරු ශ්‍රී ලංකා නාගරික සංවර්ධන අධිකාරිය, ශ්‍රී ලංකා සංචාරක තොරතුරු, Google Maps ලැයිස්තුගත කිරීම් සහ Wikimedia Commons හි බලපත්‍රිත ඡායාරූප මත සකස් කර ඇත. ඡායාරූප සබැඳිවල ඔවුන්ගේ මුල් බලපත්‍ර සහ කර්තෘ තොරතුරු පෙන්වයි.`,
    reviewsKicker: `සමාලෝචන`,
    reviewsText: `Google Maps පරිශීලක සමාලෝචන · සමමුහුර්ත 2026 සැප්තැම්බර් · ලකුණු 3.7/5 · 18,853`,
    placeKicker: `ස්ථාන තොරතුරු`,
    placeText: `${ATTRACTION_FULL_NAME} · ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME} · 6.9329, 79.8554 · +94 11 287 3640`,
    footer: `ශ්‍රී ලංකා / බස්නාහිර පළාත් නිල සංචාරක පොර්ටලය`,
  },
  ta: {
    title: `மூலங்கள் · படம் மற்றும் தரவுக் கடன்கள்`,
    intro: `முக்கிய இடத் தகவல்கள் இலங்கை நகர்ப்புற மேம்பாட்டு அதிகாரம், இலங்கை சுற்றுலா, Google Maps பட்டியல்கள் மற்றும் உரிமம் பெற்ற Wikimedia Commons புகைப்படங்களை அடிப்படையாகக் கொண்டவை. பட இணைப்புகள் அவற்றின் அசல் உரிமம் மற்றும் ஆசிரியரைக் காட்டுகின்றன.`,
    reviewsKicker: `மதிப்புரைகள்`,
    reviewsText: `Google Maps பயனர் மதிப்புரைகள் · செப்டம்பர் 2026 உடன் ஒத்திசைக்கப்பட்டது · மதிப்பீடு 3.7/5 · 18,853 மதிப்புரைகள்`,
    placeKicker: `இடத் தரவு`,
    placeText: `${ATTRACTION_FULL_NAME} · ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME} · 6.9329, 79.8554 · +94 11 287 3640`,
    footer: `இலங்கை / மேல் மாகாண அதிகாரப்பூர்வ சுற்றுலா போர்ட்டல்`,
  },
  zh: {
    title: `来源 · 图片与数据署名`,
    intro: `主要位置信息基于斯里兰卡城市发展局、斯里兰卡旅游局、Google 地图列表以及已授权的 Wikimedia Commons 照片。图片链接标注了原始许可与作者。`,
    reviewsKicker: `评价`,
    reviewsText: `Google 地图用户评价 · 同步 2026 年 9 月 · 评分 3.7/5 · 18,853 条评价`,
    placeKicker: `地点数据`,
    placeText: `${ATTRACTION_FULL_NAME} · ${STREET_ADDRESS}, ${CITY_NAME} ${POSTAL_CODE}, ${STATE_PROVINCE}, ${COUNTRY_NAME} · 6.9329, 79.8554 · +94 11 287 3640`,
    footer: `斯里兰卡 / 西部省官方旅游门户`,
  },
};
