const e={head:document.querySelector(".header_bgr")},d=()=>window.pageYOffset||document.documentElement.scrollTop,n=()=>e.head.classList.contains("hide");let i=0;function s(){window.innerWidth<768&&e.head.classList.contains("fixed-header")&&(d()>i&&!n()&&d()>600?e.head.classList.add("hide"):d()<i&&n()&&e.head.classList.remove("hide"),i=d())}window.addEventListener("scroll",s),window.onresize=function(){s()};
//# sourceMappingURL=index.2e6b056d.js.map
