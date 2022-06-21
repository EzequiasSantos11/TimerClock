import React from "react";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";
import toast from "../components/Toast";
import "../../styles/global.scss";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  React.useEffect(() => {
    toast({ type: "info", message: "Wellcome to timer-job!" });
  }, []);
  return (
    <>
      <Component {...pageProps} />
      <ToastContainer
        position="bottom-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        // pauseOnVisibilityChange
        closeOnClick
        pauseOnHover
      />
    </>
  );
}

export default MyApp;
