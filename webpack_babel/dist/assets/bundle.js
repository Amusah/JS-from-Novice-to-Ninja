(()=>{"use strict";console.log("dom file");var e,n=document.querySelector("body"),r=[{name:"mario",premium:!0},{name:"luigi",premium:!1},{name:"yoshi",premium:!0},{name:"toad",premium:!0},{name:"peach",premium:!1}],t=new Set;function o(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return a(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,n){(null==n||n>e.length)&&(n=e.length);for(var r=0,t=new Array(n);r<n;r++)t[r]=e[r];return t}t.add({name:"Henry Amusah",age:"26",job:"IT Support"});var i,u=function(e){return e.filter((function(e){return e.premium}))}(r);console.log(r,u),console.log("this is the index.js file"),(i=document.createElement("h1")).textContent="test",n.appendChild(i),n.style.background="peachpuff",document.write("henry@droneTech.co.gh".concat(" nana is a kinda good dude")),console.log(o(t)),(e=console).log.apply(e,o([1,2,3,4,5,6,6]).concat(["wohoo"]))})();