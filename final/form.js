document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const outputDiv = document.getElementById('submitted-data-output');
    
    if ([...urlParams.entries()].length === 0) {
        outputDiv.innerHTML = '<p>No data found in the URL. Please ensure your contact form uses method="GET".</p>';
        return;
    }

    const dataList = document.createElement('ul');

    urlParams.forEach((value, key) => {
        const formattedKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/[-_]/g, ' ');
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${formattedKey}</strong>: ${decodeURIComponent(value)}`;
        dataList.appendChild(listItem);
    });

    outputDiv.appendChild(dataList);
});