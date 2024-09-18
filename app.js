// Fetch cryptocurrency data from the backend API and display it on the page
async function fetchCryptoData() {
    try {
      const response = await fetch('/api/crypto');
      const data = await response.json();
  
      const cryptoDiv = document.getElementById('crypto-data');
      cryptoDiv.innerHTML = `
        <p>Bitcoin (BTC): $${data.bitcoin.usd}</p>
        <p>Ethereum (ETH): $${data.ethereum.usd}</p>
      `;
    } catch (error) {
      console.error('Error fetching cryptocurrency data:', error);
    }
  }
  
  // Call the function to fetch and display the data when the page loads
  window.onload = fetchCryptoData;
  