(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();document.getElementById("app").innerHTML=`
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
         <button type="submit" class="form__btn">Отправить</button>
      </form>
      </section>
`;const i="https://discord.com/api/webhooks/1407050566772981841/hq-C7Dttac7s-5fhMXc30E1pI3sPZljjsK9BIh-73X-HMbKnHuhS2NlSPw1xpABEp_M6";document.getElementById("botForm").addEventListener("submit",async n=>{n.preventDefault();const r=document.getElementById("botName").value,s=document.getElementById("message").value,o=document.getElementById("message");o.addEventListener("input",()=>{o.style.height="auto",o.style.height=o.scrollHeight+"px"});const e={username:r,content:s,avatar_url:"https://media.discordapp.net/attachments/1407053961873195018/1407054018781646961/WebhookAva.jpg?ex=68a4b4ab&is=68a3632b&hm=d99b73b7b2b60ada1ee1d77513ce74951239728749814f8b1a256b10760b2f0b&=&format=webp&width=640&height=640"};try{await fetch(i,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}),alert("Отправлено!")}catch(t){alert("Ошибка "+t)}o.value="",o.style.height=""});
