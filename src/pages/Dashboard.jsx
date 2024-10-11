import React from 'react';
import { FaRegAddressCard, FaPaste, FaPortrait } from "react-icons/fa";




import "./Page.css"


const Dashboard = () => {
    return (
        <div>
            <h1>Dashboard</h1>
            <div className="dashboard__main">
                <div className="main__card">
                    <div className="card__icon">
                    <FaRegAddressCard />
                    </div>
                    <div className="card__text">
                        <h2>2K+</h2>
                        <p>Studentlar Soni</p>
                    </div>
                </div>
                <div className="main__card main_c2">
                    <div className="card__icon bg_cd2">
                    <FaPaste />
                    </div>
                    <div className="card__text">
                        <h2>200+</h2>
                        <p>O'qituvchilar Soni</p>
                    </div>
                </div>
                <div className="main__card main_c3">
                    <div className="card__icon bg_cd3">
                    <FaPortrait />
                    </div>
                    <div className="card__text">
                        <h2>1K+</h2>
                        <p>Bugungi talabalar</p>
                    </div>
                </div>
                
            </div>

        </div>
    );
};

export default Dashboard;