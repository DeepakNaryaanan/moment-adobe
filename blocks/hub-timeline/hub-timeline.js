/**
 * Decorate roadmap timeline items.
 * @param {Element} block
 */
export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const [phaseCell, descriptionCell] = [...row.children];
    const item = document.createElement('li');
    const phase = document.createElement('h3');
    const description = document.createElement('p');

    phase.textContent = phaseCell ? phaseCell.textContent.trim() : '';
    description.textContent = descriptionCell ? descriptionCell.textContent.trim() : '';

    item.append(phase, description);
    list.append(item);
  });

  block.replaceChildren(list);
}
