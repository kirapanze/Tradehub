import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Checking API...");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/api/health`)
      .then(response => response.json())
      .then(data => setMessage(`API status: ${data.status}; DB: ${data.database}`))
      .catch(error => setMessage(`Request failed: ${error.message}`));
  }, []);

  return <main style={{ padding: 32 }}>
    <h1>TradeHub</h1>
    <p>Connecting Korean products and African importers.</p>
    <p>{message}</p>
  </main>;
}
export default App;