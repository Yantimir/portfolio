(()=>{"use strict";const e=document.body,t=document.querySelector(".menu__body"),c=document.querySelector(".menu__icon");t&&c&&(c.addEventListener("click",(()=>{t.classList.toggle("active"),c.classList.toggle("active"),e.classList.toggle("lock")})),t.addEventListener("click",(s=>{s.target.classList.contains("menu__body")&&(t.classList.remove("active"),c.classList.remove("active"),e.classList.remove("lock"))})),t.querySelectorAll(".menu__link").forEach((s=>{s.addEventListener("click",(()=>{t.classList.remove("active"),c.classList.remove("active"),e.classList.remove("lock")}))}))),document.querySelectorAll('a[href*="#"]').forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const c=e.getAttribute("href").substring(1);document.getElementById(c).scrollIntoView({behavior:"smooth",block:"start"})}))}))})();