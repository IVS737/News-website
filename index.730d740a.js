(()=>{const e=document.querySelector(".js-menu-container"),t=document.querySelector(".js-open-menu"),o=document.querySelector(".js-close-menu"),c=()=>{const o="true"===t.getAttribute("aria-expanded")||!1;t.setAttribute("aria-expanded",!o),e.classList.toggle("is-open");bodyScrollLock[o?"enableBodyScroll":"disableBodyScroll"](document.body)};t.addEventListener("click",c),o.addEventListener("click",c),window.matchMedia("(min-width: 768px)").addEventListener("change",(o=>{o.matches&&(e.classList.remove("is-open"),t.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}));const n=document.querySelector(".home-current"),r=document.querySelector(".favorite-current"),d=document.querySelector(".read-current");window.location.href.includes("#readPage.html")&&d.classList.add("current"),window.location.href.includes("#favoritePage.html")&&r.classList.add("current"),window.location.href.includes("#mainPage.html")&&n.classList.add("current")})();
//# sourceMappingURL=index.730d740a.js.map
