function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},a=n.parcelRequire3d8b;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){o[e]=t},n.parcelRequire3d8b=a),a.register("kyEFX",(function(t,n){var r,o;e(t.exports,"register",(function(){return r}),(function(e){return r=e})),e(t.exports,"resolve",(function(){return o}),(function(e){return o=e}));var a={};r=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)a[t[n]]=e[t[n]]},o=function(e){var t=a[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),a("kyEFX").register(JSON.parse('{"7bk21":"index.571f21d2.js","2Xtj3":"notfoundDesc.7a565a30.png","2n16u":"notfoundTab.fbc49068.png","iKi7H":"notfoundMob.cc203125.png"}'));(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".burger-btn-open");t.addEventListener("click",(()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}));const n=document.querySelector(".home-current"),r=document.querySelector(".favorite-current"),o=document.querySelector(".read-current");window.location.href.includes("#readPage.html")&&o.classList.add("current"),window.location.href.includes("#favoritePage.html")&&r.classList.add("current"),window.location.href.includes("#mainPage.html")&&n.classList.add("current")})();var i={};i=new URL(a("kyEFX").resolve("2Xtj3"),import.meta.url).toString();var s={};s=new URL(a("kyEFX").resolve("2n16u"),import.meta.url).toString();var c={};c=new URL(a("kyEFX").resolve("iKi7H"),import.meta.url).toString();const d={form:document.querySelector(".header-search-form"),input:document.querySelector(".header-search-input"),submitButton:document.querySelector(".header-button-makesearch"),openInputButton:document.querySelector(".header-button-opensearch"),withoutNewsContainer:document.querySelector(".container__error"),newsList:document.querySelector(".wrapper__list")},{form:l,input:u,submitButton:m,openInputButton:p,withoutNewsContainer:h,newsList:f}=d,g="kAFi92vRzv66C7DQ6coSA3C5NLbSIILk";l.addEventListener("submit",(function(e){b=e.currentTarget.elements.newsField.value.trim(),e.preventDefault(),(t=b,fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${t}&api-key=${g}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>0===e.response.docs.length?(l.reset(),f.innerHTML="",v()):(function(e){const t=e.map((e=>{const t=e.abstract.slice(0,100)+"...",n=(e.headline.main.slice(0,60),e.pub_date.toString().slice(0,10).replace("-","/").replace("-","/"));let r,o;return 0===e.multimedia.length?r="https://st.depositphotos.com/1000558/53737/v/1600/depositphotos_537370102-stock-illustration-image-photo-sign-symbol-template.jpg":e.multimedia.length>0&&(o="https://static01.nyt.com/",r=o+e.multimedia[0].url),`<li class = "card-item" data-id = "${e.title}">\n    <div class="card-wrapper">\n      <div class="card-thumb">\n        <img class="card-image" src = "${r}" alt = "${e.byline}">\n        <p class="card-news-category">${e.section_name}</p>\n        <p class="card-text-read">Already read</p>\n        <button class="favorite-button" type="button" data-action="favorite-button">Add to favorite\n        <svg class="add-to-favourite"width ="16" height="16"><use href="../images/symbol-defs.svg#icon-heart"></use><svg></button>\n      </div>\n      <h3 class="card-news-title">${e.headline.main}</h3>\n      <p class="card-news-description">${t}</p>\n      <div class="card-info-container">\n        <p class="card-datetime">${n}</p>\n        <a class="card-link" href="${e.web_url}" target="_blank" rel="noopener noreferrer nofollow">Read more</a>\n      </div>\n    </div>\n</li>`})).join("");f.innerHTML=t}(e.response.docs),e.response.docs))).catch(w);var t})),p.addEventListener("click",(function(e){p.style.display="none",l.style.display="block"}));let b="";function v(){const e=`<h2 class="withoutnews-title">We haven’t found news from <br> this category</h2><picture>\n                  <source\n                    media="(min-width:1280px)"\n                    srcset="${t(i)}"\n                  />\n\n                  <source\n                    media="(min-width:768px)"\n                    srcset="\n                      ${t(s)}\n                    "\n                  />\n\n                  <img\n                    srcset="\n                      ${t(c)}\n                    "\n                    alt="There aren't news"\n                    src="${t(c)}"\n                    loading="lazy"\n                    class="withoutnews-image"\n                  />\n                </picture>`;h.innerHTML=e}function w(e){v(),console.log(e)}const y=document.querySelector(".switch-checkbox"),S=document.querySelector("body");y.addEventListener("click",(function(){S.classList.toggle("darkTheme"),"dark"!==localStorage.getItem("theme")?localStorage.setItem("theme","dark"):localStorage.removeItem("theme")})),function(){try{"dark"===localStorage.getItem("theme")&&(bodyTheme.classList.add("darkTheme"),y.checked=!0)}catch(e){}}();
//# sourceMappingURL=index.571f21d2.js.map
