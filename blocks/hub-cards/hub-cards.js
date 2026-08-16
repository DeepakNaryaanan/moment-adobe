/**
 * Decorate capability and card-grid sections.
 * @param {Element} block
 */
export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const columns = [...row.children];
    const item = document.createElement('li');
    const iconCell = columns[0];
    const bodyCell = columns[1] || columns[0];
    const flagCell = columns[2];

    if (iconCell && columns.length > 1 && iconCell.textContent.trim()) {
      const icon = document.createElement('div');
      icon.className = 'hub-cards-icon';
      icon.textContent = iconCell.textContent.trim();
      item.append(icon);
    }

    const body = document.createElement('div');
    body.className = 'hub-cards-body';
    while (bodyCell.firstElementChild) body.append(bodyCell.firstElementChild);
    item.append(body);

    if (flagCell) {
      const flags = flagCell.textContent
        .split(/[,\s]+/)
        .map((flag) => flag.trim().toLowerCase())
        .filter(Boolean);
      flags.forEach((flag) => item.classList.add(`is-${flag}`));
    }

    list.append(item);
  });

  block.replaceChildren(list);
}
