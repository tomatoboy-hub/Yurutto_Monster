import { useState } from "react";
import { useZxing } from "react-zxing";

export const QrCodeReader = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onResult(result) {
      console.log("test");
      setResult(result.getText());
    },
  });

  return (
    <>
      <video ref={ref} />
      <p>
        <h2>QRコードのデータ</h2>
        {result ? <p>{result}</p> : <p>QRコードが見つかりません。</p>}
      </p>
    </>
  );
};

export default QrCodeReader;
