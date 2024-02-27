'use client'

import React, { useEffect, useState } from 'react';

function Trending() {
    const [trendingCoins, setTrendingCoins] = useState([]);

    useEffect(() => {
        const getCoins = async () => {
            try {
                const response = await fetch('https://api.coingecko.com/api/v3/search/trending');
                const data = await response.json();
                const trendingCoinsData = data.coins.slice(0, 3);
                const coinsWithDetails = await Promise.all(trendingCoinsData.map(async (coin) => {
                    const coinDetailsResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.item.id}`);
                    const coinDetailsData = await coinDetailsResponse.json();
                    return {
                        ...coin,
                        logo: coinDetailsData.image.small,
                        priceChange: coinDetailsData.market_data.price_change_percentage_24h
                    };
                }));
                setTrendingCoins(coinsWithDetails);
            } catch (err) {
                console.log("Something went wrong", err);
            }
        };
        getCoins();
    }, []);

    const renderPriceChange = (priceChange) => {
        const direction = priceChange > 0 ? 'up' : 'down';
        const arrowStyle = {
            backgroundColor: direction === 'up' ? '#EBF9F4' : 'red',
            color: direction === 'up' ? '#14B079' : 'white',
            padding: '2px 5px',
            borderRadius: '4px',
        };
        return (
            <span style={arrowStyle}>
                {direction === 'up' ? '▲' : '▼'} {Math.abs(priceChange).toFixed(2)}%
            </span>
        );
    };


    return (
        <div className='trending'>
            <h1>Trending Coins (24h)</h1>
            {trendingCoins.length > 0 ? (
                <ul className='my-[15px]'>
                    {trendingCoins.map((coin) => (
                        <li key={coin.item.id} className='my-[10px] text-[15px] lg:my-[15px] lg:text-[16px] font-medium flex items-center justify-between lg:gap-[10px]'>
                            <div className='flex items-center gap-[10px]'>
                                <img src={coin.logo} alt={`${coin.item.name} logo`} className='w-[35px]' style={{ borderRadius: '50%' }} />
                                <strong>{coin.item.name}</strong>({coin.item.symbol})
                            </div>
                            {renderPriceChange(coin.priceChange)}
                        </li>
                    ))}
                </ul>
            ) : (
                <>
                    <p className='text-[18px] font-semibold'>Loading ...</p>
                    {getCoins()}
                </>
            )}
        </div>
    );
}

export default Trending;

