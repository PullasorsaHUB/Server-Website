const menu = document.querySelector('#mobile-menu');
const menulinks = document.querySelector('.navbar__menu');
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li'); // FIXED
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => { // FIXED
        select.classList.toggle('select-clicked'); // FIXED
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked'); // FIXED
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(opt => { // Ensure we remove 'active' from all options
                opt.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});




menu.addEventListener('click', function()
{
    menu.classList.toggle('is-active')
    menulinks.classList.toggle('active')
})