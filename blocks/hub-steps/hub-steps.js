/**
 * Decorate lifecycle/step grids.
 * @param {Element} block
 */
export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const [titleCell, subtitleCell] = [...row.children];
    const item = document.createElement('li');
    const title = document.createElement('b');
    const subtitle = document.createElement('small');

    title.textContent = titleCell ? titleCell.textContent.trim() : '';
    subtitle.textContent = subtitleCell ? subtitleCell.textContent.trim() : '';

    item.append(title, subtitle);
    list.append(item);
  });

  block.replaceChildren(list);
}
