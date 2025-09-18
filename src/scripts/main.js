'use strict';

const rows = document.querySelectorAll('thead tr, tbody tr, tfoot tr');

rows.forEach((row) => {
  const clone = row.children[1].cloneNode(true);

  row.insertBefore(clone, row.children[row.children.length - 1]);
});
