import type { Locale } from '../i18n';

export type LegalKey = 'privacy' | 'terms' | 'cookieSettings';

export interface LegalDoc {
  title: string;
  paragraphs: string[];
}

export const legal: Record<LegalKey, Record<Locale, LegalDoc>> = {
  privacy: {
    en: {
      title: 'Privacy and measurement',
      paragraphs: [
        'This is an independent visitor guide, not the market operator. It provides no accounts, booking, payment or contact form. Cloudflare hosts the pages and processes technical connection data for delivery and security.',
        'Cloudflare Web Analytics browser beacons have been observed on hosted pages. This hosting measurement is separate from Google Analytics and can measure visits, page views and performance, with dimensions such as page/referrer, country, browser, device and operating system. Cloudflare describes this service as cookie-free. This page has no switch for this hosting measurement; browser or network controls may block third-party requests.',
        'The site retains a legacy Google Analytics loader which runs only when this site already has the exact cookie gtag_consent=granted. This guide does not provide a control to create or change that cookie. If that choice exists, Google receives browser measurement requests and may use cookies. Clearing this site’s cookie stops later page loads from this loader; it does not unload an already loaded script or remove Google’s cookies.',
        'The embedded Google map contacts Google when loaded; opening external links contacts their providers. The weather panel requests a same-origin endpoint; the server contacts Open-Meteo with fixed Colombo coordinates, not your device location. Forecasts are model estimates, not observations or a guarantee of safe access. No device geolocation is requested.',
        'Public images on this version are our original symbolic illustrations under CC0, not photographs or navigation maps. They do not show current occupancy, path safety or available facilities.',
      ],
    },
    si: {
      title: 'පෞද්ගලිකත්වය සහ මිනුම්',
      paragraphs: [
        'මෙය වෙළඳපොළ පාලකයාගේ නොවන ස්වාධීන මාර්ගෝපදේශයකි. ගිණුම්, වෙන්කිරීම්, ගෙවීම් හෝ සම්බන්ධතා පෝරම නැත. Cloudflare පිටු සපයන අතර බෙදාහැරීම හා ආරක්ෂාව සඳහා තාක්ෂණික සම්බන්ධතා දත්ත සකසයි.',
        'සත්කාරක පිටුවල Cloudflare Web Analytics බ්‍රව්සර beacon නිරීක්ෂණය කර ඇත. මෙය Google Analytics වෙතින් වෙනම මිනුමකි: පැමිණීම්, පිටු බැලීම්, කාර්යසාධනය සහ පිටුව, යොමුකරු, රට, බ්‍රව්සරය, උපාංගය හා මෙහෙයුම් පද්ධතිය වැනි මාන මැනිය හැක. Cloudflare මෙය කුකී රහිත සේවාවක් ලෙස විස්තර කරයි. මෙම පිටුවේ ඒ සඳහා ස්විචයක් නැත; බ්‍රව්සර හෝ ජාල පාලන මගින් බාහිර ඉල්ලීම් අවහිර කළ හැක.',
        'පැරණි Google Analytics loader එක ක්‍රියාකරන්නේ මෙම අඩවියේ gtag_consent=granted යන නිශ්චිත කුකිය දැනටමත් තිබේ නම් පමණි. එය සෑදීමට හෝ වෙනස් කිරීමට පිටුවේ පාලනයක් නැත. එවැනි තේරීමක් තිබේ නම් Google වෙත මිනුම් ඉල්ලීම් යැවෙන අතර කුකී භාවිත කළ හැක. අඩවියේ එම කුකිය ඉවත් කිරීම පසු පිටු පැටවීම් වළක්වයි; දැනට පැටවූ script එක ඉවත් කිරීමක් හෝ Google කුකී මැකීමක් නොවේ.',
        'සිතියම පැටවීමේදී Google වෙත සම්බන්ධ වේ. බාහිර සබැඳි ඒවායේ සැපයුම්කරුවන් වෙත යයි. කාලගුණ පැනලය මෙම අඩවියේ endpoint එක ඉල්ලයි; සේවාදායකය ස්ථිර කොළඹ ඛණ්ඩාංක සමඟ Open-Meteo අමතයි, ඔබේ උපාංග ස්ථානය නොවේ. අනාවැකි ආකෘති ඇස්තමේන්තු මිස නිරීක්ෂණ හෝ ආරක්ෂිත ප්‍රවේශ සහතික නොවේ. උපාංග භූස්ථානය ඉල්ලන්නේ නැත.',
        'මෙම අනුවාදයේ රූප අපගේ CC0 සංකේතාත්මක නිදර්ශන වේ; ඡායාරූප හෝ මාර්ග සිතියම් නොවේ. වත්මන් කඩ, මාර්ග ආරක්ෂාව හෝ පහසුකම් ඒවායින් තහවුරු නොවේ.',
      ],
    },
    ta: {
      title: 'தனியுரிமையும் அளவீடும்',
      paragraphs: [
        'இது சந்தை நிர்வாகத்தின் தளம் அல்ல; சுயாதீன வருகையாளர் வழிகாட்டி. கணக்கு, முன்பதிவு, கட்டணம் அல்லது தொடர்புப் படிவம் இல்லை. Cloudflare பக்கங்களை வழங்கி, விநியோகம் மற்றும் பாதுகாப்புக்கான தொழில்நுட்ப இணைப்புத் தரவைச் செயலாக்குகிறது.',
        'வழங்கப்பட்ட பக்கங்களில் Cloudflare Web Analytics உலாவி beacon காணப்பட்டுள்ளது. இது Google Analytics இலிருந்து தனியான அளவீடு. வருகை, பக்கப் பார்வை, செயல்திறன், பக்கம்/பரிந்துரையாளர், நாடு, உலாவி, சாதனம், இயங்குதளம் போன்ற பரிமாணங்களை அளவிடலாம். Cloudflare இதை cookie இல்லாத சேவை என விவரிக்கிறது. இதற்கான மாற்று கட்டுப்பாடு இந்தப் பக்கத்தில் இல்லை; உலாவி அல்லது வலையமைப்புக் கட்டுப்பாடுகள் வெளி கோரிக்கைகளைத் தடுக்கலாம்.',
        'இந்தத் தளத்தில் ஏற்கெனவே gtag_consent=granted என்ற சரியான cookie இருந்தால் மட்டுமே பழைய Google Analytics loader இயங்கும். அந்த cookie ஐ உருவாக்கவோ மாற்றவோ இங்கு கட்டுப்பாடு இல்லை. அத்தேர்வு இருந்தால் Google அளவீட்டுக் கோரிக்கைகளைப் பெற்று cookies பயன்படுத்தலாம். அந்தத் தள cookie ஐ அழிப்பது அடுத்த பக்க ஏற்றங்களில் loader இயங்குவதைத் தடுக்கும்; ஏற்கெனவே ஏற்றப்பட்ட script ஐ அகற்றவோ Google cookies ஐ அழிக்கவோ செய்யாது.',
        'பதிக்கப்பட்ட வரைபடம் ஏறும்போது Google ஐத் தொடர்புகொள்கிறது. வெளி இணைப்புகள் அவற்றின் வழங்குநர்களை அணுகும். வானிலைப் பகுதி இதே தள endpoint ஐ அழைக்கும்; server நிலையான கொழும்பு ஆயத்தொலைவுகளுடன் Open-Meteo ஐ அணுகுகிறது, உங்கள் சாதன இருப்பிடத்துடன் அல்ல. முன்னறிவிப்பு மாதிரி மதிப்பீடு; நேரடி அவதானிப்போ பாதுகாப்பான அணுகல் உத்தரவாதமோ அல்ல. சாதன இருப்பிடம் கேட்கப்படாது.',
        'இப்பதிப்பின் படங்கள் எமது சொந்த CC0 குறியீட்டு விளக்கப்படங்கள்; புகைப்படங்களோ வழிகாட்டும் வரைபடங்களோ அல்ல. தற்போதைய கடைகள், பாதைப் பாதுகாப்பு அல்லது வசதிகளை அவை உறுதிப்படுத்தாது.',
      ],
    },
    zh: {
      title: '隐私与访问测量',
      paragraphs: [
        '本站是独立游客指南，并非市场管理方；不提供账户、预订、付款或联系表单。Cloudflare托管页面，并为内容传送与安全处理技术连接资料。',
        '已在托管页面观察到Cloudflare Web Analytics浏览器beacon。这项托管测量独立于Google Analytics，可测量访问、页面浏览与性能，以及页面、来源页面、国家、浏览器、设备、操作系统等维度。Cloudflare将此服务描述为不使用Cookie。本站没有控制此托管测量的页面开关；浏览器或网络工具可能阻止第三方请求。',
        '本站保留旧有Google Analytics加载逻辑：只有本站已存在精确的gtag_consent=granted Cookie时才加载；页面没有建立或更改该Cookie的控制。如果已有该选择，Google会收到浏览器测量请求，并可能使用Cookie。清除本站该Cookie可停止之后页面加载时的这段逻辑，但不会卸载已载入脚本或删除Google的Cookie。',
        '嵌入地图载入时会连接Google；外部链接会连接其提供者。天气面板请求本站端点，由服务器以固定科伦坡坐标连接Open-Meteo，不传送设备位置。预报是模型估计，并非实况观测或通行安全保证；本站不请求设备定位。',
        '本版本公开图像均为本站原创CC0符号示意插图，不是现场照片或导航地图，不能证明当前摊位、路径安全或设施状态。',
      ],
    },
  },
  terms: {
    en: {
      title: 'Terms of use',
      paragraphs: [
        'This site is an independent visitor-information guide for Pettah Floating Market in Colombo, Sri Lanka. It is not operated by the market, any government body, or a commercial operator, and is provided for general orientation only.',
        'There are no accounts, bookings, payments, or contact forms on the site. We do not collect or store personal information through the site itself. Links to other websites open those providers’ pages under their own terms.',
        'The information here — including access status, opening times, directions, and descriptions — is compiled from public sources and visitor reports. It may be out of date or inaccurate, and the site can change without notice. You are responsible for checking current details before you travel.',
        'Maps, weather data, and external links are provided by third parties such as Google and Open-Meteo. Their availability, accuracy, and terms of use are outside our control. Weather forecasts are model estimates, not a guarantee of safe or open access.',
        'Illustrations on the site are original symbolic images released under CC0 (public domain). This guide is not affiliated with Google, Open-Meteo, Cloudflare, or any operator mentioned. Place and service names are used for identification only.',
      ],
    },
    si: {
      title: 'භාවිතයේ කොන්දේසි',
      paragraphs: [
        'මෙම අඩවිය කොළඹ, ශ්‍රී ලංකාවේ පිටකොටුව පාවෙන වෙළඳපොළ සඳහා ස්වාධීන මාර්ගෝපදේශයකි. එය වෙළඳපොළ, රජයේ ආයතන හෝ වාණිජ සේවාදායකයෙකු විසින් පවත්වාගෙන නොයන අතර සාමාන්‍ය දැනුවත් කිරීම සඳහා පමණක් සපයයි.',
        'අඩවියේ ගිණුම්, වෙන්කිරීම්, ගෙවීම් හෝ සම්බන්ධතා පෝරම නැත. අඩවිය හරහා අපි පුද්ගලික තොරතුරු රැස් නොකරන හෝ ගබඩා නොකරමු. වෙනත් වෙබ් අඩවිවලට සබැඳි ඒවායේ සැපයුම්කරුවන්ගේ කොන්දේසි යටතේ ඔවුන්ගේ පිටුවලට විවෘත වේ.',
        'මෙහි ඇති තොරතුරු — ප්‍රවේශය, වේලාවන්, මාර්ග සහ විස්තර ඇතුළුව — පොදු මූලාශ්‍ර සහ මාර්ගෝපදේශකරුවන්ගේ වාර්තාවලින් රැස් කර ඇත. ඒවා කල්ගත හෝ නිවැරදි නොවිය හැකි අතර පෙර නිවේදනයකින් තොරව අඩවිය වෙනස් විය හැක. ඔබ ගමන් කිරීමට පෙර වත්මන් තොරතුරු පරීක්ෂා කිරීම ඔබගේ වගකීමයි.',
        'සිතියම්, කාලගුණ දත්ත සහ බාහිර සබැඳි Google සහ Open-Meteo වැනි තෙවන පාර්ශවයන් විසින් සපයනු ලැබේ. ඒවායේ ලබාගත හැකි බව, නිරවද්‍යතාව සහ භාවිත කොන්දේසි අපගේ පාලනයෙන් පිටතින් වේ. කාලගුණ අනාවැකි ආකෘති ඇස්තමේන්තු පමණක් වන අතර ආරක්ෂිත හෝ විවෘත ප්‍රවේශයක් පිළිබඳ සහතිකයක් නොවේ.',
        'අඩවියේ රූපරූ අපගේ CC0 (සාර්වජනික ක්ෂේත්‍රය) යටතේ නිකුත් කර ඇති සංකේතාත්මක නිදර්ශන වේ. මෙම මාර්ගෝපදේශය Google, Open-Meteo, Cloudflare හෝ සඳහන් කර ඇති සේවාදායකයෙකු සමඟ සම්බන්ධතාවයක් නොදරයි. ස්ථාන සහ සේවා නාම ඒවා හඳුනාගැනීම සඳහා පමණක් භාවිත කරයි.',
      ],
    },
    ta: {
      title: 'பயன்பாட்டு விதிமுறைகள்',
      paragraphs: [
        'இந்தத் தளம் இலங்கை, கொழும்பிலுள்ள பிட்டகோட்டை மிதக்கும் சந்தைக்கான சுயாதீன வருகையாளர் தகவல் வழிகாட்டி. இது சந்தை, அரசு அமைப்பு அல்லது வணிகச் சேவை வழங்குநரால் நடத்தப்படுவதில்லை; பொதுவான அறிவுறுத்தலுக்காக மட்டுமே வழங்கப்படுகிறது.',
        'இத்தளத்தில் கணக்குகள், முன்பதிவுகள், கட்டணங்கள் அல்லது தொடர்புத் தடங்கள் இல்லை. தளம் வழியாக நாங்கள் தனிப்பட்ட தகவல்களைச் சேகரிப்பதோ சேமிப்பதோ இல்லை. மற்ற வலைத்தளங்களுக்கான இணைப்புகள் அவற்றின் வழங்குநர்களின் பக்கங்களை அவர்களது சொந்த விதிமுறைகளின் கீழ் திறக்கும்.',
        'இங்குள்ள தகவல்கள் — அணுகல் நிலை, திறந்திருக்கும் நேரம், வழிகள் மற்றும் விளக்கங்கள் உட்பட — பொதுச் சான்றுகள் மற்றும் வருகையாளர் அறிக்கைகளிலிருந்து தொகுக்கப்பட்டவை. அவை காலாவதியானதாகவோ தவறானதாகவோ இருக்கலாம், மேலும் முன்னறிவிப்பின்றித் தளம் மாறலாம். நீங்கள் பயணிக்கும் முன் தற்போதைய விவரங்களைச் சரிபார்ப்பது உங்கள் பொறுப்பாகும்.',
        'வரைபடங்கள், வானிலைத் தரவு மற்றும் வெளி இணைப்புகள் Google மற்றும் Open-Meteo போன்ற மூன்றாம் தரப்பினரால் வழங்கப்படுகின்றன. அவற்றின் கிடைக்கும் தன்மை, துல்லியம் மற்றும் பயன்பாட்டு விதிமுறைகள் எங்கள் கட்டுப்பாட்டுக்கு அப்பாற்பட்டவை. வானிலை முன்னறிவிப்புகள் மாதிரி மதிப்பீடுகள் மட்டுமே; பாதுகாப்பான அல்லது திறந்த அணுகலுக்கான உத்தரவாதம் அல்ல.',
        'தளத்திலுள்ள ஓவியங்கள் CC0 (பொதுக் களம்) நிலையில் வெளியிடப்பட்ட எங்களது சொந்த குறியீட்டு விளக்கப்படங்கள். இந்த வழிகாட்டி Google, Open-Meteo, Cloudflare அல்லது குறிப்பிடப்பட்ட எந்தச் சேவை வழங்குநருடனும் தொடர்புடையது அல்ல. இடம் மற்றும் சேவைப் பெயர்கள் அடையாளம் காண்பதற்காக மட்டுமே பயன்படுத்தப்படுகின்றன.',
      ],
    },
    zh: {
      title: '使用条款',
      paragraphs: [
        '本网站是关于斯里兰卡科伦坡佩塔水上市场的独立游客信息指南，并非由市场、任何政府机构或商业运营方经营，仅供一般参考。',
        '本站不提供账户、预订、付款或联系表单，也不通过网站本身收集或存储个人信息。其他网站的链接会在其提供方的条款下打开相应页面。',
        '本站信息（包括开放状态、营业时间、路线与描述）整理自公开来源与游客反馈，可能过时或不准确，且网站内容可能未经通知而变更。出行前请自行核实最新信息。',
        '地图、天气数据及外部链接由 Google、Open-Meteo 等第三方提供，其可用性、准确性与使用条款不在本站控制范围内。天气预报仅为模型估计，并非安全通行或开放进入的保证。',
        '本站插图为原创符号示意图像，以 CC0（公共领域）发布。本指南与 Google、Open-Meteo、Cloudflare 或任何提及的运营方无隶属关系。地点与服务名称仅用于识别。',
      ],
    },
  },
  cookieSettings: {
    en: {
      title: 'Cookie settings',
      paragraphs: [
        'This guide does not show a consent banner or preference center. Below is what we know about cookies and similar measurement on these pages, and how you can control them in your browser.',
        'Cloudflare, which delivers these pages, includes Web Analytics measurement. Cloudflare describes this as a cookie-free service that uses privacy-preserving methods instead of identifiers stored on your device.',
        'A legacy Google Analytics loader exists in the page code but runs only if your browser already carries the exact cookie gtag_consent=granted. This site provides no control to create or change that cookie. If you do not have it, no Google measurement request is sent. To stop it, clear this site’s cookies in your browser (for example, remove gtag_consent); this prevents later page loads from triggering the loader, though an already loaded script is not removed retroactively.',
        'The embedded Google map and outbound links contact their providers when used; those providers may set their own cookies under their own policies.',
        'To reduce measurement and cookies, you can enable your browser’s tracking-protection or ‘Do Not Track’ mode, block third-party requests, or clear site cookies. Blocking these requests does not affect the readable content of the guide.',
      ],
    },
    si: {
      title: 'කුකී සැකසුම්',
      paragraphs: [
        'මෙම මාර්ගෝපදේශය කරදර පත්‍රයක් හෝ මනාප මධ්‍යස්ථානයක් නොපෙන්වයි. මෙම පිටුවල කුකී සහ ඒවා හා සමාන මිනුම් ගැන අපි දන්නා දේ සහ ඒවා ඔබේ බ්‍රව්සරයේ පාලනය කරන ආකාරය පහතින් ඇත.',
        'මෙම පිටු සපයන Cloudflare තුළ Web Analytics මිනුමක් ඇතුළත් වේ. Cloudflare මෙය ඔබේ උපාංගයේ ගබඩා කරන හැඳුනුම් යෙදුම් වෙනුවට පෞද්ගලිකත්වය ආරක්ෂා කරන ක්‍රම භාවිත කරන කුකී රහිත සේවාවක් ලෙස විස්තර කරයි.',
        'පිටු කේතයේ පැරණි Google Analytics loader එකක් ඇත්තේ ඔබේ බ්‍රව්සරයේ දැනටමත් gtag_consent=granted යන නිශ්චිත කුකිය තිබේ නම් පමණි. මෙම අඩවියේ ඒ කුකිය සැදීමට හෝ වෙනස් කිරීමට පාලනයක් නැත. එය නොමැතිනම් Google වෙත මිනුම් ඉල්ලීමක් යවනු නොලැබේ. එය නැවැත්තේ නම් ඔබේ බ්‍රව්සරයේ මෙම අඩවියේ කුකී ඉවත් කරන්න (උදාහරණයක් ලෙස gtag_consent ඉවත් කරන්න); මෙයට පසුව පිටු පැටවීම්වල loader ක්‍රියාත්මක වීම වළක්කුණු නමුත් දැනට පැටවූ script එක ආපසු ඉවත් නොවේ.',
        'පෙනීම් සිතියම සහ බාහිර සබැඳි භාවිතා කරන විට ඒවායේ සැපයුම්කරුවන් වෙත සම්බන්ධ වේ; ඒ සැපයුම්කරුවන් ඔවුන්ගේම ප්‍රතිපත්ති යටතේ කුකී සැකසිය හැක.',
        'මිනුම් සහ කුකී අඩු කිරීමට, ඔබේ බ්‍රව්සරයේ නිරීක්ෂණ ආරක්ෂණය හෝ ‘Do Not Track’ ක්‍රමය සක්‍රිය කරන්න, තෙවන පාර්ශව ඉල්ලීම් අවහිර කරන්න, නැතහොත් අඩවි කුකී ඉවත් කරන්න. මෙම ඉල්ලීම් අවහිර කිරීම මාර්ගෝපදේශයේ කියවිය හැකි අන්තර්ගතයට බලපිතිය නොකරයි.',
      ],
    },
    ta: {
      title: 'குக்கீ அமைப்புகள்',
      paragraphs: [
        'இந்த வழிகாட்டியில் சம்மதப் பட்டை அல்லது விருப்ப மையம் இல்லை. இப்பக்கங்களில் உள்ள குக்கீகள் மற்றும் அவற்றை ஒத்த அளவீடுகள் பற்றியும், அவற்றை உலாவியில் எப்படிக் கட்டுப்படுத்துவது என்பதையும் கீழே காண்பிக்கிறோம்.',
        'இப்பக்கங்களை வழங்கும் Cloudflare இல் Web Analytics அளவீடு உள்ளது. அது குக்கீகளைப் பயன்படுத்தாத, உங்கள் சாதனத்தில் சேமிக்கப்படும் அடையாளங்களுக்குப் பதிலாக தனியுரிமையைப் பாதுகாக்கும் முறைகளைப் பயன்படுத்தும் சேவை என Cloudflare விவரிக்கிறது.',
        'பக்கக் குறியீட்டில் பழைய Google Analytics loader உள்ளது, ஆனால் உங்கள் உலாவியில் ஏற்கெனவே gtag_consent=granted என்ற சரியான குக்கீ இருந்தால் மட்டுமே இயங்கும். அந்தக் குக்கீயை உருவாக்கவோ மாற்றவோ இத்தளத்தில் கட்டுப்பாடு இல்லை. அது இல்லையெனில் Google அளவீட்டுக் கோரிக்கை எதுவும் அனுப்பப்படாது. அதை நிறுத்த, உலாவியில் இத்தளத்தின் குக்கீகளை அழிக்கவும் (எடுத்துக்காட்டாக, gtag_consent ஐ அகற்றவும்); இது பிற்காலப் பக்க ஏற்றங்களில் loader இயங்குவதைத் தடுக்கும், ஆனால் ஏற்கெனவே ஏற்றப்பட்ட ச்கிரிப்ட் பின்னோக்கிப் பெற்றோடப்படாது.',
        'பதிக்கப்பட்ட Google வரைபடமும் வெளி இணைப்புகளும் பயன்படுத்தும்போது அவற்றின் வழங்குநர்களைத் தொடர்புகொள்கின்றன; அவர்கள் தங்கள் சொந்தக் கொள்கைகளின் கீழ் குக்கீகளை அமைக்கலாம்.',
        'அளவீடு மற்றும் குக்கீகளைக் குறைக்க, உலாவியின் கண்காணிப்புத் தடுப்பு அல்லது ‘Do Not Track’ முறையை இயக்கவும், மூன்றாம் தரப்புக் கோரிக்கைகளைத் தடுக்கவும், அல்லது தளக் குக்கீகளை அழிக்கவும். இக்கோரிக்கைகளைத் தடுப்பது வழிகாட்டியின் படிக்கக்கூடிய உள்ளடக்கத்தைப் பாதிப்பதில்லை.',
      ],
    },
    zh: {
      title: 'Cookie 设置',
      paragraphs: [
        '本指南不显示同意横幅或偏好中心。以下说明我们所了解的本站 Cookie 及类似测量机制，以及你如何在浏览器中管理它们。',
        '负责托管本页面的 Cloudflare 包含 Web Analytics 测量。Cloudflare 将其描述为一项不使用 Cookie 的服务，采用保护隐私的方式，而非在你设备上存储标识符。',
        '页面代码中保留了旧版 Google Analytics 加载逻辑，但仅当你的浏览器已存在精确的 gtag_consent=granted Cookie 时才会运行。本站不提供创建或更改该 Cookie 的控制。若你不存在该 Cookie，则不会向 Google 发送任何测量请求。要停止它，请在浏览器中清除本站 Cookie（例如移除 gtag_consent）；这能阻止之后的页面加载触发该加载逻辑，但已载入的脚本不会被追溯卸载。',
        '嵌入的 Google 地图与外部链接在使用时会连接其提供方，这些提供方可能依据各自政策设置自己的 Cookie。',
        '要减少测量与 Cookie，你可以开启浏览器的跟踪保护或“请勿跟踪（Do Not Track）”模式、阻止第三方请求，或清除站点 Cookie。阻止这些请求不会影响指南的可读内容。',
      ],
    },
  },
};

export const legalLabels: Record<Locale, Record<LegalKey, string>> = {
  en: { privacy: 'Privacy', terms: 'Terms', cookieSettings: 'Cookie settings' },
  si: { privacy: 'පෞද්ගලිකත්වය', terms: 'භාවිත කොන්දේසි', cookieSettings: 'කුකී' },
  ta: { privacy: 'தனியுரிமை', terms: 'விதிமுறைகள்', cookieSettings: 'குக்கீ அமைப்புகள்' },
  zh: { privacy: '隐私', terms: '条款', cookieSettings: 'Cookie 设置' },
};
