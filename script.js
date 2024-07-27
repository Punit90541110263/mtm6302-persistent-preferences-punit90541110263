document.addEventListener('DOMContentLoaded', () => {
    const backgroundColorPicker = document.getElementById('backgroundColorPicker');
    const textColorPicker = document.getElementById('textColorPicker');
    const savePreferencesButton = document.getElementById('savePreferences');
    const resetPreferencesButton = document.getElementById('resetPreferences');

    // Load preferences from local storage
    const loadPreferences = () => {
        const backgroundColor = localStorage.getItem('backgroundColor');
        const textColor = localStorage.getItem('textColor');
        if (backgroundColor) document.body.style.backgroundColor = backgroundColor;
        if (textColor) document.body.style.color = textColor;
        backgroundColorPicker.value = backgroundColor || '#f0f0f0';
        textColorPicker.value = textColor || '#333333';
    };

    // Save preferences to local storage
    const savePreferences = () => {
        const backgroundColor = backgroundColorPicker.value;
        const textColor = textColorPicker.value;
        localStorage.setItem('backgroundColor', backgroundColor);
        localStorage.setItem('textColor', textColor);
        loadPreferences();
    };

    // Reset preferences to default
    const resetPreferences = () => {
        localStorage.removeItem('backgroundColor');
        localStorage.removeItem('textColor');
        loadPreferences();
    };

    // Event listeners
    savePreferencesButton.addEventListener('click', savePreferences);
    resetPreferencesButton.addEventListener('click', resetPreferences);

    loadPreferences();
});
