import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const APIURL = "https://service-testnet.maschain.com";
  const clientId = "27f191182d26703e7f85e292c498ef26ffe0f4722bb64a34d204029926ca6701"
  const clientSecret = "sk_4200dd0a0eed83c5020fd18c56ba586fa16d7dcd80b778ed564e7174ce87ba85";

  useEffect(() => {
    fetch(`${APIURL}/api/token/mint`, {
      method: 'POST',
      headers: {
        'client_id': clientId,
        'client_secret': clientSecret,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'wallet_address': '0xf6878d7Ad5115f350f6a3B430864870F98Ca49Cb',
        'to': '0xd6c99693164527ea447Be10f12eC87B065745C28',
        'amount': '1',
        'contract_address': '0x56BCCdc877F7392d4f6CE5066b06A3FA0766051a',
        'callback_url': 'https://postman-echo.com/post?'
      })
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })

})

  return (
    <div className="test-maschain">

    </div>
  )
}

export default App
