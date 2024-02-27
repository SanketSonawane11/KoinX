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
                const coinsWithLogos = await Promise.all(trendingCoinsData.map(async (coin) => {
                    const coinDetailsResponse = await fetch(`https://api.coingecko.com/api/v3/coins/${coin.item.id}`);
                    const coinDetailsData = await coinDetailsResponse.json();
                    return { ...coin, logo: coinDetailsData.image.small };
                }));
                setTrendingCoins(coinsWithLogos);
            } catch (err) {
                console.log("Something went wrong", err);
            }
        }
        getCoins();
    }, []);

    return (
        <div className='trending'>
            <h1>Trending Coins (24h)</h1>
            {
                trendingCoins[2] ?
                    <ul className='my-[15px]'>
                        {trendingCoins.map((coin) => (
                            <li key={coin.item.id} className='my-[10px] text-[16px]  font-medium flex items-center gap-[10px]'>
                                <img src={coin.logo} alt={`${coin.item.name} logo`} />
                                <strong>{coin.item.name}</strong>({coin.item.symbol})
                            </li>
                        ))}
                    </ul> : <p className='text-[18px] font-semibold'>Loading ...</p>
            }
        </div>
    );
}

export default Trending;
