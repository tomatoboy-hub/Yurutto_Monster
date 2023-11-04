import React, { useEffect, useRef } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";
import { ChakraProvider, Container, Box, Flex } from "@chakra-ui/react";
import { useState } from "react";
import LevelUp from "./LevelUp";    
const QrCodeReader = ({ onReadQRCode }) => {
  const controlsRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) {
      return;
    }
    const codeReader = new BrowserQRCodeReader();
    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (result, error, controls) => {
        if (result) {
          onReadQRCode(result);
        }
        controlsRef.current = controls;
      }
    );
    return () => {
      controlsRef.current?.stop();
      controlsRef.current = null;
    };
  }, [onReadQRCode]);

  return <video ref={videoRef} style={{ width: "100%", height: "auto" }} />;
};

const QrApp = () => {
    const [qrUrl, setQrUrl] = useState('')
  const handleReadQRCode = (result) =>{
    setQrUrl(result.text);
  };
  useEffect(() => {
    console.log("QR URL updated:", qrUrl);
    // qrUrlが更新されたことを確認
  }, [qrUrl]);

  return (
    <ChakraProvider>
      <Container>
        <Flex flexDirection="column">
          <Box flex={1} height={"60vh"}>
            <QrCodeReader onReadQRCode={handleReadQRCode} />
          </Box>
          <LevelUp url={qrUrl} seturl={setQrUrl} />
        </Flex>
      </Container>
    </ChakraProvider>
  );
};

export default function Reader() {
  return (
    <ChakraProvider>
      <QrApp />
    </ChakraProvider>
  );
}
