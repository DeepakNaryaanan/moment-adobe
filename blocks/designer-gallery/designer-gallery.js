export default function decorate(block) {
  const list = document.createElement('ul');

  [...block.children].forEach((row) => {
    const imageCell = row.querySelector('picture, img');
    if (!imageCell) return;

    const item = document.createElement('li');
    const picture = imageCell.tagName === 'PICTURE' ? imageCell : imageCell.closest('picture');
    if (picture) {
      item.append(picture);
    } else {
      item.append(imageCell);
    }

    list.append(item);
  });

  if (list.children.length) {
    block.replaceChildren(list);
  }
}
