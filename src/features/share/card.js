import { describeType } from '../../shared/type-text.js';

// Draws the shareable result card (1080 x 1350, the Instagram portrait size) on a canvas.
// No libraries: plain 2D drawing, using the same colours as the site.
const WIDTH = 1080;
const HEIGHT = 1350;
const INK = '#2b1a47';
const MUTED = '#6a5a85';
const BACKGROUND = '#eee5fb';
const SURFACE = '#fbf8ff';
const FONT_FAMILY =
  'system-ui, -apple-system, "Segoe UI", "PingFang SC", "Microsoft YaHei", "Noto Sans SC", "Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif';

const font = (weight, size) => `${weight} ${size}px ${FONT_FAMILY}`;

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

// Breaks text into lines that fit. Latin text breaks at spaces; Chinese can break anywhere.
const CJK = '\\u3000-\\u303f\\u4e00-\\u9fff\\uff00-\\uffef';
const TOKENS = new RegExp(`[${CJK}]|[^\\s${CJK}]+|\\s+`, 'g');

function wrap(ctx, text, maxWidth, maxLines) {
  const lines = [];
  let line = '';
  for (const token of text.match(TOKENS) ?? []) {
    if (line && ctx.measureText(line + token).width > maxWidth) {
      lines.push(line.trim());
      line = token.trimStart();
    } else {
      line += token;
    }
  }
  if (line.trim()) lines.push(line.trim());
  return lines.slice(0, maxLines);
}

export function drawCard(app, type) {
  const { t, data } = app;
  const { nickname, summary } = describeType(app, type);

  const canvas = document.createElement('canvas');
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  const ctx = canvas.getContext('2d');
  const centre = WIDTH / 2;

  // Background and dotted pattern, like the site.
  ctx.fillStyle = BACKGROUND;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);
  ctx.fillStyle = 'rgba(124, 77, 204, 0.16)';
  for (let y = 16; y < HEIGHT; y += 32) {
    for (let x = 16; x < WIDTH; x += 32) {
      ctx.beginPath();
      ctx.arc(x, y, 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  // The card: hard offset shadow, then the card itself.
  ctx.fillStyle = INK;
  roundRect(ctx, 76, 76, 960, 1210, 36);
  ctx.fill();
  ctx.fillStyle = SURFACE;
  roundRect(ctx, 60, 60, 960, 1210, 36);
  ctx.fill();
  ctx.lineWidth = 7;
  ctx.strokeStyle = INK;
  ctx.stroke();

  // Header.
  ctx.textAlign = 'center';
  ctx.textBaseline = 'alphabetic';
  ctx.fillStyle = INK;
  ctx.font = font(900, 48);
  ctx.fillText(t('ui.brand'), centre, 150);
  ctx.fillStyle = MUTED;
  ctx.font = font(800, 28);
  ctx.fillText(t('ui.share.cardEyebrow'), centre, 198);

  // The four type letters, each in its group's colour.
  ctx.font = font(900, 230);
  type.parts.forEach(({ categoryId, letter }, index) => {
    const x = centre + (index - 1.5) * 210;
    const color = data.categoryById.get(categoryId).color;
    ctx.globalAlpha = 0.25;
    ctx.fillStyle = color;
    ctx.fillText(letter, x + 8, 438);
    ctx.globalAlpha = 1;
    ctx.fillText(letter, x, 430);
  });

  // Nickname and summary, wrapped to fit.
  let y = 540;
  ctx.fillStyle = INK;
  ctx.font = font(900, 62);
  for (const line of wrap(ctx, nickname, 860, 2)) {
    ctx.fillText(line, centre, y);
    y += 76;
  }

  y -= 6;
  ctx.fillStyle = MUTED;
  ctx.font = font(500, 34);
  for (const line of wrap(ctx, summary, 820, 3)) {
    ctx.fillText(line, centre, y);
    y += 44;
  }

  // The four personalities.
  const top = Math.max(y + 40, 770);
  type.parts.forEach(({ categoryId, personalityId, letter }, index) => {
    const category = data.categoryById.get(categoryId);
    const rowY = top + index * 90;

    ctx.fillStyle = category.color;
    roundRect(ctx, 120, rowY, 60, 60, 14);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.textAlign = 'center';
    ctx.font = font(900, 34);
    ctx.fillText(category.letter, 150, rowY + 43);

    ctx.textAlign = 'left';
    ctx.fillStyle = INK;
    ctx.font = font(400, 44);
    ctx.fillText(data.personalityById.get(personalityId).emoji, 206, rowY + 46);
    ctx.font = font(900, 44);
    ctx.fillText(t(`personalities.${personalityId}.name`), 278, rowY + 44);

    ctx.textAlign = 'right';
    ctx.fillStyle = MUTED;
    ctx.font = font(700, 26);
    ctx.fillText(t(`categories.${categoryId}.title`), 960, rowY + 40);
  });

  // Footer with the address, so the picture leads people back to the quiz.
  ctx.textAlign = 'center';
  ctx.fillStyle = MUTED;
  ctx.font = font(700, 28);
  ctx.fillText(t('ui.share.cardFooter', { url: `${window.location.host}${window.location.pathname}` }), centre, 1236);

  return canvas;
}
