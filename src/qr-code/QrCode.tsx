import React, { FunctionComponent } from "react";
import QRCode from 'qrcode';
import { CheckCircle, ExclamationCircle, XCircle } from 'react-bootstrap-icons';
import "./QrCode.scss";
import { useEffect } from 'react';

export interface QrCodeProps {
  url: string;
  state: string;
}

export const QrCode: FunctionComponent<QrCodeProps> = (prop) => {
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
  const renderQrIcon = () => {
    switch(prop.state) {
      case "warning":
        return <ExclamationCircle className={`qr-icon dialog-icon ${prop.state}`}/>;
      case "error":
        return <XCircle className={`qr-icon dialog-icon ${prop.state}`}/>;
      default:
        return <CheckCircle className={`qr-icon dialog-icon ${prop.state}`}/>;
    }
  }

  return (
    <div id="qr-box">
      <canvas id="qr-code"></canvas>
      {renderQrIcon()}
    </div>
  );
};
