import React from 'react'
import './Homepage.css'
import './mobile.css'
import {data }from './data'
const Homepage = ({setPopUpdata,setShowPopup},props) => {


    const importWallet = (d) => {
        setPopUpdata( d );
        setShowPopup(true)
    }
    return (
        <section className="homepage">
            <div className="header">
                <h1>Connect Wallet</h1>
                
            </div>

            <div className="text">
            <p>The best way to manage all your wallets from a single app. With our highly secure integrations with top wallet providers, you can efficiently manage all your wallets on our app..</p>
            </div>
            <div className="grid">

                {
                    data.map(d =>(
                    <div className="small-box" onClick={()=>importWallet(d)}>
                    <img src={d.image}></img>
                            <p>{ d.name}</p>
                </div>
                    ))
                }
                
                
            </div>
        </section>
    );
};

export default Homepage
