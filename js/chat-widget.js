(function(){
  var NUM="256792534423";
  var answers={
    services:"Massage, professional cuddling, friendly companionship and special experiences — all “from” prices. Final price depends on time, place and group size, so tell us your budget and we'll suggest what fits.",
    book:"Easiest way: use our booking form — it pre-fills the service and length, then WhatsApp opens with everything ready to send. Or just message us your name, service, area and preferred time.",
    safe:"Everything we offer is strictly non-sexual and platonic. Practitioners are trained and vetted. You stay clothed or covered, you set the limits, and can stop any time. Companionship is always in public places.",
    area:"We serve Kampala, Kira and Wakiso. Tell us your area on WhatsApp and we'll confirm we can reach you and roughly when."
  };
  var ctaText={
    services:"Hello, I'd like to know more about your services and prices.",
    book:"Hello, I'd like to book a session.",
    safe:"Hello, I have a question about how sessions work.",
    area:"Hello, is Calm Touch available in my area?"
  };
  var toggle=document.getElementById("chatwToggle"),panel=document.getElementById("chatwPanel"),body=document.getElementById("chatwBody"),cta=document.getElementById("chatwCta");
  if(!toggle) return;
  toggle.addEventListener("click",function(){
    var open=toggle.getAttribute("aria-expanded")==="true";
    toggle.setAttribute("aria-expanded",String(!open));
    panel.hidden=open;
  });
  body.addEventListener("click",function(e){
    var btn=e.target.closest("button[data-a]");
    if(!btn) return;
    var key=btn.getAttribute("data-a");
    var quick=document.getElementById("chatwQuick");
    var userMsg=document.createElement("div");
    userMsg.className="chatw-msg user";
    userMsg.textContent=btn.textContent;
    var botMsg=document.createElement("div");
    botMsg.className="chatw-msg bot";
    botMsg.textContent=answers[key];
    if(quick) quick.remove();
    body.appendChild(userMsg);
    body.appendChild(botMsg);
    body.scrollTop=body.scrollHeight;
    if(ctaText[key]) cta.href="https://wa.me/"+NUM+"?text="+encodeURIComponent(ctaText[key]);
  });
})();
