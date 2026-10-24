import { profile, work, formats, concepts } from './content.js';
const $ = (selector) => document.querySelector(selector);
const missing = value => !value || value.startsWith('[');
const escape = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const artTitles = ['Fresh<br><i>perspective.</i>','Everyday.<br><i>Extraordinary.</i>','A different<br><i>dimension.</i>','Less, but<br><i>better.</i>','Naturally<br><i>different.</i>','A little<br><i>more zest.</i>'];
const labels = ['fresh.','softly.','FORM','essence','rooted.','zest.'];
function objectArt(i, mascot = false) { return `<span class="art-ring" aria-hidden="true"></span><span class="art-object" aria-hidden="true"><span class="object-label">${mascot ? '•‿•' : labels[i % labels.length]}<small>CONCEPT / NOT CLIENT WORK</small></span></span>`; }
document.querySelectorAll('[data-name]').forEach(el => el.textContent = profile.name);
$('#intro-name').textContent = profile.introName;
$('#tool-list').innerHTML = profile.tools.map(tool=>`<span class="tool ${missing(tool)?'unconfirmed':''}">${escape(tool)}</span>`).join('');
$('#work-grid').innerHTML = work.map((item,i)=>`<article class="work-card reveal"><button class="poster ${item.theme}" data-work="${i}" aria-label="Play video ${i+1}: ${escape(item.title)}"><span class="art-top"><span>CREATIVE STUDY / ${item.id}</span><span>9:16</span></span><span class="art-title" aria-hidden="true">${artTitles[i]}</span>${objectArt(i)}<span class="art-bottom">VIDEO ${i+1} · MEDIA PLACEHOLDER</span><span class="play" aria-hidden="true"></span></button><div class="card-kicker"><span>${escape(item.brand)}</span><span>${item.id} / SELECTED WORK</span></div><h3>${escape(item.title)}</h3><p class="work-meta"><span>Format: ${escape(item.format)}</span><span>Platform: ${escape(item.platform)}</span><span>My role: ${escape(item.role)}</span>${item.result?`<span>${escape(item.result)}</span>`:''}</p></article>`).join('');
$('#formats-grid').innerHTML = formats.map((item,i)=>`<article class="format-card ${item.theme} reveal"><button class="format-art ${item.theme} ${i===2?'mascot':i===3?'collage':i===5?'spokesperson':''}" data-format="${i}" aria-label="Play ${escape(item.title)} sample"><span class="art-top"><span>FORMAT / 0${i+1}</span><span>~10 SEC</span></span>${objectArt(i,i===2)}<span class="play" aria-hidden="true"></span></button><h3>${escape(item.title)}</h3><p>${escape(item.description)}</p></article>`).join('');
$('#concept-list').innerHTML = concepts.map((text,i)=>`<div><span>0${i+1}</span>${escape(text)}<b aria-hidden="true">↗</b></div>`).join('');
$('#project-contribution').textContent = profile.project.contribution;
$('#project-facts').innerHTML = [['Platform',profile.project.platform],['My role',profile.project.role],['Results',profile.project.result || `${profile.project.resultPlaceholder} — pending verification`]].map(([label,value])=>`<div><dt>${label}</dt><dd>${escape(value)}</dd></div>`).join('');
const dialog = $('#media-dialog');
let previousFocus;
function openDialog(title) { previousFocus = document.activeElement; $('#dialog-title').textContent = title; $('#dialog-body').replaceChildren(); dialog.showModal(); }
function showMedia(title, item) {
  openDialog(title);
  const body = $('#dialog-body');
  if(missing(item.src)) {
    const panel = document.createElement('div'); panel.className='placeholder-panel';
    const strong = document.createElement('strong'); strong.textContent='This video is coming soon.';
    const code = document.createElement('code'); code.textContent=item.src;
    const note = document.createElement('span'); note.textContent='The illustration is a concept placeholder. Add the video file in src/content.js to watch it here.';
    panel.append(strong,code,note); body.append(panel);
  } else {
    const video = document.createElement('video'); video.src=item.src; video.controls=true; video.playsInline=true; video.preload='metadata';
    if(item.captions) { const track=document.createElement('track'); track.kind='captions'; track.label='English'; track.srclang='en'; track.src=item.captions; track.default=true; video.append(track); }
    video.addEventListener('error',()=> { const p=document.createElement('p'); p.textContent='This video could not be loaded. Please check the media URL.'; body.append(p); },{once:true});
    body.append(video);
  }
  const details=document.createElement('details'); const summary=document.createElement('summary'); summary.textContent='Video transcript'; const p=document.createElement('p'); p.textContent=item.transcript || '[VIDEO TRANSCRIPT]'; details.append(summary,p); body.append(details);
}
$('#intro-play').addEventListener('click',()=>showMedia('A little introduction',profile.intro));
document.querySelectorAll('[data-work]').forEach(el=>el.addEventListener('click',()=>{const item=work[el.dataset.work];showMedia(item.title,item)}));
document.querySelectorAll('[data-format]').forEach(el=>el.addEventListener('click',()=>{const item=formats[el.dataset.format];showMedia(item.title,item)}));
$('#dialog-close').addEventListener('click',()=>dialog.close());
dialog.addEventListener('click',event=>{if(event.target===dialog){const rect=dialog.getBoundingClientRect();if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close();}});
dialog.addEventListener('close',()=>{dialog.querySelectorAll('video').forEach(video=>{video.pause();video.removeAttribute('src');video.load();});previousFocus?.focus();});
// Missing links open an honest placeholder, rather than a broken URL or fake contact form.
document.querySelectorAll('[data-link]').forEach(button=>{
  const key=button.dataset.link; const value=profile[key];
  if(!missing(value)) {
    const a=document.createElement('a'); a.className=button.className; a.innerHTML=button.innerHTML; a.href=key==='email'?`mailto:${value}`:value;
    if(key!=='email'){a.target='_blank';a.rel='noopener noreferrer';} button.replaceWith(a);
  } else button.addEventListener('click',()=>{openDialog(key==='email'?'Let’s talk about your project':key==='linkedin'?'LinkedIn portfolio':'The full video portfolio'); const p=document.createElement('p');p.textContent=`This link hasn’t been added yet: ${value}. Update it in src/content.js before publishing.`;$('#dialog-body').append(p);});
});
if(!missing(profile.email)&&!missing(profile.linkedin)) $('#contact-placeholder').hidden=true;
if(!missing(profile.name)) {document.title=`DTC Video Producer & AI Video Ads for Ecommerce | ${profile.name}`;for(const selector of ['meta[name="description"]','meta[property="og:title"]','meta[property="og:description"]']){const tag=$(selector);tag.content=tag.content.replace('[Your Name]',profile.name)}}
document.querySelectorAll('.tools-intro, .concepts > div, .website-grid article, .case-study > div, .contact-inner').forEach(el => el.classList.add('reveal'));
if(!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window){document.documentElement.classList.add('js-motion'); const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));}
// Inline vector marks keep navigation icons consistent without downloading an icon font.
const iconPaths={
  '↗':'M5 19 19 5M5 5h14v14',
  '↘':'M5 5 19 19M5 19h14V5',
  '↑':'M12 20V4M5 11l7-7 7 7',
  '✳':'M12 2v20M2 12h20M5 5l14 14M5 19 19 5'
};
const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
const iconNodes=[];
while(walker.nextNode()){if(/[↗↘↑✳]/u.test(walker.currentNode.textContent)&&!['SCRIPT','STYLE'].includes(walker.currentNode.parentElement.tagName))iconNodes.push(walker.currentNode);}
for(const node of iconNodes){const fragment=document.createDocumentFragment();for(const part of node.textContent.split(/([↗↘↑✳])/u)){if(!iconPaths[part]){fragment.append(document.createTextNode(part));continue;}const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');svg.classList.add('inline-icon');if(part==='✳')svg.classList.add('spark-icon');const path=document.createElementNS(svg.namespaceURI,'path');path.setAttribute('d',iconPaths[part]);svg.append(path);fragment.append(svg);}node.replaceWith(fragment);}
