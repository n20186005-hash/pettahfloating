/** Pure-static Astro assets plus a bounded same-origin model-weather proxy. */
const WEATHER_URL = 'https://api.open-meteo.com/v1/forecast?latitude=6.9329&longitude=79.8554&current=temperature_2m,relative_humidity_2m,apparent_temperature,precipitation_probability,weather_code,wind_speed_10m,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,uv_index_max&timezone=Asia%2FColombo&forecast_days=7';
export function validWeather(d, now=Date.now()) {
  const c=d?.current,a=d?.daily;
  const stamp=Date.parse(`${c?.time}+05:30`);
  const day=new Date(now+19800000).toISOString().slice(0,10);
  const codes=[0,1,2,3,45,48,51,53,55,56,57,61,63,65,66,67,71,73,75,77,80,81,82,85,86,95,96,99];
  return codes.includes(c?.weather_code) && a?.weather_code?.every(v=>codes.includes(v)) && d?.timezone==='Asia/Colombo' && Number.isFinite(stamp) && now-stamp < 4*3600000 && stamp-now < 3600000 &&
    ['temperature_2m','apparent_temperature','relative_humidity_2m','precipitation_probability','weather_code','wind_speed_10m'].every(k=>Number.isFinite(c?.[k])) &&
    [c.relative_humidity_2m,c.precipitation_probability].every(n=>n>=0&&n<=100) && c.wind_speed_10m>=0 &&
    Array.isArray(a?.time)&&a.time.length===7&&a.time[0]===day && a.time.every((t,i)=>t===new Date(Date.parse(`${day}T00:00:00Z`)+i*86400000).toISOString().slice(0,10)) &&
    ['weather_code','temperature_2m_max','temperature_2m_min','precipitation_probability_max','uv_index_max'].every(k=>Array.isArray(a[k])&&a[k].length===7&&a[k].every(Number.isFinite));
}
const json=(body,status=200,cache='no-store')=>new Response(JSON.stringify(body),{status,headers:{'content-type':'application/json; charset=utf-8','cache-control':cache}});
async function weather(request,ctx){
  if(!['GET','HEAD'].includes(request.method))return new Response(null,{status:405,headers:{allow:'GET, HEAD','cache-control':'no-store'}});
  const key=new Request('https://pettahfloating.com/api/weather');
  const cache=globalThis.caches?.default;
  const cached=await cache?.match(key);
  if(cached){try{const d=await cached.clone().json();if(validWeather(d)&&Date.now()-Date.parse(d.guide?.fetchedAt)<900000)return request.method==='HEAD'?new Response(null,cached):cached;}catch{}}
  try{
    const upstream=await fetch(WEATHER_URL,{signal:AbortSignal.timeout(8000),cf:{cacheTtl:0}});
    if(!upstream.ok)throw Error('upstream');
    const d=await upstream.json();if(!validWeather(d))throw Error('invalid or stale');
    d.guide={fetchedAt:new Date().toISOString(),source:'Open-Meteo model forecast',timezone:'Asia/Colombo'};
    const response=json(d,200,'public, max-age=0, s-maxage=900');
    if(cache)ctx.waitUntil(cache.put(key,response.clone()));
    return request.method==='HEAD'?new Response(null,response):response;
  }catch{return json({error:'weather_unavailable'},503);}
}
export default {async fetch(request,env,ctx){
  const url=new URL(request.url);
  if(url.hostname==='www.pettahfloating.com'||(url.hostname==='pettahfloating.com'&&url.protocol==='http:')){url.hostname='pettahfloating.com';url.protocol='https:';return Response.redirect(url,301);}
  if(url.pathname==='/api/weather')return weather(request,ctx);
  if(/\/index\.html$/.test(url.pathname)){url.pathname=url.pathname.replace(/index\.html$/,'');return Response.redirect(url,301);}
  const explicit=/^\/404(?:\.html)?\/?$/.test(url.pathname);
  const response=await env.ASSETS.fetch(explicit?new Request(new URL('/404',url),request):request);
  if(explicit||response.status===404){const h=new Headers(response.headers);h.set('x-robots-tag','noindex');h.set('cache-control','no-store');return new Response(request.method==='HEAD'?null:response.body,{status:404,headers:h});}
  return response;
}};
