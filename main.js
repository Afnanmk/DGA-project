// Mobile menu toggle
let mobileMenu = document.getElementById("mobile-nav")
mobileMenu.style.maxHeight = "0px";

function toggleMenu() {

    if(mobileMenu.style.maxHeight == "0px")
    {
        mobileMenu.style.maxHeight = "400px"
    } else {
        mobileMenu.style.maxHeight = "0px"
    }
}


// Open and close Search bar
const searchBtn = document.getElementById('search-btn');
        const searchBar = document.getElementById('search-bar');
        const closeBtn = document.getElementById('close-btn');

        searchBtn.addEventListener('click', () => {
            searchBar.style.display = 'block'; // Show the search bar
        });

        closeBtn.addEventListener('click', () => {
            searchBar.style.display = 'none'; // Hide the search bar
        });


// Tabs active style
function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => content.classList.remove('active'));

    const tabs = document.querySelectorAll('.tab-button');
    tabs.forEach(tab => tab.classList.remove('font-bold', 'tab-content-style'));

    document.getElementById(tabId).classList.add('active');
    document.getElementById(`tab-${tabId}`).classList.add('font-bold', 'tab-content-style');
}

// Set default active tab
document.getElementById('tab-steps').classList.add('font-bold', 'tab-content-style');





