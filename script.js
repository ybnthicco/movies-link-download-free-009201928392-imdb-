// show download progress
const downloadButton = document.querySelector('button');
const site = document.querySelector('.site');
const positiveQuotes = [
    "Geting your link Ready!.",
    "Almost there!.",
];
let currentQuoteIndex = 0;
let quoteTimeout; // Declare a variable to hold the timeout

downloadButton.addEventListener('click', function() {
    site.classList.toggle('show');
    downloadButton.style.display = 'none'; // Hide the download button when download starts
    buffering(); // Start the download progress
    showPositiveQuote(); // Show a positive quote
});

// download progress
const buffering = () => {
    const bar = document.querySelector('.loarder');
    let width = 1;
    const interval = 100;
    let remaining = interval / 10;
    const minus_rem = remaining / 100;

    const rate = () => {
        const d = new Date();
        let seconds = d.getSeconds();

        bar.style.width = `${width}%`;
        document.querySelector('.percentage').innerHTML = `${width}%`;

        remaining = remaining - minus_rem;

        if (width >= 100) {
            remaining = 0;
            document.querySelector('.done').style.display = 'inline-block';
            clearInterval(intervale);
            stopShowingQuotes(); // Call the function to stop showing quotes
        }
        document.querySelector('.seconds').innerHTML = Math.ceil(remaining);
        width++;
    }
    const intervale = setInterval(rate, interval);
}


let positiveQuoteTimeout; // Variable to hold the timeout ID for quotes

// Show a positive quote
const showPositiveQuote = () => {
    const positiveQuoteElement = document.getElementById('positiveQuote');
    positiveQuoteElement.textContent = positiveQuotes[currentQuoteIndex];
    currentQuoteIndex = (currentQuoteIndex + 1) % positiveQuotes.length;

    // Calculate the total time for downloading
    const totalTime = 10000; // 10 seconds in milliseconds
    const numQuotes = positiveQuotes.length;
    const timePerQuote = totalTime / numQuotes;

    // Set timeout to display the next quote
    positiveQuoteTimeout = setTimeout(showPositiveQuote, timePerQuote); // Change quote every calculated time
}

// Clear the timeout when download ends or before download completes
const stopShowingQuotes = () => {
    clearTimeout(positiveQuoteTimeout); // Clear the timeout for quotes
    setTimeout(() => {
        const downloadButton = document.querySelector('button');
        downloadButton.style.display = 'none'; // Hide download button

        const positiveQuoteElement = document.getElementById('positiveQuote');
        positiveQuoteElement.style.display = 'none'; // Hide positive quote

        const popup = document.querySelector('.popup');
        popup.classList.remove('hidden'); // Show the popup
    }, 400); // Hide elements after 400 milliseconds when download starts immediately
}


// Function to show popup
const showPopup = () => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the tab
const closeTab = () => {
    window.close(); // Close the current tab
}


// Function to hide popup
const hidePopup = () => {
    const popup = document.getElementById('popup');
    const overlay = document.getElementById('overlay');
    popup.style.display = 'none';
    overlay.style.display = 'none';
}

// Call the hidePopup function initially to hide the popup
hidePopup();

// Call the showPopup function after 15 seconds
setTimeout(() => {
    showPopup(); // Show the popup after 15 seconds
}, 15000); // Show popup after 15 seconds (15000 milliseconds)
