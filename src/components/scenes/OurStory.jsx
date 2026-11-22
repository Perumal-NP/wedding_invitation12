import { Flower2, Heart, Sparkles } from 'lucide-react';
import wedding from '../../config/wedding';
const symbols = [Flower2, Heart, Sparkles];
const chapterPhotos = [
  ['IMG_0884', 'IMG_0926', 'IMG_0948'],
  ['IMG_1056', 'IMG_1060'],
  ['IMG_1095', 'IMG_1135'],
];
export default function OurStory() {
  return <section id="story" className="scene-section blessing-garden" aria-labelledby="memory-title">
    <div className="journal-section-index"><span>03 / A BEAUTIFUL BEGINNING</span><span>WITH LOVE & BLESSINGS</span></div>
    <header data-aos="fade-up"><p className="journal-kicker">ROOTED IN TRADITION. GROWING IN LOVE.</p><h2 id="memory-title">A lifetime of love.<br /><em>A garden of blessings.</em></h2><p>Two hearts, two families, and the people who make it all meaningful.</p></header>
    <div className="story-chapters">{wedding.story.map((chapter, index) => { const Symbol = symbols[index]; return <article className="story-chapter" key={chapter.chapter} data-aos="fade-up"><div className="chapter-images">{chapterPhotos[index].map((photo, photoIndex) => <img key={photo} src={`/assets/${photo}.jpg`} alt={`Balaraman and Kaviya together, ${chapter.chapter.toLowerCase()}, photo ${photoIndex + 1}`} loading="lazy" decoding="async" />)}</div><div className="chapter-copy"><span className="chapter-label"><Symbol size={16} strokeWidth={1.3} aria-hidden="true" /> OUR STORY / 0{index + 1}</span><h3>{chapter.chapter}</h3><p>{chapter.text}</p><span className="chapter-ornament" aria-hidden="true">❦</span></div></article>; })}</div>
  </section>;
}
