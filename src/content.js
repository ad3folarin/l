// Replace bracketed values here. Use local media paths such as /videos/intro.mp4.
// Keep results empty until a metric, timeframe, and source are verified.
export const profile = {
  name: '[YOUR NAME]', introName: '[Name]', email: '[YOUR EMAIL]',
  linkedin: '[LINKEDIN PORTFOLIO URL]', portfolio: '[PORTFOLIO FOLDER URL]',
  intro: { src: '[INTRO VIDEO FILE OR URL]', captions: '', transcript: '[INTRO VIDEO TRANSCRIPT]' },
  tools: ['Higgsfield', '[CONFIRM: Veo]', '[CONFIRM: Kling]', '[CONFIRM: Runway]', '[CONFIRM: Premiere Pro]', '[CONFIRM: ElevenLabs]'],
  project: { contribution: '[YOUR SPECIFIC WEBSITE CONTRIBUTION]', platform: '[SHOPIFY / WORDPRESS / OTHER]', role: '[SPECIFIC WORK COMPLETED]', result: '', resultPlaceholder: '[VERIFIED METRIC, TIMEFRAME, AND SOURCE]' }
};
export const work = [
  ['01', 'Product, in a new light.', 'citrus', 'CINEMATIC PRODUCT VIDEO'],
  ['02', 'A little everyday magic.', 'lilac', 'AI UGC-STYLE'],
  ['03', 'Made to stand out.', 'blue', 'CINEMATIC PRODUCT VIDEO'],
  ['04', 'The beauty of a detail.', 'rose', 'AI PRODUCT CONCEPT'],
  ['05', 'A fresh perspective.', 'green', 'AI UGC-STYLE'],
  ['06', 'Small product. Big energy.', 'orange', 'PRODUCT ANIMATION']
].map(([id,title,theme,artDirection],i)=>({id,title,theme,artDirection,src:`[VIDEO ${i+1}]`,brand:'[BRAND]',format:'[AI UGC / CINEMATIC PRODUCT VIDEO / OTHER]',platform:'[META / TIKTOK / INSTAGRAM / OTHER]',role:'[MY CONTRIBUTION]',captions:'',transcript:`[VIDEO ${i+1} TRANSCRIPT]`,result:''}));
export const formats = [
  ['Cinematic AI product ad','Put your product in a world of its own.','citrus'],
  ['AI UGC-style ad','Creator-style storytelling, imagined with AI.','lilac'],
  ['3D mascot explainer','Give an idea a character of its own.','blue'],
  ['Paper-cut collage video','Tactile layers. Unexpected combinations.','orange'],
  ['3D product animation','Explore every angle of your product.','green'],
  ['AI spokesperson video','A clear voice for your product story.','rose'],
  ['Beauty and skincare ad','Texture, detail, and a little atmosphere.','lilac'],
  ['Organic short-form video','Native-feeling stories for the everyday feed.','citrus']
].map(([title,description,theme],i)=>({title,description,theme,src:`[FORMAT SAMPLE ${i+1}]`,captions:'',transcript:`[FORMAT SAMPLE ${i+1} TRANSCRIPT]`}));
// Editable services: remove any items you do not offer.
export const concepts = ['Creative concepts and visual direction','Ad scripts and hooks','Hook, format, or opening variations','Paid social video creative for Meta','Organic short-form content adaptations'];
