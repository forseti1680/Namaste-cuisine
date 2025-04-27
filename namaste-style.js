// Smooth Scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Toggle Dish Selection (for ordering)
document.querySelectorAll('.dish-options span').forEach(span => {
    span.addEventListener('click', function () {
        this.classList.toggle('selected');
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode'); // Toggle dark mode class on body
});

// Toggle Menu Section (Starters, Main Dishes, etc.)
const toggleSections = document.querySelectorAll('.toggle-section');

toggleSections.forEach(section => {
    section.addEventListener('click', function () {
        const menuList = this.nextElementSibling;
        menuList.classList.toggle('hidden');
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.dish-options span');
    
    options.forEach(option => {
      option.addEventListener('click', function() {
        this.classList.toggle('selected'); // Add or remove 'selected' class
      });
    });
  });

  document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.dish-options span');
    const selectedItem = document.getElementById('selected-item');
    const selectedDishContainer = document.getElementById('selected-dish');
    const clearBtn = document.getElementById('clear-btn');
  
    // Function to update the selected dish display
    function updateSelectedDish() {
      const selected = document.querySelector('.dish-options span.selected');
      if (selected) {
        selectedItem.textContent = selected.textContent;
        selectedDishContainer.classList.remove('hidden');
      } else {
        selectedDishContainer.classList.add('hidden');
      }
    }
  
    // Adding event listeners to all dish options
    options.forEach(option => {
      option.addEventListener('click', function() {
        // Remove the "selected" class from other options
        options.forEach(item => item.classList.remove('selected'));
        // Add the "selected" class to the clicked option
        this.classList.add('selected');
        updateSelectedDish();  // Update the display of the selected dish
      });
    });
  
    // Clear selection functionality
    clearBtn.addEventListener('click', function() {
      options.forEach(item => item.classList.remove('selected'));
      updateSelectedDish();  // Refresh the display
    });
  });
  