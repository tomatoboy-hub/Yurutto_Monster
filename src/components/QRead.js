import React, { useEffect, useRef, useState } from "react";
import { BrowserQRCodeReader } from "@zxing/browser";
import {
  Box,
  ChakraProvider,
  Container,
  Fade,
  Flex,
  Heading,
  Table,
  Tbody,
  Td,
  Tr
} from "@chakra-ui/react";

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
        if (error) {
          return;
        }
        if (result) {
          onReadQRCode(result);
        }
        controlsRef.current = controls;
      }
    );
    return () => {
      if (controlsRef.current) {
        controlsRef.current.stop();
        controlsRef.current = null;
      }
    };
  }, [onReadQRCode]);

  return (
    <video
      style={{ maxWidth: "100%", maxHeight: "100%", height: "100%" }}
      ref={videoRef}
    />
  );
};

const QrCodeResult = ({ qrCodes }) => {
  return (
    <Table>
      <Tbody>
        {qrCodes.map((qr, i) => (
          <Tr key={i}>
            <Td>
              <Fade in={true}>{qr}</Fade>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

const QrApp = () => {
  const [qrCodes, setQrCodes] = useState([]);

  return (
    <ChakraProvider>
      <Container>
        <Flex flexDirection="column">
          <Box flex={1} height={"60vh"}>
            <QrCodeReader
              onReadQRCode={(result) => {
                setQrCodes((codes) => [result.getText(), ...codes]);
              }}
            />
          </Box>
          <Box flex={1} height={"40vh"}>
            <Heading>Result</Heading>
            <QrCodeResult qrCodes={qrCodes} />
          </Box>
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
