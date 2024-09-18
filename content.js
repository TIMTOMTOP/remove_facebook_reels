// Function to remove the Reels section
function removeReels() {
    // Select the Reels element using its unique attributes
    const reelsElement = document.querySelector('div[aria-label="Reels"]');
  
    if (reelsElement) {
      reelsElement.style.display = 'none';
    }
  }
  
  // Run the function on page load
  window.addEventListener('load', removeReels);
  
  // Observe for changes in the DOM to handle dynamic content loading
  const observer = new MutationObserver(removeReels);
  observer.observe(document.body, { childList: true, subtree: true });
  