import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from 'redaxios';
import { SWRConfig } from "swr";


// React.StrictMode causes every data fetching twice
// Global configuration for fetcher using readAxios
// By default swr refetches when window is focused

const fetcher = (url: string) => axios(url).then((res) => res.data);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <BrowserRouter>
    <SWRConfig  value={{
                fetcher,
                revalidateOnFocus: false }}>
      <App />
    </SWRConfig>
  </BrowserRouter>
);