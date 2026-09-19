function getParam(name){return new URLSearchParams(location.search).get(name);}
function renderProject(){
  const id=getParam("id") || "natural";
  const p=VOC_PROJECTS[id] || VOC_PROJECTS.natural;
  document.title=`${p.title} | VOC Research World`;
  document.getElementById("projectTitle").textContent=p.title;
  document.getElementById("projectSummary").textContent=p.summary;
  document.getElementById("projectArea").textContent=p.area;
  document.getElementById("projectStatus").textContent=p.status;
  document.getElementById("projectLead").textContent=p.lead;
  document.getElementById("objectives").innerHTML=p.objectives.map(x=>`<li>${esc(x)}</li>`).join("");
  document.getElementById("methods").innerHTML=p.methods.map(x=>`<span class="pill">${esc(x)}</span>`).join("");
  document.getElementById("outputs").innerHTML=p.outputs.map(x=>`<li>${esc(x)}</li>`).join("");
}
document.addEventListener("DOMContentLoaded",renderProject);
