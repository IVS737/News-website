(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".burger-btn-open");t.addEventListener("click",(()=>{const n="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!n),e.classList.toggle("is-open")})),window.matchMedia("(min-width: 768px)").addEventListener("change",(n=>{n.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1))}));const n=document.querySelector(".home-current"),r=document.querySelector(".favorite-current"),o=document.querySelector(".read-current");window.location.href.includes("#readPage.html")&&o.classList.add("current"),window.location.href.includes("#favoritePage.html")&&r.classList.add("current"),window.location.href.includes("#mainPage.html")&&n.classList.add("current")})();const e={form:document.querySelector(".header-search-form"),input:document.querySelector(".header-search-input"),submitButton:document.querySelector(".header-button-makesearch"),openInputButton:document.querySelector(".header-button-opensearch"),newsContainer:document.querySelector("news-container"),newsList:document.querySelector(".news-list")},{form:t,input:n,submitButton:r,openInputButton:o}=e,c="kAFi92vRzv66C7DQ6coSA3C5NLbSIILk";t.addEventListener("submit",(function(e){s=e.currentTarget.elements.newsField.value.trim(),e.preventDefault(),(n=s,fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${n}&api-key=${c}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((e=>0===e.response.docs.length?(t.reset(),alert("даних немає"),a()):(e.response.docs,e.response.docs))).catch(i);var n})),o.addEventListener("click",(function(e){o.style.display="none",t.style.display="block"}));let s="";function a(){}function i(e){console.log(e)}
//# sourceMappingURL=index.49f0576e.js.map
