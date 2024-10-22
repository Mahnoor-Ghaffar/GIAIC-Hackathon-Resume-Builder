/*==================== DARK LIGHT THEME ====================*/
var themeButton = document.getElementById('theme-button');
var darkTheme = 'dark-theme';
var iconTheme = 'bx-sun';
// Previously selected topic (if user selected)
var selectedTheme = localStorage.getItem('selected-theme');
var selectedIcon = localStorage.getItem('selected-icon');
// We obtain the current theme that the interface has by validating the dark-theme class
var getCurrentTheme = function () {
    return document.body.classList.contains(darkTheme) ? 'dark' : 'light';
};
var getCurrentIcon = function () {
    return themeButton && themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';
};
// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, we check if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
    if (themeButton) {
        themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
    }
}
// Activate / deactivate the theme manually with the button
themeButton === null || themeButton === void 0 ? void 0 : themeButton.addEventListener('click', function () {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme);
    if (themeButton) {
        themeButton.classList.toggle(iconTheme);
    }
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon());
});
//--------------------Toggle-----------------
// main.ts
// Get the button and the references section
var toggleButton = document.getElementById('toggle-references');
var moreReferences = document.getElementById('more-references');
// Add an event listener to the button
toggleButton.addEventListener('click', function () {
    // Toggle the visibility of the more references section
    if (moreReferences.style.display === 'none') {
        moreReferences.style.display = 'block';
        toggleButton.textContent = 'Show Less References'; // Change button text
    }
    else {
        moreReferences.style.display = 'none';
        toggleButton.textContent = 'Show More References'; // Change button text
    }
});
