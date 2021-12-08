import React, { FunctionComponent, useEffect } from "react";
import QRCode from 'qrcode';
import { CheckCircle, ExclamationCircle } from 'react-bootstrap-icons';
import "./QrCode.scss";

export interface QrCodeProps {
  url: string;
  state: string;
}

export const QrCode: FunctionComponent<QrCodeProps> = (prop: QrCodeProps) => {
  let qrRendered = false;
  
  const writeQRtoCanvas = () => {
    try {
        QRCode.toCanvas(document.getElementById('qr-code'), prop.url || "", {
            width: 400
        });
    } catch {
        console.error('The QR code failed to write to the canvas');
    }
  }

  useEffect(() => {
    if(!qrRendered) {
      writeQRtoCanvas();
      qrRendered = true;
    }
  }, [writeQRtoCanvas]);

  return (
    <div id="qr-box">
      <canvas id="qr-code"></canvas>
        {prop.state === 'warning' ?
          <ExclamationCircle className={`qr-icon dialog-icon ${prop.state}`}/> :
          <CheckCircle className={`qr-icon dialog-icon ${prop.state}`}/> 
        }
    </div>
  );
};
