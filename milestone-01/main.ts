/*==================== DARK LIGHT THEME ====================*/ 

const themeButton = document.getElementById('theme-button') as HTMLButtonElement | null;
const darkTheme = 'dark-theme';
const iconTheme = 'bx-sun';

const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

const getCurrentTheme = (): string => 
  document.body.classList.contains(darkTheme) ? 'dark' : 'light';

const getCurrentIcon = (): string => 
  themeButton && themeButton.classList.contains(iconTheme) ? 'bx-moon' : 'bx-sun';


if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme);
  if (themeButton) {
    themeButton.classList[selectedIcon === 'bx-moon' ? 'add' : 'remove'](iconTheme);
  }
}


themeButton?.addEventListener('click', () => {
  document.body.classList.toggle(darkTheme);
  if (themeButton) {
    themeButton.classList.toggle(iconTheme);
  }
  localStorage.setItem('selected-theme', getCurrentTheme());
  localStorage.setItem('selected-icon', getCurrentIcon());
});




//--------------------Toggle-----------------
const toggleButton = document.getElementById('toggle-references') as HTMLButtonElement;
const moreReferences = document.getElementById('more-references') as HTMLDivElement;

toggleButton.addEventListener('click', () => {
    if (moreReferences.style.display === 'none') {
        moreReferences.style.display = 'block';
        toggleButton.textContent = 'Show Less References';
    } else {
        moreReferences.style.display = 'none';
        toggleButton.textContent = 'Show More References'; 
    }
});
