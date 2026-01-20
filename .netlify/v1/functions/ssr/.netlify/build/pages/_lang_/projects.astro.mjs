import { u as useTranslations } from '../../chunks/index_fDmi9p0u.mjs';
import { c as createAstro, d as createComponent, i as renderComponent, r as renderTemplate, u as unescapeHTML, m as maybeRenderHead } from '../../chunks/astro/server_wM0AnVyo.mjs';
import 'piccolore';
import { $ as $$Layout } from '../../chunks/layout_IUZppg3b.mjs';
/* empty css                                       */
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://artdecopergola.com");
async function getStaticPaths() {
  return [
    { params: { lang: "en" } },
    { params: { lang: "ru" } },
    { params: { lang: "az" } }
  ];
}
const $$Projects = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Projects;
  const locale = Astro2.params.lang || "en";
  const t = useTranslations(locale);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects" }, { "default": async ($$result2) => renderTemplate(_a || (_a = __template([" ", '<section class="portfolio-view"> <div class="container"> <header class="header-area js-reveal"> <span class="eyebrow">', '</span> <h2 class="display-title">', `</h2> </header> <div class="project-grid" id="projectGrid"></div> </div> </section>  <div class="modal-wrap" id="projectModal"> <div class="close-circle" id="closeModal"></div> <div class="modal-body"> <div class="modal-gallery" id="modalGallery"></div> <div class="modal-aside"> <h2 id="mTitle">Project Name</h2> <div class="spec-item"> <span class="spec-label">Location</span> <span class="spec-value" id="mLoc">Barcelona, Spain</span> </div> <div class="spec-item"> <span class="spec-label">Type</span> <span class="spec-value" id="mType">Residential Architecture</span> </div> <div class="modal-desc" id="mDesc"></div> </div> </div> </div>  <div class="fullscreen-viewer" id="fsViewer"> <div class="close-circle" id="closeFs"></div> <div class="nav-arrow nav-prev" id="fsPrev"> <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg> </div> <img id="fsImg" src="" alt=""> <div class="nav-arrow nav-next" id="fsNext"> <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg> </div> </div> <script>
		const locale = document.documentElement.lang || 'en';
		console.log('[Projects Page] Current locale:', locale);

		const grid = document.getElementById('projectGrid');
		const modal = document.getElementById('projectModal');
		const closeModal = document.getElementById('closeModal');
		const fsViewer = document.getElementById('fsViewer');
		const fsImg = document.getElementById('fsImg');
		const closeFs = document.getElementById('closeFs');
		const fsPrev = document.getElementById('fsPrev');
		const fsNext = document.getElementById('fsNext');

		let projects = [];
		let currentProjectImages = [];
		let currentImgIndex = 0;
		let touchStartX = 0;
		let touchEndX = 0;

		async function loadProjects() {
			try {
				const url = \`/api/projects.json?lang=\${locale}\`;
				console.log('[Projects Page] Fetching from:', url);
				
				const response = await fetch(url);
				console.log('[Projects Page] Response status:', response.status);
				
				if (response.ok) {
					const data = await response.json();
					console.log('[Projects Page] Received data:', data);
					
					projects = data.data || [];
					console.log('[Projects Page] Projects loaded:', projects.length);
				} else {
					console.error('[Projects Page] API returned error status:', response.status);
					projects = [];
				}
			} catch (error) {
				console.error('[Projects Page] Failed to load projects:', error);
				projects = [];
			}
			render();
		}

		function render() {
			if (!grid) return;
			
			grid.innerHTML = projects.map(p => \`
				<div class="project-card js-reveal" onclick="openP(\${p.id})">
					<img src="\${p.mainImg}" class="card-media" alt="\${p.title}" loading="lazy">
					<div class="card-info">
						<span class="card-meta">\${p.type}</span>
						<h3 class="card-title">\${p.title}</h3>
					</div>
				</div>
			\`).join('');
			
			setTimeout(() => {
				const headerArea = document.querySelector('.header-area');
				if (headerArea) {
					headerArea.classList.add('reveal');
				}

				const obs = new IntersectionObserver((entries) => {
					entries.forEach(e => { 
						if(e.isIntersecting) {
							e.target.classList.add('reveal');
						}
					});
				}, { threshold: 0.1 });
				document.querySelectorAll('.js-reveal').forEach(el => obs.observe(el));
			}, 100);
		}

		window.openP = (id) => {
			const p = projects.find(x => x.id === id);
			if (!p) return;
			
			currentProjectImages = p.gallery;
			
			document.getElementById('mTitle').innerText = p.title;
			document.getElementById('mLoc').innerText = p.location;
			document.getElementById('mType').innerText = p.type;
			document.getElementById('mDesc').innerText = p.description;
			
			let galleryHtml = '';
			
			if (p.videoUrl) {
				galleryHtml += \`
					<div class="video-container">
						<iframe 
							src="\${p.videoUrl}" 
							title="YouTube video player" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							allowfullscreen>
						</iframe>
					</div>
				\`;
			}
			
			galleryHtml += p.gallery.map((img, idx) => \`
				<img src="\${img}" onclick="openFsImg(\${idx})" loading="lazy">
			\`).join('');
			
			document.getElementById('modalGallery').innerHTML = galleryHtml;
			
			modal.style.display = 'flex';
			document.body.style.overflow = 'hidden';
			document.getElementById('modalGallery').scrollTop = 0;
		};

		window.openFsImg = (index) => {
			currentImgIndex = index;
			updateFsImg();
			fsViewer.style.display = 'flex';
		};

		function updateFsImg() {
			fsImg.style.opacity = '0';
			setTimeout(() => {
				fsImg.src = currentProjectImages[currentImgIndex];
				fsImg.style.opacity = '1';
			}, 50);
			
			fsPrev.style.display = currentImgIndex === 0 ? 'none' : 'flex';
			fsNext.style.display = currentImgIndex === currentProjectImages.length - 1 ? 'none' : 'flex';
		}

		fsPrev.onclick = (e) => {
			e.stopPropagation();
			if (currentImgIndex > 0) {
				currentImgIndex--;
				updateFsImg();
			}
		};

		fsNext.onclick = (e) => {
			e.stopPropagation();
			if (currentImgIndex < currentProjectImages.length - 1) {
				currentImgIndex++;
				updateFsImg();
			}
		};

		fsViewer.addEventListener('touchstart', (e) => {
			touchStartX = e.changedTouches[0].screenX;
		}, {passive: true});

		fsViewer.addEventListener('touchend', (e) => {
			touchEndX = e.changedTouches[0].screenX;
			handleFsSwipe();
		}, {passive: true});

		function handleFsSwipe() {
			const threshold = 60;
			if (touchStartX - touchEndX > threshold) {
				if (currentImgIndex < currentProjectImages.length - 1) {
					currentImgIndex++;
					updateFsImg();
				}
			} else if (touchEndX - touchStartX > threshold) {
				if (currentImgIndex > 0) {
					currentImgIndex--;
					updateFsImg();
				}
			}
		}

		const handleCloseModal = () => {
			const gallery = document.getElementById('modalGallery');
			const iframe = gallery.querySelector('iframe');
			if (iframe) iframe.src = '';
			
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		};

		const handleCloseFs = () => {
			fsViewer.style.display = 'none';
			fsImg.src = '';
		};

		closeModal.onclick = handleCloseModal;
		closeFs.onclick = handleCloseFs;

		modal.onclick = (e) => { if (e.target === modal) handleCloseModal(); };
		fsViewer.onclick = (e) => { if (e.target === fsViewer) handleCloseFs(); };

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				if (fsViewer.style.display === 'flex') handleCloseFs();
				else if (modal.style.display === 'flex') handleCloseModal();
			} else if (fsViewer.style.display === 'flex') {
				if (e.key === 'ArrowRight' && currentImgIndex < currentProjectImages.length - 1) {
					currentImgIndex++; updateFsImg();
				}
				if (e.key === 'ArrowLeft' && currentImgIndex > 0) {
					currentImgIndex--; updateFsImg();
				}
			}
		});

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', loadProjects);
		} else {
			loadProjects();
		}
	<\/script> `], [" ", '<section class="portfolio-view"> <div class="container"> <header class="header-area js-reveal"> <span class="eyebrow">', '</span> <h2 class="display-title">', `</h2> </header> <div class="project-grid" id="projectGrid"></div> </div> </section>  <div class="modal-wrap" id="projectModal"> <div class="close-circle" id="closeModal"></div> <div class="modal-body"> <div class="modal-gallery" id="modalGallery"></div> <div class="modal-aside"> <h2 id="mTitle">Project Name</h2> <div class="spec-item"> <span class="spec-label">Location</span> <span class="spec-value" id="mLoc">Barcelona, Spain</span> </div> <div class="spec-item"> <span class="spec-label">Type</span> <span class="spec-value" id="mType">Residential Architecture</span> </div> <div class="modal-desc" id="mDesc"></div> </div> </div> </div>  <div class="fullscreen-viewer" id="fsViewer"> <div class="close-circle" id="closeFs"></div> <div class="nav-arrow nav-prev" id="fsPrev"> <svg viewBox="0 0 24 24"><path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"></path></svg> </div> <img id="fsImg" src="" alt=""> <div class="nav-arrow nav-next" id="fsNext"> <svg viewBox="0 0 24 24"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg> </div> </div> <script>
		const locale = document.documentElement.lang || 'en';
		console.log('[Projects Page] Current locale:', locale);

		const grid = document.getElementById('projectGrid');
		const modal = document.getElementById('projectModal');
		const closeModal = document.getElementById('closeModal');
		const fsViewer = document.getElementById('fsViewer');
		const fsImg = document.getElementById('fsImg');
		const closeFs = document.getElementById('closeFs');
		const fsPrev = document.getElementById('fsPrev');
		const fsNext = document.getElementById('fsNext');

		let projects = [];
		let currentProjectImages = [];
		let currentImgIndex = 0;
		let touchStartX = 0;
		let touchEndX = 0;

		async function loadProjects() {
			try {
				const url = \\\`/api/projects.json?lang=\\\${locale}\\\`;
				console.log('[Projects Page] Fetching from:', url);
				
				const response = await fetch(url);
				console.log('[Projects Page] Response status:', response.status);
				
				if (response.ok) {
					const data = await response.json();
					console.log('[Projects Page] Received data:', data);
					
					projects = data.data || [];
					console.log('[Projects Page] Projects loaded:', projects.length);
				} else {
					console.error('[Projects Page] API returned error status:', response.status);
					projects = [];
				}
			} catch (error) {
				console.error('[Projects Page] Failed to load projects:', error);
				projects = [];
			}
			render();
		}

		function render() {
			if (!grid) return;
			
			grid.innerHTML = projects.map(p => \\\`
				<div class="project-card js-reveal" onclick="openP(\\\${p.id})">
					<img src="\\\${p.mainImg}" class="card-media" alt="\\\${p.title}" loading="lazy">
					<div class="card-info">
						<span class="card-meta">\\\${p.type}</span>
						<h3 class="card-title">\\\${p.title}</h3>
					</div>
				</div>
			\\\`).join('');
			
			setTimeout(() => {
				const headerArea = document.querySelector('.header-area');
				if (headerArea) {
					headerArea.classList.add('reveal');
				}

				const obs = new IntersectionObserver((entries) => {
					entries.forEach(e => { 
						if(e.isIntersecting) {
							e.target.classList.add('reveal');
						}
					});
				}, { threshold: 0.1 });
				document.querySelectorAll('.js-reveal').forEach(el => obs.observe(el));
			}, 100);
		}

		window.openP = (id) => {
			const p = projects.find(x => x.id === id);
			if (!p) return;
			
			currentProjectImages = p.gallery;
			
			document.getElementById('mTitle').innerText = p.title;
			document.getElementById('mLoc').innerText = p.location;
			document.getElementById('mType').innerText = p.type;
			document.getElementById('mDesc').innerText = p.description;
			
			let galleryHtml = '';
			
			if (p.videoUrl) {
				galleryHtml += \\\`
					<div class="video-container">
						<iframe 
							src="\\\${p.videoUrl}" 
							title="YouTube video player" 
							allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
							allowfullscreen>
						</iframe>
					</div>
				\\\`;
			}
			
			galleryHtml += p.gallery.map((img, idx) => \\\`
				<img src="\\\${img}" onclick="openFsImg(\\\${idx})" loading="lazy">
			\\\`).join('');
			
			document.getElementById('modalGallery').innerHTML = galleryHtml;
			
			modal.style.display = 'flex';
			document.body.style.overflow = 'hidden';
			document.getElementById('modalGallery').scrollTop = 0;
		};

		window.openFsImg = (index) => {
			currentImgIndex = index;
			updateFsImg();
			fsViewer.style.display = 'flex';
		};

		function updateFsImg() {
			fsImg.style.opacity = '0';
			setTimeout(() => {
				fsImg.src = currentProjectImages[currentImgIndex];
				fsImg.style.opacity = '1';
			}, 50);
			
			fsPrev.style.display = currentImgIndex === 0 ? 'none' : 'flex';
			fsNext.style.display = currentImgIndex === currentProjectImages.length - 1 ? 'none' : 'flex';
		}

		fsPrev.onclick = (e) => {
			e.stopPropagation();
			if (currentImgIndex > 0) {
				currentImgIndex--;
				updateFsImg();
			}
		};

		fsNext.onclick = (e) => {
			e.stopPropagation();
			if (currentImgIndex < currentProjectImages.length - 1) {
				currentImgIndex++;
				updateFsImg();
			}
		};

		fsViewer.addEventListener('touchstart', (e) => {
			touchStartX = e.changedTouches[0].screenX;
		}, {passive: true});

		fsViewer.addEventListener('touchend', (e) => {
			touchEndX = e.changedTouches[0].screenX;
			handleFsSwipe();
		}, {passive: true});

		function handleFsSwipe() {
			const threshold = 60;
			if (touchStartX - touchEndX > threshold) {
				if (currentImgIndex < currentProjectImages.length - 1) {
					currentImgIndex++;
					updateFsImg();
				}
			} else if (touchEndX - touchStartX > threshold) {
				if (currentImgIndex > 0) {
					currentImgIndex--;
					updateFsImg();
				}
			}
		}

		const handleCloseModal = () => {
			const gallery = document.getElementById('modalGallery');
			const iframe = gallery.querySelector('iframe');
			if (iframe) iframe.src = '';
			
			modal.style.display = 'none';
			document.body.style.overflow = 'auto';
		};

		const handleCloseFs = () => {
			fsViewer.style.display = 'none';
			fsImg.src = '';
		};

		closeModal.onclick = handleCloseModal;
		closeFs.onclick = handleCloseFs;

		modal.onclick = (e) => { if (e.target === modal) handleCloseModal(); };
		fsViewer.onclick = (e) => { if (e.target === fsViewer) handleCloseFs(); };

		document.addEventListener('keydown', (e) => {
			if (e.key === 'Escape') {
				if (fsViewer.style.display === 'flex') handleCloseFs();
				else if (modal.style.display === 'flex') handleCloseModal();
			} else if (fsViewer.style.display === 'flex') {
				if (e.key === 'ArrowRight' && currentImgIndex < currentProjectImages.length - 1) {
					currentImgIndex++; updateFsImg();
				}
				if (e.key === 'ArrowLeft' && currentImgIndex > 0) {
					currentImgIndex--; updateFsImg();
				}
			}
		});

		if (document.readyState === 'loading') {
			document.addEventListener('DOMContentLoaded', loadProjects);
		} else {
			loadProjects();
		}
	<\/script> `])), maybeRenderHead(), t("projects.portfolio"), unescapeHTML(t("projects.heading"))) })}`;
}, "/home/thevfxeye/artdeco/src/pages/[lang]/projects.astro", void 0);

const $$file = "/home/thevfxeye/artdeco/src/pages/[lang]/projects.astro";
const $$url = "/[lang]/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Projects,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
