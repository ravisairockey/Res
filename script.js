import {
  animate,
  createTimer,
  createDraggable,
  createAnimatable,
  utils,
  stagger,
  eases,
  createSpring,
  createTimeline,
  engine,
  svg,
  onScroll,
  createScope,
} from 'https://cdn.skypack.dev/animejs';

engine.timeUnit = 'ms';

// Main timeline
const mainTl = createTimeline();

// RSV Logo Animation
const logoEl = document.querySelector('#logo');
if (logoEl) {
  logoEl.innerHTML = `
    <g id="logo-anime-v4" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <path d="M166.22864,296.48 C159.555307,296.48 154.222659,296.003333 150.230697,295.05 C146.238735,294.096667 143.222342,292.536667 141.18152,290.37 C139.140697,288.203333 137.855844,285.256667 137.326962,281.53 C137.09327,279.883333 136.989578,278.236667 137.015886,276.59 L137,273.73 C137.004557,268.876667 137.825158,265.193333 139.461803,262.68 C141.098449,260.166667 143.966307,258.39 148.065379,257.35 C152.164451,256.31 158.15732,255.79 166.043987,255.79 L168.643987,255.79 C174.79732,255.79 179.671893,256.245 183.267705,257.155 C186.863517,258.065 189.589018,259.56 191.444208,261.64 L191.834208,261.64 L191.617088,255.53 C191.569029,253.97 191.51425,252.973333 191.452752,252.54 C191.157562,250.46 190.508986,248.943333 189.507024,247.99 C188.505062,247.036667 187.094224,246.408333 185.274508,246.105 C183.454793,245.801667 180.811602,245.65 177.344936,245.65 L174.744936,245.65 C170.671602,245.65 167.600943,245.845 165.532958,246.235 C163.464973,246.625 162.077736,247.231667 161.371249,248.055 C160.664762,248.878333 160.286065,250.026667 160.235157,251.5 L160.160506,251.89 L138.580506,251.89 L138.563765,249.94 C138.556022,245 139.608807,241.273333 141.722119,238.76 C143.835431,236.246667 147.486365,234.491667 152.674919,233.495 C157.863474,232.498333 165.441085,232 175.407752,232 L178.527752,232 C186.761085,232 193.229624,232.541667 197.933369,233.625 C202.637114,234.708333 206.253596,236.68 208.782815,239.54 C211.312035,242.4 212.970231,246.603333 213.757404,252.15 C214.077193,254.403333 214.259693,257.826667 214.304905,262.42 L214.311045,295.44 L191.821045,295.44 L191.994779,288.42 L191.734779,288.42 C190.209969,290.5 188.660845,292.103333 187.087406,293.23 C185.513967,294.356667 183.334146,295.18 180.547944,295.7 C177.761741,296.22 173.89864,296.48 168.95864,296.48 L166.22864,296.48 Z M176.344557,282.57 C181.024557,282.57 184.46355,282.375 186.661535,281.985 C188.85952,281.595 190.327273,280.945 191.064795,280.035 C191.802316,279.125 192.171931,277.76 192.173639,275.94 L192.286044,274.9 C192.311213,274.466667 192.268449,273.86 192.157753,273.08 C191.985559,271.866667 191.463339,270.935 190.591092,270.285 C189.718845,269.635 188.202605,269.18 186.042373,268.92 C183.882141,268.66 180.722025,268.53 176.562025,268.53 L175.132025,268.53 C170.452025,268.53 166.994441,268.746667 164.759272,269.18 C162.524103,269.613333 161.037758,270.285 160.300237,271.195 C159.562716,272.105 159.193101,273.47 159.191392,275.29 L159.208987,276.33 L159.263481,277.63 C159.447975,278.93 160.069162,279.948333 161.127041,280.685 C162.184921,281.421667 163.793977,281.92 165.954209,282.18 C168.114441,282.44 171.144557,282.57 175.044557,282.57 L176.344557,282.57 Z" id="r-1" fill="#FFF" fill-rule="nonzero"></path>
        <path d="M534.26,296.31 C525.333333,296.31 518.616667,295.985 514.11,295.335 C509.603333,294.685 506.396667,293.45 504.49,291.63 C502.583333,289.81 501.63,286.993333 501.63,283.18 C501.63,281.966667 501.695,280.861667 501.825,279.865 C501.955,278.868333 502.106667,277.806667 502.28,276.68 L505.01,276.68 C504.576667,279.02 504.36,281.1 504.36,282.92 C504.36,286.04 505.205,288.358333 506.895,289.875 C508.585,291.391667 511.488333,292.431667 515.605,292.995 C519.721667,293.558333 525.94,293.84 534.26,293.84 L538.81,293.84 C546.436667,293.84 552.243333,293.363333 556.23,292.41 C560.216667,291.456667 563.033333,289.983333 564.68,287.99 C566.326667,285.996667 567.41,283.136667 567.93,279.41 C568.276667,277.243333 568.45,275.466667 568.45,274.08 C568.45,271.48 567.648333,269.508333 566.045,268.165 C564.441667,266.821667 561.581667,265.89 557.465,265.37 C553.348333,264.85 547.173333,264.546667 538.94,264.46 C530.533333,264.373333 524.141667,263.961667 519.765,263.225 C515.388333,262.488333 512.355,261.34 510.665,259.78 C508.975,258.22 508.13,256.01 508.13,253.15 C508.13,251.85 508.346667,249.856667 508.78,247.17 C509.3,243.183333 510.491667,240.128333 512.355,238.005 C514.218333,235.881667 517.316667,234.365 521.65,233.455 C525.983333,232.545 532.31,232.09 540.63,232.09 L543.88,232.09 C551.333333,232.09 557.096667,232.48 561.17,233.26 C565.243333,234.04 568.19,235.383333 570.01,237.29 C571.83,239.196667 572.74,241.926667 572.74,245.48 C572.74,246.866667 572.566667,248.903333 572.22,251.59 L569.62,251.59 C569.966667,249.163333 570.14,247.17 570.14,245.61 C570.14,242.663333 569.338333,240.41 567.735,238.85 C566.131667,237.29 563.466667,236.185 559.74,235.535 C556.013333,234.885 550.683333,234.56 543.75,234.56 L540.5,234.56 C532.7,234.56 526.828333,234.971667 522.885,235.795 C518.941667,236.618333 516.168333,237.918333 514.565,239.695 C512.961667,241.471667 511.9,244.136667 511.38,247.69 C511.033333,249.943333 510.86,251.633333 510.86,252.76 C510.86,255.186667 511.618333,257.028333 513.135,258.285 C514.651667,259.541667 517.403333,260.43 521.39,260.95 C525.376667,261.47 531.313333,261.773333 539.2,261.86 C547.866667,261.946667 554.431667,262.336667 558.895,263.03 C563.358333,263.723333 566.5,264.893333 568.32,266.54 C570.14,268.186667 571.05,270.613333 571.05,273.82 C571.05,275.206667 570.876667,277.156667 570.53,279.67 C569.923333,284.003333 568.645,287.34 566.695,289.68 C564.745,292.02 561.581667,293.71 557.205,294.75 C552.828333,295.79 546.653333,296.31 538.68,296.31 L534.26,296.31 Z" id="s-1" fill="#FFF" fill-rule="nonzero"></path>
        <path d="M587.970588,316.9 L591.044118,294.738235 L510,294.738235 L514.691176,261.091176 L595.411765,206.9 L632.941176,206.9 L623.720588,272.091176 L639.735294,272.091176 L636.5,294.738235 L620.485294,294.738235 L617.411765,316.9 L587.970588,316.9 Z M538.632353,272.091176 L594.279412,272.091176 L600.102941,230.841176 L599.617647,230.841176 L538.632353,271.605882 L538.632353,272.091176 Z" id="v-1" fill="#FFF" fill-rule="nonzero"></path>
    </g>
  `;

  const logoTl = createTimeline({
    // autoplay: false
  });

  utils.set(['#r-1', '#s-1', '#v-1'], {
    transformOrigin: '50% 50% 0px',
  });

  logoTl.add(['#r-1', '#s-1', '#v-1'], {
    translateY: [
      { to: [35, -80], duration: 190, ease: 'cubicBezier(0.225, 1, 0.915, 0.980)' },
      { to: 4, duration: 120, delay: 20, ease: 'inQuad' },
      { to: 0, duration: 120, ease: 'outQuad' }
    ],
    scaleX: [
      { to: [.25, .85], duration: 190, ease: 'outQuad' },
      { to: 1.08, duration: 120, delay: 85, ease: 'inOutSine' },
      { to: 1, duration: 260, delay: 25, ease: 'outQuad' }
    ],
    scaleY: [
      { to: [.4, 1.5], duration: 120, ease: 'outSine' },
      { to: .6, duration: 120, delay: 180, ease: 'inOutSine' },
      { to: 1.2, duration: 180, delay: 25, ease: 'outQuad' },
      { to: 1, duration: 190, delay: 15, ease: 'outQuad' }
    ],
    duration: 400,
    ease: 'outSine',
  }, stagger(80, { from: 'center' }));

  mainTl.add(logoTl);
}

// Particles
const particlesEl = document.querySelector('.particles');
if (particlesEl) {
  const rows = 17;
  let w = window.innerWidth;
  let h = window.innerHeight;
  let hw = w / 2;
  let hh = h / 2;

  for (let i = 0; i < (rows * rows); i++) {
    particlesEl.appendChild(document.createElement('div'));
  }

  const duration = stagger(50, { ease: 'in(1)', from: 'center', grid: [rows, rows] });

  const particles = createAnimatable('.particles div', {
    x: { duration },
    y: { duration },
    rotate: { unit: 'rad', duration: 0 },
    ease: 'outElastic(.3, 1.4)',
  });

  window.onpointermove = e => {
    const { clientX, clientY } = e;
    particles.x(utils.mapRange(clientX, 0, w, -hw, hw));
    particles.y(utils.mapRange(clientY, 0, h, -hh, hh));
    particles.rotate(-Math.atan2(hw - clientX, hh - clientY));
  }

  window.onresize = () => {
    w = window.innerWidth;
    h = window.innerHeight;
    hw = w / 2;
    hh = h / 2;
  }
}

// Card Stack
const stickyContainer = document.querySelector('.sticky-container');
if (stickyContainer) {
  createScope({
    mediaQueries: { landscape: '(orientation: landscape)' },
    defaults: { ease: 'out(3)', duration: 500 },
  }).add((scope) => {

    let cardsAnimation;

    if (scope.matches.landscape) {
      cardsAnimation = animate('.card', {
        transformOrigin: '50% 150%',
        y: {
          from: stagger(['-40vh','40vh'], {from: 'center'}),
        },
        rotate: {
          to: stagger([-30, 30]),
          delay: stagger([0, 950], { from: 'last', start: 200 }),
          ease: 'inOut(3)',
        },
        x: ['-60vw', stagger(['-20%', '20%'])],
        delay: stagger(60, { from: 'last' }),
        duration: 750,
      });
    } else {
      cardsAnimation = animate('.card', {
        y: ['150vh', stagger(['20%', '-20%'])],
        rotate: {
          from: (_, i) => i % 2 ? '-20deg' : '20deg',
          ease: 'inOut(3)',
        },
        delay: stagger(50, { from: 'last' })
      });
    }

    onScroll({
      target: '.sticky-container',
      enter: 'top',
      leave: 'bottom',
      sync: .1
    }).link(cardsAnimation)

  });
}

// Draggable Drawer
const drawerEl = document.querySelector('.drawer');
if (drawerEl) {
  const drawer = createDraggable(drawerEl, {
    container: () => [0, drawerEl.offsetWidth, drawerEl.offsetHeight, 0],
    y: { snap: ({ $target }) => $target.offsetHeight },
    x: false,
    velocityMultiplier: 4,
    containerFriction: 1,
    onResize: (self) => {
      self.progressY = self.progressY > .5 ? 1 : 0
    }
  });

  drawer.progressY = 1;
}

// Snap carousel
const snapCarouselEl = document.querySelector('#snap-carousel .carousel');
if (snapCarouselEl) {
  const snapCarouselItems = (utils.$('#snap-carousel .carousel-item'));
  const snapTo = snapCarouselItems.map($el => -$el.offsetLeft);

  createDraggable(snapCarouselEl, {
    trigger: '#snap-carousel',
    x: { modifier: utils.wrap(snapTo[snapTo.length / 2], 0) },
    y: false,
    snap: snapTo,
  });
}

// Layered Animations
const layeredAnimationsEl = document.querySelector('.layered-animations');
if (layeredAnimationsEl) {
  const shapeEls = layeredAnimationsEl.querySelectorAll('.shape');
  const triangleEl = layeredAnimationsEl.querySelector('polygon');
  if (triangleEl) {
    const points = triangleEl.getAttribute('points').split(' ').map( v => +v );
    const eases = ['inOutQuad', 'inOutCirc', 'inOutSine', createSpring()];

    function createKeyframes(value) {
      var keyframes = [];
      for (let i = 0; i < 100; i++) {
        keyframes.push({
          to: value,
          ease: utils.randomPick(eases),
          duration: utils.random(300, 1600)
        });
      }
      return keyframes;
    }

    function animateShape(el) {

      const circleEl = el.querySelector('circle');
      const rectEl = el.querySelector('rect');
      const polyEl = el.querySelector('polygon');

      const animation = createTimeline({
        onComplete: () => animateShape(el),
      })
      .add(el, {
        translateX: createKeyframes(() => utils.random(-4, 4) + 'rem'),
        translateY: createKeyframes(() => utils.random(-4, 4) + 'rem'),
        rotate: createKeyframes(() => utils.random(-180, 180)),
      }, 0)
      if (circleEl) {
        animation.add(circleEl, {
          r: createKeyframes(() => utils.random(24, 56)),
        }, 0);
      }
      if (rectEl) {
        animation.add(rectEl, {
          width: createKeyframes(() => utils.random(56, 96)),
          height: createKeyframes(() => utils.random(56, 96)),
        }, 0);
      }
      if (polyEl) {
        animation.add(polyEl, {
          points: createKeyframes(() => {
            const s = utils.random(.9, 1.6, 3);
            return `
            ${points[0]*s} ${points[1]*s} ${points[2]*s} ${points[3]*s} ${points[4]*s} ${points[5]*s}
            `;
          }),
        }, 0);
      }

      animation.init();
    }

    for (var i = 0; i < shapeEls.length; i++) {
      animateShape(shapeEls[i]);
    }
  }
}

mainTl.add({
  targets: '#animejs-v4-logo',
  opacity: [1, 0],
  duration: 500,
  delay: 2000,
  easing: 'easeInOutQuad',
  complete: () => {
    document.querySelector('#animejs-v4-logo').style.display = 'none';
  }
});
