/**
 * Decorate a cinematic hero block.
 * @param {Element} block
 */
export default function decorate(block) {
  const firstRow = block.querySelector(':scope > div');
  if (!firstRow) return;

  const columns = [...firstRow.children];
  const content = columns[0] || document.createElement('div');
  const visual = columns[1] || document.createElement('div');

  content.classList.add('hub-hero-content');
  visual.classList.add('hub-hero-visual');

  if (!visual.children.length) {
    const mark = document.createElement('span');
    mark.className = 'hub-hero-mark';
    mark.textContent = 'A';
    visual.append(mark);
  }

  block.replaceChildren(content, visual);
}
