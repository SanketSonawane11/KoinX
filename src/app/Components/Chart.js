'use client'

import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-mini-symbol-overview.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "symbol": "BITSTAMP:BTCUSD",
      "width": "750",
      "height": "500",
      "locale": "en",
      "dateRange": "12M",
      "colorTheme": "light",
      "trendLineColor": "rgba(60, 120, 216, 1)",
      "underLineColor": "rgba(109, 158, 235, 1)",
      "underLineBottomColor": "rgba(164, 194, 244, 1)",
      "isTransparent": true,
      "autosize": false,
      "largeChartUrl": ""
    });

    document.querySelector('.tradingview-widget-container__widget').appendChild(script);

    return () => {
      // Cleanup function
      document.querySelector('.tradingview-widget-container__widget').innerHTML = '';
    };
  }, []);

  return (
    <div className="tradingview-widget-container">
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
  );
};

export default TradingViewWidget;
