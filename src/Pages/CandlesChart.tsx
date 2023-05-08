import React from "react";
import CandleStickChart from "../components/Candlestick/CandleStickChart";
import ToolsAndTips from "../components/ToolsAndTips";
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';


function CandlesChart() {
return(
  <div className="bg">
    <Header />

    <ToolsAndTips />
    <div className=''></div>
    <CandleStickChart/>
    <div className='bg-black' style={{height:"50px", opacity:'30%'}}></div>
    <Footer />
    

  </div>
)
}

export default CandlesChart;
