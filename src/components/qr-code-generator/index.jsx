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
      <div className=" justify-center items-center flex mt-10">
        <div>
          <h1>QR Code Generator</h1>
                <input
                    className="border-gray-500 rounded-b-sm mr-3 p-1"
            type="text"
            name="qr-code"
            value={input}
            placeholder="Enter your text"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className=" border-r-indigo-700 bg-blue-500 text-white px-3 py-2 rounded-xl hover:bg-blue-600 hover:cursor-pointer"
            disabled={input && input.trim() !== "" ? false : true}
            onClick={handleGenerateQrCode}
          >
            Generate
          </button>
          <div>
            <QRCode
              id="qr-code-value"
              value={qrCode}
              size={200}
              bgColor="white"
              className="mt-8"
            />
          </div>
        </div>
      </div>
    );
}