import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import ContextWrapper from "./Context/ContextWrapper";
import { QueryClient, QueryClientProvider } from 'react-query'

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <ContextWrapper>   
    <QueryClientProvider client={queryClient}>
    <App />    
    </QueryClientProvider>
    </ContextWrapper> 
  </React.StrictMode>
);
