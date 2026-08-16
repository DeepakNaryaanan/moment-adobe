/**
 * Decorate a top navigation bar for the hub home page.
 * @param {Element} block
 */
export default function decorate(block) {
  const row = block.querySelector(':scope > div');
  if (!row) return;

  const [brandCell, navCell, ctaCell] = [...row.children];
  if (!brandCell || !navCell || !ctaCell) return;

  brandCell.classList.add('hub-topbar-brand');
  navCell.classList.add('hub-topbar-links');
  ctaCell.classList.add('hub-topbar-cta');

  const nav = document.createElement('nav');
  [...navCell.querySelectorAll('a')].forEach((link) => nav.append(link));
  navCell.replaceChildren(nav);

  block.replaceChildren(brandCell, navCell, ctaCell);
}
