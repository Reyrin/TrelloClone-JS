"use strict";var cur,items=document.querySelectorAll(".card__item"),placeholders=document.querySelectorAll(".card");items.forEach((function(e){e.setAttribute("draggable",!0),e.addEventListener("dragstart",(function(t){cur=t.target,setTimeout((function(){e.classList.add("hide")}),0)})),e.addEventListener("dragend",(function(t){e.classList.remove("hide")}))})),placeholders.forEach((function(e){e.addEventListener("dragover",(function(){e.appendChild(cur)})),e.addEventListener("dragenter",(function(){e.classList.add("line")})),e.addEventListener("dragleave",(function(){e.classList.remove("line")}))}));