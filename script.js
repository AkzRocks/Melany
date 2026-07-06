// Scroll reveal
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => { if(e.isIntersecting) e.target.classList.add('visible'); });
}, {threshold: 0.12});
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

// Bar chart animation
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if(e.isIntersecting) {
      e.target.querySelectorAll('.bar-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      barObs.unobserve(e.target);
    }
  });
}, {threshold: 0.3});
document.querySelectorAll('.bar-chart-section').forEach(el => barObs.observe(el));

// Visor de documentos (imagen + abrir PDF en pestaña aparte)
function openDocModal(imgSrc, pdfSrc, title){
  document.getElementById('docModalImg').src = imgSrc;
  document.getElementById('docModalTitle').textContent = title;
  const openBtn = document.getElementById('docModalOpenPdf');
  openBtn.onclick = function(){ window.open(pdfSrc, '_blank', 'noopener'); };
  document.getElementById('docModalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeDocModal(){
  document.getElementById('docModalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
// Cerrar al hacer click fuera del recuadro
document.getElementById('docModalOverlay').addEventListener('click', function(e){
  if(e.target === this) closeDocModal();
});
// Cerrar con tecla ESC
document.addEventListener('keydown', function(e){
  if(e.key === 'Escape') closeDocModal();
});
