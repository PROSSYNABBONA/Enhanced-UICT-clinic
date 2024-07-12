
    function showTab(tabId) {
        // Hide all tab contents
        let tabContents = document.querySelectorAll('.tab-content');
        tabContents.forEach(tab => {
            tab.classList.add('hidden');
        });

        // Remove active class from all tab links
        const tabLinks = document.querySelectorAll('nav a');
        tabLinks.forEach(link => {
            link.classList.remove('text-blue-500', 'border-blue-500');
            link.classList.add('text-gray-500');
        });

        // Show the selected tab content
        let selectedTab = document.getElementById(tabId);
        selectedTab.classList.remove('hidden');

        // Add active class to the clicked tab link
        const activeLink = Array.from(tabLinks).find(link => link.getAttribute('onclick') === `showTab('${tabId}')`);
        activeLink.classList.add('text-blue-500', 'border-blue-500');
    }

    // Event listener to close dropdowns when clicking outside
    document.addEventListener('click', function (event) {
        if (!event.target.closest('.dropdown-trigger')) {
            closeAllDropdowns();
        }
    });

    function closeAllDropdowns() {
        // Get all dropdowns and their icons
        const dropdowns = document.querySelectorAll('.dropdown-menu');
        const icons = document.querySelectorAll('.dropdown-icon');

        // Close all dropdowns
        dropdowns.forEach(dropdown => {
            dropdown.classList.add('hidden');
        });

        // Reset all icons to plus
        icons.forEach(icon => {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        });
    }

      function toggleDropdown(menuId) {
        const icon = document.getElementById(`${menuId}Icon`);
        const dropdown = document.getElementById(`${menuId}Dropdown`);
        if (icon.classList.contains('fa-plus')) {
            icon.classList.remove('fa-plus');
            icon.classList.add('fa-minus');
        } else {
            icon.classList.remove('fa-minus');
            icon.classList.add('fa-plus');
        }
        dropdown.classList.toggle('hidden');
    }


