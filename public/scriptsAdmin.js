const view = document.querySelectorAll('.view');
const edit = document.querySelector('.edit');

// Open recipe page
for (let i = 0; i < view.length; i++) {
  view[i].addEventListener('click', function () {
    window.location.href = `/admin/recipes/${i}`;
  });
}
const currentPage = location.pathname;
edit.addEventListener('click', function () {
  window.location.href = `${currentPage}/edit`;
});
