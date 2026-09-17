const articles = [
  {title:"Understanding Metabolic Regulation", category:"Biochemistry", text:"How cells coordinate carbohydrate, lipid and protein metabolism through enzymes, hormones and feedback mechanisms."},
  {title:"A Practical Introduction to AAS", category:"Instrumentation", text:"The principle, major components, applications and limitations of atomic absorption spectroscopy."},
  {title:"From Laboratory Data to Insight", category:"Data & AI", text:"How structured laboratory data can support analysis, quality control and scientific decision-making."},
  {title:"Quality Assurance in the Laboratory", category:"Laboratory Science", text:"Understanding quality systems, documentation, controls and reliable laboratory results."},
  {title:"Natural Products and Bioactive Compounds", category:"Natural Products", text:"How scientists investigate plants and other natural sources for chemically and biologically active compounds."},
  {title:"Experimental Design for Beginners", category:"Research Methods", text:"Core ideas in variables, controls, replication, measurement and reproducible scientific research."}
];

function renderArticles(filter=""){
  const box=document.getElementById("articles");
  if(!box) return;
  const q=filter.trim().toLowerCase();
  const found=articles.filter(a =>
    !q || `${a.title} ${a.category} ${a.text}`.toLowerCase().includes(q)
  );
  box.innerHTML=found.length ? found.map((a,i)=>`
    <article class="card">
      <span class="tag">${a.category}</span>
      <h3>${a.title}</h3>
      <p>${a.text}</p>
      <a class="read" href="article.html?id=${i}">Read article →</a>
    </article>
  `).join("") : `<p>No articles matched your search.</p>`;
}

document.addEventListener("DOMContentLoaded",()=>{
  renderArticles();
  const search=document.getElementById("search");
  if(search) search.addEventListener("input",e=>renderArticles(e.target.value));

  const menu=document.querySelector(".menu");
  const nav=document.querySelector(".nav nav");
  if(menu && nav){
    menu.addEventListener("click",()=>{
      const open=nav.classList.toggle("open");
      menu.setAttribute("aria-expanded",String(open));
      menu.textContent=open ? "✕" : "☰";
    });
    nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{
      nav.classList.remove("open");
      menu.setAttribute("aria-expanded","false");
      menu.textContent="☰";
    }));
  }

  const year=document.getElementById("year");
  if(year) year.textContent=new Date().getFullYear();
});
