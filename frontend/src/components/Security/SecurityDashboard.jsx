import React, { useContext, useState, useEffect } from "react";
import VistorContext from "../../context/VistorContext";
import toast from "react-hot-toast";
import api from "../../services/api";
import SecurityScannedVisit from "./SecurityScannedVisit";
import { Html5QrcodeScanner } from "html5-qrcode";

const SecurityDashboard = () => {
  const { date, time, handleLogout } = useContext(VistorContext);
  const [qrCode, setQrCode] = useState("");
  const [scanResult, setScanResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showScanner, setShowScanner] = useState(false);

  useEffect(() => {
    if (!showScanner) return;

    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        fps: 10,
        qrbox: {
          width: 250,
          height: 250,
        },
      },
      false,
    );

    scanner.render(async (code) => {
      setQrCode(code);
      handleScan(code);

      await scanner.clear();

      setShowScanner(false);
    });
  }, [showScanner]);

  const handleScan = async (code = qrCode) => {
    try {
      if (!code) {
        return toast.error("ENTER QR CODE");
      }
      setLoading(true);
      const res = await api.put("/security/scan", {
        qrCode: code,
      });

      toast.success(res.data.message || "VALID PASS");

      setScanResult(res.data.visit);
    } catch (err) {
      toast.error(
        err.response.data.message || "INVALID PASS OR EXPIRED PASS :(",
      );
    } finally {
      setLoading(false);
    }
  };

  const handleApproveEntry = async (id) => {
    try {
      const res = await api.put(`/security/checkin/${id}`);

      toast.success(res.data.message);

      setScanResult(null);
      setQrCode("");
    } catch (err) {
      toast.error(err.message || "SOMETHING WENT WRONG");
    }
  };

  const handleRejectEntry = async (id) => {
    try {
      const res = await api.put(`/security/reject/${id}`);
      toast.success(res.data.message);
      setScanResult(null);
      setQrCode("");
    } catch (err) {
      toast.error(err.message || "SOMETHING WENT WRONG");
    }
  };

  const handleCheckout = async (id) => {
    try {
      const res = await api.put(`/security/checkout/${id}`);

      toast.success(res.data.message);

      setScanResult(null);
      setQrCode("");
    } catch (err) {
      toast.error(err.message || "SOMETHING WENT WRONG");
    }
  };

  return (
    <div className="max-w-[90rem]  flex-col  mx-auto justify-center flex">
      <div className=" flex  px-4 py-10 flex-col gap-8 items-center">
        <div className="flex flex-col justify-center gap-2 items-center">
          <h3 className="text-4xl font-extrabold">QR Scanner</h3>
          <p className="text-md px-10 text-[#000000a9] font-medium text-center">
            Verify visitor passes and manage entry/exit.
          </p>
        </div>

        <div className="flex text-xl flex-col justify-center items-center">
          <span>{date}</span>
          <span>{time}</span>
        </div>

        <div className="items-center flex  flex-col">
          {showScanner && (
            <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
              <div className=" bg-white flex flex-col items-center p-5 rounded-lg">
                <div
                  id="reader"
                  className="w-[350px] border flex flex-col items-center justify-center"
                />

                <button
                  onClick={() => setShowScanner(false)}
                  className="py-1 mt-5 cursor-pointer bg-black text-white px-6 "
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}
          <div className="border-5 h-60 w-60 rounded-3xl justify-center items-center flex">
            <span
              onClick={() => setShowScanner(true)}
              style={{ fontSize: "100px", color: "#838590" }}
              className="material-symbols-outlined cursor-pointer"
            >
              qr_code_scanner
            </span>
          </div>

          <span className="text-2xl">or</span>

          <div className="flex flex-col gap-2">
            <input
              value={qrCode}
              onChange={(x) => setQrCode(x.target.value)}
              type="text"
              className="border outline-0 px-6 py-2"
              placeholder="VISTRA-1-AFKYT..."
            />
            <button
              onClick={handleScan}
              className="bg-black cursor-pointer text-white py-2 "
            >
              MANUAL TRIGGER
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="text-[red] font-extrabold cursor-pointer w-fit mx-auto px-6"
      >
        LOGOUT
      </button>

      {scanResult && (
        <SecurityScannedVisit
          visit={scanResult}
          onClose={() => setScanResult(null)}
          onApprove={handleApproveEntry}
          onReject={handleRejectEntry}
          onCheckout={handleCheckout}
        />
      )}
    </div>
  );
};

export default SecurityDashboard;
