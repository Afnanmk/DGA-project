
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





