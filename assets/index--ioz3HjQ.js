(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.getElementById("app").innerHTML=`
<section class="container">
      <header class="header__title">
         <h1>Добавление новостей на Березово</h1>
      </header>
      <form id="botForm" class="form">
         <div class="form__name-bot">
            <label for="botName" class="form__name-title">Введите название бота</label><br>
            <input type="text" id="botName" name="botName" class="form__name-input" required>
         </div>
         <div class="form__text-bot">
            <label for="message" class="form__text-title">Введите текст сообщения</label><br>
            <textarea id="message" name="message" class="form__text-input" rows="4" required></textarea>
         </div>
         <div class="form__webhook form__text-bot">
            <label for="webhookURL">Ссылка вебхука</label><br>
            <input type="text" id="webhookURL" name="webhookURL" required>
         </div>
         <button type="submit" class="form__btn">Отправить</button>
      </form>
      </section>
`;document.getElementById("botForm").addEventListener("submit",async n=>{n.preventDefault();const o=document.getElementById("webhookURL").value,s=document.getElementById("botName").value,a=document.getElementById("message").value,e=document.getElementById("message");e.addEventListener("input",()=>{e.style.height="auto",e.style.height=e.scrollHeight+"px"});const t={username:s,content:a,avatar_url:"https://media.discordapp.net/attachments/1407053961873195018/1407054018781646961/WebhookAva.jpg?ex=68a4b4ab&is=68a3632b&hm=d99b73b7b2b60ada1ee1d77513ce74951239728749814f8b1a256b10760b2f0b&=&format=webp&width=640&height=640"};try{await fetch(o,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)}),alert("Отправлено!")}catch(r){alert("Ошибка "+r)}e.value="",e.style.height="",document.getElementById("botForm").reset()});
