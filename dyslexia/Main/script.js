document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;
    const settingsToggleBtn = document.getElementById('settings-toggle');
    const settingsPanel = document.getElementById('settings-panel');
    const closeSettingsBtn = document.getElementById('close-settings-btn');

    const fontFamilySelect = document.getElementById('font-family-select');
    const fontSizeSlider = document.getElementById('font-size-slider');
    const fontSizeValue = document.getElementById('font-size-value');
    const lineHeightSlider = document.getElementById('line-height-slider');
    const lineHeightValue = document.getElementById('line-height-value');
    const letterSpacingSlider = document.getElementById('letter-spacing-slider');
    const letterSpacingValue = document.getElementById('letter-spacing-value');

    const normalThemeBtn = document.getElementById('normal-theme-btn');
    const darkModeBtn = document.getElementById('dark-mode-btn');
    const highContrastBtn = document.getElementById('high-contrast-btn');

    settingsToggleBtn.addEventListener('click', () => {
        settingsPanel.classList.toggle('open');
    });

    closeSettingsBtn.addEventListener('click', () => {
        settingsPanel.classList.remove('open');
    });

    function applyDyslexiaSettings() {
        const selectedFont = fontFamilySelect.value;
        if (selectedFont === 'OpenDyslexic') {
            body.classList.add('dyslexia-font-opendyslexic');
            body.style.fontFamily = "'OpenDyslexic', sans-serif";
        } else {
            body.classList.remove('dyslexia-font-opendyslexic');
            body.style.fontFamily = `'${selectedFont}', sans-serif`;
        }

        const fontSize = fontSizeSlider.value + 'px';
        body.style.fontSize = fontSize;
        fontSizeValue.textContent = fontSize;

        const lineHeight = lineHeightSlider.value;
        body.style.lineHeight = lineHeight;
        lineHeightValue.textContent = lineHeight;

        const letterSpacing = letterSpacingSlider.value + 'em';
        body.style.letterSpacing = letterSpacing;
        letterSpacingValue.textContent = letterSpacing;

        localStorage.setItem('dyslexiaSettings', JSON.stringify({
            fontFamily: fontFamilySelect.value,
            fontSize: fontSizeSlider.value,
            lineHeight: lineHeightSlider.value,
            letterSpacing: letterSpacingSlider.value,
            theme: body.dataset.theme
        }));
    }

    fontFamilySelect.addEventListener('change', applyDyslexiaSettings);
    fontSizeSlider.addEventListener('input', applyDyslexiaSettings);
    lineHeightSlider.addEventListener('input', applyDyslexiaSettings);
    letterSpacingSlider.addEventListener('input', applyDyslexiaSettings);

    function setTheme(themeName) {
        body.classList.remove('dark-mode', 'high-contrast');
        body.dataset.theme = themeName;

        if (themeName === 'dark') {
            body.classList.add('dark-mode');
        } else if (themeName === 'high-contrast') {
            body.classList.add('high-contrast');
        }
        
        applyDyslexiaSettings();
    }

    normalThemeBtn.addEventListener('click', () => setTheme('normal'));
    darkModeBtn.addEventListener('click', () => setTheme('dark'));
    highContrastBtn.addEventListener('click', () => setTheme('high-contrast'));

    function loadSavedSettings() {
        const savedSettings = JSON.parse(localStorage.getItem('dyslexiaSettings'));
        if (savedSettings) {
            fontFamilySelect.value = savedSettings.fontFamily || 'Arial';
            fontSizeSlider.value = savedSettings.fontSize || 16;
            lineHeightSlider.value = savedSettings.lineHeight || 1.6;
            letterSpacingSlider.value = savedSettings.letterSpacing || 0.03;
            setTheme(savedSettings.theme || 'normal');
        }
        applyDyslexiaSettings();
    }

    loadSavedSettings();
});
