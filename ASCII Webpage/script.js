document.addEventListener('DOMContentLoaded', function() {
  // Set initial button text based on the current theme
  updateButtonText();

  document.getElementById('toggleTheme').addEventListener('click', function() {
    // Toggle dark theme class on body
    const isDarkTheme = document.body.classList.toggle('dark-theme');

    // Update button text based on the theme
    updateButtonText();
    
    // Save the theme preference in local storage
    localStorage.setItem('dark-theme', isDarkTheme);
  });
});

function updateButtonText() {
  const button = document.getElementById('toggleTheme');
  if (document.body.classList.contains('dark-theme')) {
    button.textContent = 'Toggle Light Theme';
  } else {
    button.textContent = 'Toggle Dark Theme';
  }
}
