const visual = document.querySelector('.network-visual');
if (visual && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  visual.addEventListener('pointermove', (event) => {
    const rect = visual.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 5;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * 5;
    visual.style.transform = `perspective(800px) rotateY(${x}deg) rotateX(${-y}deg)`;
  });
  visual.addEventListener('pointerleave', () => { visual.style.transform = ''; });
}
