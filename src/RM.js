import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import Redirect from "./Redirect";
const RM = () => {
    //fetches paths form api
    const [paths, setPaths] = useState([]);
    useEffect(() => {
        fetch("https://opensheet.elk.sh/1kSD7R3T4gDB-Q9EuNnpE2TDosl-mipO0aCUAgAFjRHE/1")
        .then(res => res.json())
        .then(data => {
            setPaths(data);
        })
    }, []);
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            {paths.map(path => {
                return <Route path={path.path} element={<Redirect url={path.url}/>} />
            })}
        </Routes>
        </BrowserRouter>
    );
}
export default RM;