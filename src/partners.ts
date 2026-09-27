// Partner monsters: sprites and dialogue, shared by the town (Overworld) and the page companion.

export type Pid = 'bramblet' | 'lumoth' | 'voltkit';
export type Place = 'lab' | 'workshop' | 'library' | 'hq';
export type Kind = 'project' | 'post' | 'job' | 'school' | 'cert';

export const INK = '#1b2230';

// 12x12 pixel sprites; '.' is transparent.
export const sprites: Record<Pid | 'player', { px: string[]; pal: Record<string, string> }> = {
  player: { pal: { k: INK, r: '#1f4e8c', s: '#f2c9a0', b: '#e0a020', w: '#fdf6e3', d: '#3a4150' }, px: [
    '....kkkk....', '...krrrrk...', '..krrrrrrk..', '..kkkkkkkk..', '..kskssksk..', '..kssssssk..',
    '...kbbbbk...', '..kbbwwbbk..', '..kbbbbbbk..', '...kddddk...', '...kd..dk...', '...kk..kk...'] },
  bramblet: { pal: { k: INK, o: '#c0643a', m: '#f0dcc0', g: '#6aa84f', w: '#fff' }, px: [
    '............', '...kkkkkk...', '..komomomk..', '.komomomomk.', '.kkkkkkkkkk.', '.kggggggggk.',
    '.kgwkggwkgk.', '.kggggggggk.', '.kgggkkgggk.', '..kggggggk..', '.kgk....kgk.', '.kk......kk.'] },
  lumoth: { pal: { k: INK, j: '#3fae8c', a: '#c8f0e0', w: '#fff' }, px: [
    '..k......k..', '...k....k...', '....kkkk....', 'kk.kjjjjk.kk', 'kaakwjjwkaak', 'kaaakjjkaaak',
    'kaaaakkaaaak', '.kaakjjkaak.', '..kkkjjkkk..', '....kjjk....', '....kjjk....', '.....kk.....'] },
  voltkit: { pal: { k: INK, y: '#e0a020', w: '#fdf6e3', c: '#1f4e8c' }, px: [
    '.k........k.', 'kyk......kyk', 'kyyk....kyyk', 'kyyykkkkyyyk', 'kyyyyyyyyyyk', 'kyykyyyykyyk',
    'kywwyyyywwyk', '.kywwkkwwyk.', '..kyccccyk..', '..kyykkyyk..', '.kyyk..kyyk.', '.kkk....kkk.'] },
};

export function drawSprite(c: CanvasRenderingContext2D, name: Pid | 'player', x: number, y: number, flip = false) {
  const { px, pal } = sprites[name];
  px.forEach((row, j) => [...row].forEach((ch, i) => {
    if (ch === '.') return;
    c.fillStyle = pal[ch];
    c.fillRect(Math.round(x + (flip ? 11 - i : i)), Math.round(y + j), 1, 1);
  }));
}

export const partners: Record<Pid, {
  name: string;
  route: Place[];
  places: Record<Place, string>;
  about: Record<Kind, string>; // {name} is replaced with the hovered item's name
}> = {
  bramblet: {
    name: 'Bramblet',
    route: ['workshop', 'hq', 'lab', 'library'],
    places: {
      workshop: 'Brrk! This is where Zach builds things. On the bench right now:',
      lab: 'The Lab. Ideas, not bricks yet. Zach is working on:',
      library: 'Books. Zach writes up what got built and why.',
      hq: 'The resume. Solid foundation, I checked every brick:',
    },
    about: {
      project: 'Brrk. {name}. Good bones on this one.',
      post: '{name}. Zach wrote down how it got built.',
      job: '{name}. Load-bearing experience.',
      school: '{name}. Foundations matter.',
      cert: '{name}. Certified sturdy.',
    },
  },
  lumoth: {
    name: 'Lumoth',
    route: ['lab', 'library', 'workshop', 'hq'],
    places: {
      lab: 'Ooh, the Lab. This is what Zach studies:',
      workshop: 'Zach tests ideas by building them. Current experiments:',
      library: "My favorite place. Zach's notes live here.",
      hq: 'Everything Zach did before the PhD:',
    },
    about: {
      project: '{name}! I wonder how it works inside.',
      post: 'Ooh, {name}. Read this one slowly.',
      job: '{name}. Zach learned a lot here.',
      school: '{name}. Where the cocoon started.',
      cert: '{name}. A little badge. It glows.',
    },
  },
  voltkit: {
    name: 'Voltkit',
    route: ['hq', 'workshop', 'lab', 'library'],
    places: {
      hq: 'Straight to it. Career summary:',
      workshop: 'Shipping log. Current builds:',
      lab: 'Research focus, quick version:',
      library: 'Writing samples, if you want proof Zach can explain things.',
    },
    about: {
      project: '{name}. Real, runs, shipped.',
      post: '{name}. Proof Zach can explain things.',
      job: '{name}. Relevant. Trust me.',
      school: '{name}. Checked.',
      cert: '{name}. Verified.',
    },
  },
};

// Persisted choices, shared across pages.
export const store = {
  partner(): Pid | null {
    const p = localStorage.getItem('partner') as Pid | null;
    return p && p in partners ? p : null;
  },
  setPartner(p: Pid) { localStorage.setItem('partner', p); localStorage.removeItem('visited'); window.dispatchEvent(new Event('partner-change')); },
  visited(): Place[] { try { return JSON.parse(localStorage.getItem('visited') || '[]'); } catch { return []; } },
  visit(p: Place) { const v = new Set(store.visited()); v.add(p); localStorage.setItem('visited', JSON.stringify([...v])); },
  hidden() { return localStorage.getItem('partner-hidden') === '1'; },
  setHidden(h: boolean) { h ? localStorage.setItem('partner-hidden', '1') : localStorage.removeItem('partner-hidden'); },
};
