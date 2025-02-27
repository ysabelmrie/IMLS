let darkmode = localStorage.getItem('darkmode');
const themeswitch = document.getElementById('dark-icon');

const enableDarkMode = () => {
    document.body.classList.add('darkbody');
    localStorage.setItem('darkmode', 'active');
};

const disableDarkMode = () => {
    document.body.classList.remove('darkbody');
    localStorage.setItem('darkmode', 'inactive');
};

if (darkmode === 'active') {
    enableDarkMode();
}

themeswitch.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode');
    darkmode !== 'active' ? enableDarkMode() : disableDarkMode();
});