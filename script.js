const starterArticles = [
  {title:"Why Scientific Literacy Matters",category:"Research Methods",summary:"How to read scientific claims critically, distinguish evidence from opinion, and communicate research responsibly.",author:"VOC Research World",date:"2026-09-17"},
  {title:"Understanding Oxidative Stress",category:"Biochemistry",summary:"A beginner-friendly introduction to reactive oxygen species, antioxidant systems and biochemical redox balance.",author:"VOC Research World",date:"2026-09-17"},
  {title:"What Does an Analytical Instrument Actually Measure?",category:"Instrumentation",summary:"A practical framework for understanding signals, calibration, sensitivity, selectivity, accuracy and precision.",author:"VOC Research World",date:"2026-09-17"}
];

function getArticles(){
  try{
    const saved=JSON.parse(localStorage.getItem("vocArticles"));
    return Array.isArray(saved)&&saved.length ? saved : starterArticles;
  }catch(e){return starterArticles}
}
function saveArticles(items){localStorage.setItem("vocArticles",JSON.stringify(items))}
function renderArticles(filter=""){
  const grid=document.getElementById("articleGrid"), empty=document.getElementById("emptyState");
  const q=filter.trim().toLowerCase();
  const items=getArticles().filter(a=>(a.title+" "+a.category+" "+a.summary+" "+a.body).toLowerCase().includes(q));
  grid.innerHTML=items.map(a=>`<article class="article">
    <span class="tag">${escapeHtml(a.category)}</span>
    <h3>${escapeHtml(a.title)}</h3>
    <p>${escapeHtml(a.summary)}</p>
    <div class="meta">${escapeHtml(a.author||"VOC Research World")} • ${escapeHtml(a.date||"")}</div>
  </article>`).join("");
  empty.hidden=items.length!==0;
}
function escapeHtml(s=""){return s.replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}

document.getElementById("searchInput").addEventListener("input",e=>renderArticles(e.target.value));
document.querySelectorAll(".category").forEach(btn=>btn.addEventListener("click",()=>{
  document.getElementById("searchInput").value=btn.dataset.category;
  renderArticles(btn.dataset.category);
  document.getElementById("articles").scrollIntoView({behavior:"smooth"});
}));
document.getElementById("publishForm").addEventListener("submit",e=>{
  e.preventDefault();
  const article={
    title:document.getElementById("title").value.trim(),
    category:document.getElementById("category").value,
    summary:document.getElementById("summary").value.trim(),
    body:document.getElementById("body").value.trim(),
    author:document.getElementById("author").value.trim()||"VOC Research World",
    date:new Date().toISOString().slice(0,10)
  };
  const items=getArticles(); items.unshift(article); saveArticles(items); renderArticles();
  e.target.reset();
  document.getElementById("author").value="VOC Research World";
  document.getElementById("formMessage").textContent="Article published on this device.";
  setTimeout(()=>document.getElementById("formMessage").textContent="",3500);
  document.getElementById("articles").scrollIntoView({behavior:"smooth"});
});
document.querySelector(".menu-btn").addEventListener("click",()=>document.getElementById("mainNav").classList.toggle("open"));
document.querySelectorAll("#mainNav a").forEach(a=>a.addEventListener("click",()=>document.getElementById("mainNav").classList.remove("open")));
document.getElementById("year").textContent=new Date().getFullYear();
renderArticles();
