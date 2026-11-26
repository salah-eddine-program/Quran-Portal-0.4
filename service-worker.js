const CACHE_NAME="quran-portal-shell-v5";
const SHELL=["./","./index.html","./assets/css/styles.css","./assets/js/app.js","./assets/images/icon.svg","./manifest.webmanifest"];
self.addEventListener("install",event=>event.waitUntil((async()=>{const cache=await caches.open(CACHE_NAME);await cache.addAll(SHELL);await self.skipWaiting()})()));
self.addEventListener("activate",event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(key=>key!==CACHE_NAME).map(key=>caches.delete(key)));await self.clients.claim()})()));
self.addEventListener("fetch",event=>{
  const request=event.request,url=new URL(request.url);
  if(request.method!=="GET"||url.origin!==self.location.origin||url.pathname.includes("/api/"))return;
  if(request.mode==="navigate"){
    event.respondWith((async()=>{try{const response=await fetch(request);if(response.ok){const cache=await caches.open(CACHE_NAME);await cache.put(request,response.clone())}return response}catch{return await caches.match(request)||await caches.match(new URL("./index.html",self.registration.scope).href)||new Response("أنت غير متصل بالإنترنت.",{status:503,headers:{"Content-Type":"text/plain; charset=utf-8"}})}})());
    return;
  }
  event.respondWith((async()=>{const cached=await caches.match(request);if(cached)return cached;try{const response=await fetch(request);if(response.ok&&response.type==="basic"){const cache=await caches.open(CACHE_NAME);await cache.put(request,response.clone())}return response}catch{return new Response("",{status:503,statusText:"Offline"})}})());
});
