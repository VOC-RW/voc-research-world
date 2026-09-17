function esc(value=""){
  return String(value).replace(/[&<>"']/g, c => ({
    "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"
  }[c]));
}
function author(id){ return VOC_AUTHORS[id] || VOC_AUTHORS.voc; }
function articleCard(a){
  const au = author(a.authorId);
  return `<article class="card article-card">
    <div class="card-top"><span class="tag">${esc(a.category)}</span><span class="small">${esc(a.readTime)}</span></div>
    <h3>${esc(a.title)}</h3>
    <p>${esc(a.summary)}</p>
    <div class="meta">${esc(au.name)} · ${esc(a.date)}</div>
    <a class="arrow" href="article.html?id=${encodeURIComponent(a.id)}">Read article →</a>
  </article>`;
}
function projectCard(p){
  return `<article class="card project-card">
    <span class="tag">${esc(p.area)}</span>
    <h3>${esc(p.title)}</h3>
    <p>${esc(p.summary)}</p>
    <div class="meta">${esc(p.status)}</div>
    <a class="arrow" href="project.html?id=${encodeURIComponent(p.id)}">Open project →</a>
  </article>`;
}
function initYear(){ document.querySelectorAll("[data-year]").forEach(x=>x.textContent=new Date().getFullYear()); }
function initMenu(){
  const btn=document.querySelector(".menu-btn"), nav=document.querySelector("#mobileNav");
  if(!btn || !nav) return;
  btn.addEventListener("click",()=>nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>nav.classList.remove("open")));
}
function renderArticleList(targetId, query=""){
  const target=document.getElementById(targetId);
  if(!target) return;
  const q=query.toLowerCase().trim();
  const items=Object.values(VOC_ARTICLES).filter(a =>
    !q || `${a.title} ${a.category} ${a.summary} ${a.keywords.join(" ")}`.toLowerCase().includes(q)
  );
  target.innerHTML=items.length ? items.map(articleCard).join("") :
    `<div class="empty"><h3>No matching articles</h3><p>Try another keyword or category.</p></div>`;
}
function initSearch(){
  const input=document.getElementById("articleSearch");
  if(!input) return;
  renderArticleList("articleGrid");
  input.addEventListener("input",()=>renderArticleList("articleGrid",input.value));
  document.querySelectorAll("[data-filter]").forEach(btn=>{
    btn.addEventListener("click",()=>{
      input.value=btn.dataset.filter;
      renderArticleList("articleGrid",input.value);
      document.getElementById("articleGrid").scrollIntoView({behavior:"smooth",block:"start"});
    });
  });
}
document.addEventListener("DOMContentLoaded",()=>{initYear();initMenu();initSearch();});
