(function(){
  var NUM="256792534423";
  function link(m){return "https://wa.me/"+NUM+"?text="+encodeURIComponent(m);}
  function msg(n,s,l,a,t,b){return "Hello, I would like to book.\nName: "+(n||"")+"\nService: "+(s||"")+"\nLength: "+(l||"")+"\nArea: "+(a||"")+"\nPreferred day and time: "+(t||"")+"\nBudget (UGX): "+(b||"Flexible")+"\nPlease confirm availability and price.";}

  var sel=document.getElementById("s"),len=document.getElementById("l"),f=document.getElementById("f"),send=document.getElementById("send"),err=document.getElementById("err"),pv=document.getElementById("pv");
  if(!f) return;
  var v=function(id){return document.getElementById(id).value.trim();};
  function ok(){return v("n")&&v("a");}
  function update(){
    pv.textContent=msg(v("n"),v("s"),v("l"),v("a"),v("t"),v("b"));
    if(ok()){send.href=link(msg(v("n"),v("s"),v("l"),v("a"),v("t"),v("b")));send.target="_blank";send.classList.remove("off");err.style.display="none";}
    else{send.href="#";send.removeAttribute("target");send.classList.add("off");}
  }
  ["n","s","l","a","t","b"].forEach(function(id){var el=document.getElementById(id);el.addEventListener("input",update);el.addEventListener("change",update);});
  send.addEventListener("click",function(e){
    if(!ok()){e.preventDefault();err.style.display="block";(v("n")?document.getElementById("a"):document.getElementById("n")).focus();}
  });
  f.addEventListener("submit",function(e){e.preventDefault();send.click();});

  // Prefill service/length from query string, e.g. book.html?service=Mobile%20home%20massage&length=60%20min
  var params=new URLSearchParams(location.search);
  var qs=params.get("service"),ql=params.get("length");
  if(qs){
    for(var i=0;i<sel.options.length;i++){if(sel.options[i].text===qs){sel.selectedIndex=i;break;}}
  }
  if(ql){
    for(var j=0;j<len.options.length;j++){if(len.options[j].text===ql){len.selectedIndex=j;break;}}
  }
  update();
})();
