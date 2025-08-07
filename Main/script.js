const settingsToggle = document.getElementById('settings-toggle');
const settingsPanel = document.getElementById('settings-panel');
const closeSettingsBtn = document.getElementById('close-settings-btn');
const mainContent = document.body;
const fontFamilySelect = document.getElementById('font-family-select');
const fontSizeSlider = document.getElementById('font-size-slider');
const fontSizeValue = document.getElementById('font-size-value');
const lineHeightSlider = document.getElementById('line-height-slider');
const lineHeightValue = document.getElementById('line-height-value');
const letterSpacingSlider = document.getElementById('letter-spacing-slider');
const letterSpacingValue = document.getElementById('letter-spacing-value');
const normalThemeBtn = document.getElementById('normal-theme-btn');
const darkModeBtn = document.getElementById('dark-mode-btn');

function applySettings() {
    const textElements = document.querySelectorAll('p, h1, h3, a, button');
    textElements.forEach(element => {
        element.style.fontFamily = fontFamilySelect.value;
        element.style.fontSize = `${fontSizeSlider.value}px`;
        element.style.lineHeight = lineHeightSlider.value;
        element.style.letterSpacing = `${letterSpacingSlider.value}em`;
    });
    fontSizeValue.textContent = `${fontSizeSlider.value}px`;
    lineHeightValue.textContent = lineHeightSlider.value;
    letterSpacingValue.textContent = `${letterSpacingSlider.value}em`;
}

document.addEventListener('DOMContentLoaded', applySettings);
fontFamilySelect.addEventListener('change', applySettings);
fontSizeSlider.addEventListener('input', applySettings);
lineHeightSlider.addEventListener('input', applySettings);
letterSpacingSlider.addEventListener('input', applySettings);

normalThemeBtn.addEventListener('click', () => {
    mainContent.classList.remove('bg-gray-900', 'text-white', 'high-contrast');
    mainContent.classList.add('bg-custom-gradient', 'text-white');
    document.querySelector('header').classList.remove('bg-blue-600');
    document.querySelector('header').classList.add('bg-custom-gradient');
});

darkModeBtn.addEventListener('click', () => {
    mainContent.classList.remove('bg-custom-gradient', 'text-white', 'high-contrast');
    mainContent.classList.add('bg-gray-900', 'text-white');
    document.querySelector('header').classList.remove('bg-custom-gradient');
    document.querySelector('header').classList.add('bg-gray-800');
});

settingsToggle.addEventListener('click', () => {
    settingsPanel.classList.add('open');
});

closeSettingsBtn.addEventListener('click', () => {
    settingsPanel.classList.remove('open');
});