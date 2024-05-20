document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    var fileInput = document.getElementById('fileInput');
    var file = fileInput.files[0];
    var formData = new FormData();
    formData.append('file', file);

    fetch('/upload', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        // Display the result or handle it as needed
        alert(data);
    })
    .catch(error => {
        console.error('Error:', error);
    });
});
// Function to display the selected file name in the upload form
document.getElementById('fileInput').addEventListener('change', function() {
    var fileInput = this;
    var fileNameDisplay = document.getElementById('file-name');
    var fileNameContainer = document.getElementById('file-name-container');
    
    // Remove any previously displayed file names
    while (fileNameContainer.firstChild) {
        fileNameContainer.removeChild(fileNameContainer.firstChild);
    }
    
    if (fileInput.files.length > 0) {
        // Create a new span element to display the file name
        var fileNameSpan = document.createElement('span');
        fileNameSpan.textContent = fileInput.files[0].name;
        fileNameSpan.classList.add('file-name');
        
        // Append the span element to the container
        fileNameContainer.appendChild(fileNameSpan);
    } else {
        // If no file is selected, display "No file chosen"
        fileNameDisplay.textContent = 'No file chosen';
    }
});


