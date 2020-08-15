if (localStorage.getItem('theme') == "light") {
    themeLight();
}
if (localStorage.getItem('theme') == "blue") {
    themeBlue();
}
if (localStorage.getItem('theme') == "green") {
    themeGreen();
}
if (localStorage.getItem('theme') == "purple") {
    themePurple();
}

function themeLight () {
    document.getElementById('theme-style').href = './styles/style.css';
    localStorage.setItem('theme', 'light');
}
function themeBlue () {
    document.getElementById('theme-style').href = './styles/blue.css';
    localStorage.setItem('theme', 'blue');
}
function themeGreen () {
    document.getElementById('theme-style').href = './styles/green.css';
    localStorage.setItem('theme', 'green');
}
function themePurple () {
    document.getElementById('theme-style').href = './styles/purple.css';
    localStorage.setItem('theme', 'purple');
}