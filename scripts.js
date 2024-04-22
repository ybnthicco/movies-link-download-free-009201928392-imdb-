// Function to hide movie details
const hideMovieDetails = () => {
    const movieDetails = document.querySelector('.movie-details');
    movieDetails.style.display = 'none';
}

// Function to show movie details
const showMovieDetails = () => {
    const movieDetails = document.querySelector('.movie-details');
    movieDetails.style.display = 'block';
}

// Function to show popup
const showPopup = () => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to hide popup
const hidePopup = () => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Function to handle download button click
const handleDownloadClick = () => {
    hideMovieDetails(); // Hide movie details when download starts
    showPopup(); // Show the popup
}

// Call the hidePopup function initially to hide the popup
hidePopup();

// Attach event listener to download button
const downloadButton = document.querySelector('.download-button');
downloadButton.addEventListener('click', handleDownloadClick);

// Call the showMovieDetails function after 15 seconds
setTimeout(() => {
    showMovieDetails(); // Show movie details after 15 seconds
}, 15000); // Show movie details after 15 seconds (15000 milliseconds)
