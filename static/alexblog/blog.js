(() => {
    [...document.querySelectorAll('section.post')].forEach(src => {
      if (src.dataset.hidden === "true") { src.remove(); return; }
  
      const date = src.dataset.date;
      const title = src.dataset.title;
      const slug = src.dataset.slug || date; // fallback to date if no slug given
  
      const content = document.createElement('div');
      content.className = 'content';
      content.innerHTML = src.innerHTML;
  
      // upgrade youtube placeholders …
      [...content.querySelectorAll('.youtube')].forEach(y => {
        const raw = y.dataset.id || y.textContent.trim();
        const vid = (raw.match(/[A-Za-z0-9_-]{11}/) || [null])[0];
        if (vid) y.innerHTML = `<iframe src="https://www.youtube.com/embed/${vid}" allowfullscreen></iframe>`;
      });
  
      const det = document.createElement('details');
      det.dataset.date = date;
      det.dataset.slug = slug;
      det.id = slug;
  
      const sum = document.createElement('summary');
      sum.innerHTML =
        `<a class="perma" href="?post=${slug}" aria-label="Permalink">#</a>
         <span class="title">${title}</span>
         <span class="date">${date}</span>`;
  
      det.append(sum, content);
      src.replaceWith(det);
    });
  
    // expand & scroll to ?post=slug
    const id = new URLSearchParams(location.search).get('post');
    const el = id && document.querySelector(`details[data-slug="${id}"]`);
    if (el) {
      el.open = true;
      setTimeout(() => el.scrollIntoView({ block:'start', behavior:'smooth' }), 100);
    }
  
  })();

// images: classify as single vs carousel, and enable click-to-center
(() => {
    document.querySelectorAll('figure.images').forEach(figure => {
        const scroller = figure.querySelector('.carousel-scroller');
        if (!scroller) { // It's a single image
            figure.classList.add('single');
            return;
        }

        const imgs = [...scroller.querySelectorAll('img')];
        if (imgs.length <= 1) {
            figure.classList.add('single');
            return;
        }

        figure.classList.add('carousel');

        imgs.forEach(img => {
            img.addEventListener('click', () => {
                // scroll to the clicked image's starting position
                scroller.scrollTo({ left: img.offsetLeft, behavior: 'smooth' });
            });
        });
    });
})();

// prevent summary from toggling when the permalink is clicked
(() => {
    document.querySelectorAll('summary').forEach(s => {
        s.addEventListener('click', e => {
            if (e.target.closest('.perma')) {
                e.stopPropagation();
            }
        });
    });
})();
