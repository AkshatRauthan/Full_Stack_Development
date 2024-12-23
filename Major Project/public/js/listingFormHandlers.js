// Configuration properties
const config = {
    placeholder: 'Choose Tags', // Placeholder text for the button
    maxSelections: Math.floor(tagsData.length / 4), // Max number of selections allowed
    options: tagsData.map((obj) => obj.tagName) // Dropdown options
};

let selectedOptions = [];

// Initialize dropdown with options
function initDropdown() {
    const dropdown = document.getElementById('dropdown');
    config.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('dropdown-option');
        optionElement.id = option;
        optionElement.textContent = option;
        optionElement.onclick = () => toggleSelection(option);
        dropdown.appendChild(optionElement);
    });
}

// Toggle dropdown visibility
function toggleDropdown() {
    const dropdown = document.getElementById('dropdown');
    dropdown.style.display = dropdown.style.display === 'none' ? 'block' : 'none';
}

// Toggle selection of an option
function toggleSelection(option) {
    const optionElement = document.getElementById(option);
    if (selectedOptions.includes(option)) {
        selectedOptions = selectedOptions.filter(item => item !== option);
        optionElement.classList.remove('selected-options');
    } else {
        if (selectedOptions.length < config.maxSelections) {
            selectedOptions.push(option);
            optionElement.classList.add('selected-options');
        } else {
            alert(`You can only select up to ${config.maxSelections} options.`);
            return;
        }
    }
    updateSelectedValues();
}

// Update selected values display
function updateSelectedValues() {
    const selectedValuesBox = document.getElementById('selectedValues');
    
    // Clear previous selections
    selectedValuesBox.innerHTML = '';
    if (selectedOptions.length > 0) {
        selectedOptions.forEach(option => {
            const pill = document.createElement('span');
            pill.classList.add('selected-pill');
            pill.textContent = option;
            
            // Add remove button to each pill
            const removeBtn = document.createElement('span');
            removeBtn.classList.add('remove');
            removeBtn.textContent = '×';
            removeBtn.onclick = () => toggleSelection(option);
            pill.appendChild(removeBtn);

            selectedValuesBox.appendChild(pill);
        });
    } else {
        selectedValuesBox.textContent = 'No options selected';
    }
}

// Set initial placeholder for the button
function setPlaceholder() {
    document.querySelector('.dropdown-button').textContent = config.placeholder;
}

// Preselect existing tags in the update form
function preselectTags() {
    if (isUpdateForm) {
        existingTags.forEach(tag => {
            if (config.options.includes(tag)) {
                toggleSelection(tag);
            }
        });
    }
}

// Initialize dropdown and set properties on page load
window.onload = function() {
    setPlaceholder();
    initDropdown();
    if (isUpdateForm) {
        preselectTags();
    }
};

const form = document.getElementById('listing-form');
function addSelectedTags() {
    // Remove any existing hidden inputs for tags before adding new ones
    document.querySelectorAll('input[name="listing[tags][]"]').forEach(input => input.remove());

    // Append each selected option as a hidden input to the form
    selectedOptions.forEach(tag => {
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'listing[tags][]';
        hiddenInput.value = tag;
        form.appendChild(hiddenInput);
    });
}

// Add the selected tags as hidden inputs before the form submits
form.addEventListener('submit', addSelectedTags);