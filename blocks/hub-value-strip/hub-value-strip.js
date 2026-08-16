/**
 * Decorate inline value statements.
 * @param {Element} block
 */
export default function decorate(block) {
  const items = document.createElement('ul');

  [...block.children].forEach((row) => {
    const [textCell] = [...row.children];
    if (!textCell) return;
    const item = document.createElement('li');
    item.textContent = textCell.textContent.trim();
    items.append(item);
  });

  block.replaceChildren(items);
}
