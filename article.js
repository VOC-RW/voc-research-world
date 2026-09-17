function getParam(name){return new URLSearchParams(location.search).get(name);}
function renderArticle(){
  const id=getParam("id") || "metabolism";
  const a=VOC_ARTICLES[id] || VOC_ARTICLES.metabolism;
  const au=author(a.authorId);
  document.title=`${a.title} | VOC Research World`;
  document.getElementById("articleTitle").textContent=a.title;
  document.getElementById("articleSummary").textContent=a.summary;
  document.getElementById("articleMeta").textContent=`${au.name} · ${a.date} · ${a.readTime}`;
  document.getElementById("articleCategory").textContent=a.category;
  document.getElementById("articleBody").innerHTML=a.body.map(([tag,text])=>`<${tag}>${esc(text)}</${tag}>`).join("");
  if(a.diagram==="uvvis"){
    document.getElementById("diagram").innerHTML=`<img src="assets/img/uvvis-workflow.svg" alt="UV–Visible spectrophotometry analytical workflow diagram">`;
  }
  document.getElementById("authorName").textContent=au.name;
  document.getElementById("authorRole").textContent=au.role;
  document.getElementById("authorBio").textContent=au.bio;
  document.getElementById("references").innerHTML=a.references.map((r,i)=>`<li id="ref-${i+1}"><span class="ref-number">[${i+1}]</span> ${esc(r)}</li>`).join("");
  const related=Object.values(VOC_ARTICLES).filter(x=>x.id!==a.id && x.category===a.category).slice(0,2);
  document.getElementById("relatedGrid").innerHTML=(related.length?related:Object.values(VOC_ARTICLES).filter(x=>x.id!==a.id).slice(0,2)).map(articleCard).join("");
}
document.addEventListener("DOMContentLoaded",renderArticle);
