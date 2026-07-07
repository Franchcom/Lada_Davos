const { Stage, Sprite, useSprite, Easing, clamp } = window;

const PAPER = '#F4F1EB', INK = '#2B2724', SOFT = '#8C857C', SOFT2 = '#9A938B',
      LILAC = '#A38BAE', DEEP = '#7E6A8C', HAIR = 'rgba(43,39,36,0.14)';
const serif = "'Cormorant Garamond', serif";
const sans = "'Archivo', sans-serif";

const Petal = ({ size = 22, stroke = LILAC }) =>
  React.createElement('svg', { width: size, height: size, viewBox: '0 0 40 40', fill: 'none', style: { display: 'block' } },
    React.createElement('circle', { cx: 20, cy: 13, r: 7.5, stroke, strokeWidth: 1.2 }),
    React.createElement('circle', { cx: 20, cy: 27, r: 7.5, stroke, strokeWidth: 1.2 }),
    React.createElement('circle', { cx: 13, cy: 20, r: 7.5, stroke, strokeWidth: 1.2 }),
    React.createElement('circle', { cx: 27, cy: 20, r: 7.5, stroke, strokeWidth: 1.2 })
  );

function Reveal({ at = 0, dur = 0.8, y = 22, style, children }) {
  const { localTime } = useSprite();
  const e = Easing.easeOutCubic(clamp((localTime - at) / dur, 0, 1));
  return React.createElement('div', { style: { opacity: e, transform: `translateY(${(1 - e) * y}px)`, ...style } }, children);
}

function SlideFrame({ bg = PAPER, color = INK, children }) {
  const { localTime, duration } = useSprite();
  const op = Math.min(clamp(localTime / 0.7, 0, 1), clamp((duration - localTime) / 0.6, 0, 1));
  return React.createElement('div',
    { style: { position: 'absolute', inset: 0, width: '100%', height: '100%', boxSizing: 'border-box', overflow: 'hidden', background: bg, color, opacity: op } },
    children);
}

const pad = { position: 'absolute', inset: 0, boxSizing: 'border-box', padding: '88px 112px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' };

const Head = ({ label, dark }) =>
  React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' } },
    React.createElement('span', { style: { fontFamily: sans, fontSize: 15, letterSpacing: '0.34em', textTransform: 'uppercase', color: dark ? '#E4DCE6' : SOFT, fontWeight: 500 } }, label),
    React.createElement(Petal, { stroke: dark ? '#D9C4DA' : LILAC }));

const Foot = ({ page, dark }) =>
  React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: sans, fontSize: 13, letterSpacing: '0.26em', textTransform: 'uppercase', color: dark ? 'rgba(244,241,235,0.7)' : '#B0A8A0', fontWeight: 500 } },
    React.createElement('span', null, 'LADA — Before Life Begins'),
    React.createElement('span', null, page));

// ─────────────── SLIDE 1 · OPENING ───────────────
function Slide1() {
  const { localTime, duration } = useSprite();
  const scale = 1 + 0.03 * clamp(localTime / duration, 0, 1);
  return React.createElement(SlideFrame, { bg: PAPER, color: INK },
    React.createElement('div', { style: { position: 'absolute', inset: 0, display: 'flex' } },
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '92px 84px 88px 108px', boxSizing: 'border-box' } },
        React.createElement(Reveal, { at: 0.2 },
          React.createElement('div', { style: { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' } },
            React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: 14 } },
              React.createElement(Petal, { size: 26 }),
              React.createElement('span', { style: { fontFamily: sans, fontSize: 14, letterSpacing: '0.34em', textTransform: 'uppercase', color: SOFT, fontWeight: 500 } }, 'LADA')),
            React.createElement('span', { style: { fontFamily: sans, fontSize: 13, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#B0A8A0', textAlign: 'right', lineHeight: 1.7, fontWeight: 500 } }, 'World Woman Forum 2026', React.createElement('br'), 'Davos · 9–17 July'))),
        React.createElement(Reveal, { at: 0.55, y: 30 },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 152, lineHeight: 0.9, letterSpacing: '-0.015em' } }, 'Before', React.createElement('br'), 'Life Begins'),
            React.createElement('div', { style: { marginTop: 34, fontFamily: sans, fontSize: 18, letterSpacing: '0.34em', textTransform: 'uppercase', color: SOFT, fontWeight: 500 } }, 'Creating Healthier Generations'))),
        React.createElement(Reveal, { at: 1.1 },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: serif, fontSize: 32, fontWeight: 600, letterSpacing: '0.01em' } }, 'Svitlana Yashchenok'),
            React.createElement('div', { style: { marginTop: 8, fontFamily: sans, fontSize: 14, color: '#6B655E', lineHeight: 1.65 } }, 'Founder, LADA Reproductive Medicine Center', React.createElement('br'), 'Odesa, Ukraine'),
            React.createElement('div', { style: { marginTop: 38, paddingTop: 34, borderTop: `1px solid ${HAIR}`, display: 'flex', gap: 72 } },
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: serif, fontSize: 66, lineHeight: 0.9, fontWeight: 500 } }, '18', React.createElement('span', { style: { fontSize: 34, color: LILAC } }, '+')),
                React.createElement('div', { style: { marginTop: 12, fontFamily: sans, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: SOFT, lineHeight: 1.55 } }, 'Years in Reproductive', React.createElement('br'), 'Medicine')),
              React.createElement('div', null,
                React.createElement('div', { style: { fontFamily: serif, fontSize: 66, lineHeight: 0.9, fontWeight: 500 } }, '3,500'),
                React.createElement('div', { style: { marginTop: 12, fontFamily: sans, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: SOFT, lineHeight: 1.55 } }, 'Families', React.createElement('br'), 'Supported'))))) ),
      React.createElement('div', { style: { width: '40%', flex: '0 0 40%', overflow: 'hidden' } },
        React.createElement('div', { style: { width: '100%', height: '100%', backgroundImage: "url('" + ((typeof window!=='undefined'&&window.KV_ASSETS&&window.KV_ASSETS.image1)||'assets/davos/image1.png') + "')", backgroundSize: 'cover', backgroundPosition: 'center 18%', transform: `scale(${scale})`, transformOrigin: 'center' } }))));
}

// ─────────────── SLIDE 2 · THE QUESTION ───────────────
function Slide2() {
  const milestones = ['Consultation', 'Diagnosis', 'Embryo', 'Pregnancy', 'Birth'];
  const nodes = [];
  milestones.forEach((m, i) => {
    const last = i === milestones.length - 1;
    if (i > 0) nodes.push(React.createElement('div', { key: 'l' + i, style: { flex: 1, height: 1, background: 'rgba(43,39,36,0.16)', margin: '0 26px' } }));
    nodes.push(React.createElement('div', { key: 'n' + i, style: { display: 'flex', alignItems: 'center', gap: 14, flex: '0 0 auto' } },
      React.createElement('span', { style: { width: last ? 11 : 9, height: last ? 11 : 9, borderRadius: '50%', background: last ? INK : LILAC, display: 'block' } }),
      React.createElement('span', { style: { fontFamily: sans, fontSize: 15, letterSpacing: '0.18em', textTransform: 'uppercase', color: last ? INK : '#5A544D', whiteSpace: 'nowrap', fontWeight: last ? 500 : 400 } }, m)));
  });
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'The Question' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
        React.createElement(Reveal, { at: 0.5, y: 28 },
          React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 132, lineHeight: 0.95, letterSpacing: '-0.01em' } }, "Milestones Aren't", React.createElement('br'), 'the Journey')),
        React.createElement(Reveal, { at: 1.1, style: { marginTop: 88 } },
          React.createElement('div', { style: { display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: 1500 } }, nodes))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '02 / 09' }))));
}

// ─────────────── SLIDE 3 · THE INSIGHT ───────────────
function Slide3() {
  const { localTime, duration } = useSprite();
  const scale = 1.02 + 0.04 * clamp(localTime / duration, 0, 1);
  return React.createElement(SlideFrame, { bg: '#1c1816', color: '#F4F1EB' },
    React.createElement('div', { style: { position: 'absolute', inset: 0, overflow: 'hidden' } },
      React.createElement('div', { style: { position: 'absolute', inset: 0, backgroundImage: "url('" + ((typeof window!=='undefined'&&window.KV_ASSETS&&window.KV_ASSETS.mother)||'assets/davos/mother.png') + "')", backgroundSize: 'cover', backgroundPosition: 'center 22%', transform: `scale(${scale})`, transformOrigin: 'center' } }),
      React.createElement('div', { style: { position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(0deg, rgba(26,22,20,0.62) 0%, rgba(26,22,20,0.12) 34%, rgba(26,22,20,0) 52%), linear-gradient(100deg, rgba(28,24,22,0.72) 0%, rgba(28,24,22,0.40) 42%, rgba(28,24,22,0.04) 74%)' } })),
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'The Insight', dark: true })),
      React.createElement('div', { style: { flex: 1 } }),
      React.createElement('div', { style: { maxWidth: 1000 } },
        React.createElement(Reveal, { at: 0.6 },
          React.createElement('div', { style: { fontFamily: serif, fontStyle: 'italic', fontWeight: 400, fontSize: 42, lineHeight: 1.2, color: 'rgba(244,241,235,0.86)' } }, 'We were measuring the wrong thing.')),
        React.createElement(Reveal, { at: 1.1, y: 28 },
          React.createElement('div', { style: { marginTop: 26, fontFamily: serif, fontWeight: 500, fontSize: 118, lineHeight: 0.98, letterSpacing: '-0.01em' } }, 'Transformation', React.createElement('br'), 'of people.'))),
      React.createElement(Reveal, { at: 0.3, style: { marginTop: 44 } }, React.createElement(Foot, { page: '03 / 09', dark: true }))));
}

// ─────────────── SLIDE 4 · THE SHIFT ───────────────
function Slide4() {
  const pillars = ['Science', 'Education', 'Prevention', 'Emotional Wellbeing', 'Conscious Preparation'];
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'The Shift' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', alignItems: 'center', gap: 96 } },
        React.createElement(Reveal, { at: 0.5, style: { flex: 1.05 }, y: 26 },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 104, lineHeight: 0.95, letterSpacing: '-0.01em' } }, 'The LADA', React.createElement('br'), 'Difference'),
            React.createElement('div', { style: { marginTop: 44, display: 'flex', flexDirection: 'column', gap: 20 } },
              pillars.map((p, i) => React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'center', gap: 18 } },
                React.createElement('span', { style: { width: 7, height: 7, borderRadius: '50%', background: LILAC, display: 'block' } }),
                React.createElement('span', { style: { fontFamily: sans, fontSize: 17, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4A453F' } }, p)))))),
        React.createElement(Reveal, { at: 1.0, style: { flex: 1 }, y: 26 },
          React.createElement('div', { style: { background: '#EBE5EE', padding: '60px 56px', boxSizing: 'border-box' } },
            React.createElement('div', { style: { fontFamily: sans, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: DEEP, fontWeight: 500 } }, 'Standard IVF + Psychological Support'),
            React.createElement('div', { style: { marginTop: 32, display: 'flex', alignItems: 'baseline', gap: 26, fontFamily: serif, fontWeight: 500 } },
              React.createElement('span', { style: { fontSize: 86, lineHeight: 0.9, color: SOFT2 } }, '20%'),
              React.createElement('span', { style: { fontSize: 52, color: LILAC, lineHeight: 0.9 } }, '→'),
              React.createElement('span', { style: { fontSize: 136, lineHeight: 0.82, color: INK } }, '55%')),
            React.createElement('div', { style: { marginTop: 36, fontFamily: serif, fontSize: 26, lineHeight: 1.4, color: '#4A453F', maxWidth: 440 } }, 'Pregnancy rate with psychological support — same patients, same medicine.'),
            React.createElement('div', { style: { marginTop: 28, fontFamily: sans, fontSize: 12, color: SOFT, lineHeight: 1.6 } }, 'Domar et al., Fertility & Sterility, 2000 · Zhou et al., Frontiers in Psychology, 2021')))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '04 / 09' }))));
}

// ─────────────── SLIDES 5 & 6 · THE MODEL ───────────────
function ModelRow({ index, a, b }) {
  return React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 40 } },
    React.createElement('span', { style: { fontFamily: sans, fontSize: 14, letterSpacing: '0.2em', color: '#B7AEBE', fontWeight: 500, flex: '0 0 auto', width: 44 } }, index),
    React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 40, fontFamily: serif, fontWeight: 500, fontSize: 88, lineHeight: 1 } },
      React.createElement('span', { style: { color: SOFT2 } }, a),
      React.createElement('span', { style: { color: LILAC, fontSize: 58 } }, '→'),
      React.createElement('span', { style: { color: INK } }, b)));
}
function Slide5() {
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'The Model — Part One' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
        React.createElement(Reveal, { at: 0.5 },
          React.createElement('div', { style: { fontFamily: serif, fontStyle: 'italic', fontWeight: 400, fontSize: 34, color: SOFT, marginBottom: 56 } }, 'The Human Transformation Model')),
        React.createElement(Reveal, { at: 0.9, style: { paddingBottom: 44, borderBottom: `1px solid ${HAIR}` } }, React.createElement(ModelRow, { index: '01', a: 'Helplessness', b: 'Responsibility' })),
        React.createElement(Reveal, { at: 1.4, style: { paddingTop: 44 } }, React.createElement(ModelRow, { index: '02', a: 'Fear', b: 'Understanding' }))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '05 / 09' }))));
}
function Slide6() {
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'The Model — Part Two' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
        React.createElement(Reveal, { at: 0.5, style: { paddingBottom: 44, borderBottom: `1px solid ${HAIR}` } }, React.createElement(ModelRow, { index: '03', a: 'Isolation', b: 'Partnership' })),
        React.createElement(Reveal, { at: 0.9, style: { paddingTop: 44, paddingBottom: 56 } }, React.createElement(ModelRow, { index: '04', a: 'Wanting a baby', b: 'Becoming parents' })),
        React.createElement(Reveal, { at: 1.5 },
          React.createElement('div', { style: { fontFamily: serif, fontStyle: 'italic', fontWeight: 400, fontSize: 46, color: DEEP, letterSpacing: '0.01em' } }, 'Stronger. Wiser. Hopeful.'))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '06 / 09' }))));
}

// ─────────────── SLIDE 7 · REDEFINING SUCCESS ───────────────
function Slide7() {
  const list = ['Children', 'Families', 'Parents', 'Decisions'];
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'Redefining Success' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', alignItems: 'center', gap: 110 } },
        React.createElement(Reveal, { at: 0.5, style: { flex: '0 0 44%' }, y: 26 },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 120, lineHeight: 0.92, letterSpacing: '-0.01em' } }, 'Success,', React.createElement('br'), 'redefined.'),
            React.createElement('div', { style: { marginTop: 36, fontFamily: serif, fontStyle: 'italic', fontSize: 32, color: SOFT, lineHeight: 1.3 } }, 'Not only pregnancy rates —'))),
        React.createElement(Reveal, { at: 1.0, style: { flex: 1 }, y: 26 },
          React.createElement('div', null,
            list.map((w, i) => React.createElement('div', { key: i, style: { fontFamily: serif, fontWeight: 500, fontSize: 52, lineHeight: 1, padding: '22px 0', borderBottom: `1px solid ${HAIR}`, color: '#3A352F' } }, w)),
            React.createElement('div', { style: { display: 'flex', alignItems: 'baseline', gap: 20, padding: '22px 0 0' } },
              React.createElement('span', { style: { width: 9, height: 9, borderRadius: '50%', background: LILAC, display: 'block' } }),
              React.createElement('span', { style: { fontFamily: serif, fontWeight: 600, fontSize: 58, lineHeight: 1, color: DEEP } }, 'Generations'))))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '07 / 09' }))));
}

// ─────────────── SLIDE 8 · ONE ECOSYSTEM ───────────────
function Slide8() {
  const eco = ['Medical Centres', 'Education', 'Certification', 'Research', 'Government Partnerships'];
  const caps = [];
  eco.forEach((e, i) => {
    if (i > 0) caps.push(React.createElement('span', { key: 'd' + i, style: { color: '#CFC6D2' } }, '·'));
    caps.push(React.createElement('span', { key: 'e' + i }, e));
  });
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'Our Vision' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' } },
        React.createElement(Reveal, { at: 0.5, y: 26 },
          React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 122, lineHeight: 0.9, letterSpacing: '-0.015em' } }, 'One Ecosystem.')),
        React.createElement(Reveal, { at: 1.0, style: { marginTop: 34, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap', fontFamily: sans, fontSize: 14, letterSpacing: '0.18em', textTransform: 'uppercase', color: SOFT } }, caps),
        React.createElement(Reveal, { at: 1.3, style: { marginTop: 40, display: 'flex', alignItems: 'center', gap: 20 } },
          React.createElement('span', { style: { width: 9, height: 9, borderRadius: '50%', background: LILAC, display: 'block' } }),
          React.createElement('span', { style: { fontFamily: serif, fontWeight: 500, fontSize: 50, lineHeight: 1, color: DEEP } }, 'Healthier Generations')),
        React.createElement(Reveal, { at: 1.7, style: { marginTop: 54, paddingTop: 40, borderTop: `1px solid ${HAIR}`, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' } },
          React.createElement('div', { style: { fontFamily: serif, fontStyle: 'italic', fontSize: 34, color: SOFT2 } }, 'The future, built together.'),
          React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 72, lineHeight: 1 } }, 'Thank you.'))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '08 / 09' }))));
}

// ─────────────── SLIDE 9 · STAY CONNECTED ───────────────
function Slide9() {
  const rows = [['LinkedIn', 'linkedin.com/in/svitlanayashchenok'], ['Email', 'Denmarksvet@gmail.com'], ['Telegram', '@SvitlanaDenmark']];
  return React.createElement(SlideFrame, null,
    React.createElement('div', { style: pad },
      React.createElement(Reveal, { at: 0.2 }, React.createElement(Head, { label: 'Stay Connected' })),
      React.createElement('div', { style: { flex: 1, display: 'flex', alignItems: 'center', gap: 96 } },
        React.createElement(Reveal, { at: 0.5, style: { flex: 1 }, y: 26 },
          React.createElement('div', null,
            React.createElement('div', { style: { fontFamily: serif, fontWeight: 500, fontSize: 92, lineHeight: 0.95, letterSpacing: '-0.01em' } }, "Let's Continue", React.createElement('br'), 'the Conversation'),
            React.createElement('div', { style: { marginTop: 52, maxWidth: 640 } },
              rows.map((r, i) => React.createElement('div', { key: i, style: { display: 'flex', alignItems: 'baseline', gap: 28, padding: '18px 0', borderTop: `1px solid ${HAIR}`, borderBottom: i === rows.length - 1 ? `1px solid ${HAIR}` : 'none' } },
                React.createElement('span', { style: { flex: '0 0 130px', fontFamily: sans, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A0988F', fontWeight: 500 } }, r[0]),
                React.createElement('span', { style: { fontFamily: serif, fontSize: 28, color: '#3A352F' } }, r[1])))),
            React.createElement('div', { style: { marginTop: 44, fontFamily: serif, fontStyle: 'italic', fontSize: 30, color: DEEP } }, 'Building Healthier Generations Together.'))),
        React.createElement(Reveal, { at: 1.0, style: { flex: '0 0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 20 } },
          React.createElement('div', { style: { width: 330, height: 330, background: '#fff', padding: 22, boxSizing: 'border-box', border: '1px solid rgba(43,39,36,0.1)' } },
            React.createElement('img', { src: ((typeof window!=='undefined'&&window.KV_ASSETS&&window.KV_ASSETS.image5)||'assets/davos/image5.png'), style: { width: '100%', height: '100%', objectFit: 'contain', display: 'block' } })),
          React.createElement('span', { style: { fontFamily: sans, fontSize: 12, letterSpacing: '0.24em', textTransform: 'uppercase', color: '#A0988F', fontWeight: 500 } }, 'Scan to connect'))),
      React.createElement(Reveal, { at: 0.3 }, React.createElement(Foot, { page: '09 / 09' }))));
}

// ─────────────── TIMELINE ───────────────
const CUES = [
  [0, 8, Slide1], [8, 14, Slide2], [14, 21, Slide3], [21, 29, Slide4],
  [29, 35, Slide5], [35, 42, Slide6], [42, 48, Slide7], [48, 55, Slide8], [55, 60, Slide9],
];

function KeynoteVideo() {
  return React.createElement(Stage, { width: 1920, height: 1080, duration: 60, background: PAPER, fps: 30 },
    CUES.map(([s, e, Comp], i) =>
      React.createElement(Sprite, { key: i, start: s, end: e },
        React.createElement(Comp, null))));
}

window.KeynoteVideo = KeynoteVideo;
