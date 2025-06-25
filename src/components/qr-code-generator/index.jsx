import { useState } from "react";
import QRCode from "react-qr-code";



export default function QrCodeGenerator() {
    const [qrCode, setQrCode] = useState("");
    const [input, setInput] = useState("");

    function handleGenerateQrCode() {
        setQrCode(input);
        setInput("");
    }
    return (
        <div>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                name="qr-code"
                value={input}
                placeholder="Enter your text"
                onChange={(e)=>setInput(e.target.value)}

            />
        <button disabled={input && input.trim()!==""?false:true} onClick={handleGenerateQrCode}>Generate</button>
            <div>
                <QRCode
                    id="qr-code-value"
                    value={qrCode}
                    size={200}
                    bgColor="white"
                className="mt-8"/>
           </div>
        </div>
    )
}