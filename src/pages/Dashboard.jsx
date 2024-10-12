import React from 'react';
import { FaRegAddressCard, FaPaste, FaPortrait } from "react-icons/fa";
import SimpleChart from "../chart/SimpleChart"
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
            {/* dashboard__rating */}
            <div className="dashboard__rating">
                <div className="rating__right">
                    <br />
                    <div className="right__text">
                        <h2>Eng yaxshi 5ta student</h2>
                        <select className='btn__select'>
                            <option className='btn__option' value="">1-guruh</option>
                            <option className='btn__option' value="">2-guruh</option>
                            <option className='btn__option' value="">3-guruh</option>
                            <option className='btn__option' value="">4-guruh</option>
                            <option className='btn__option' value="">5-guruh</option>
                        </select>
                    </div>
                    <div className="rating__top">
                        <p>O'quvchi ismi - </p>
                        <p>Baholar - </p>
                        <p>Soni - </p>
                    </div>
                    <ul className='rating__user'>
                        <li className='rat__item'>
                            <span className='rt__sp'>
                            <img  src="https://images.ctfassets.net/lh3zuq09vnm2/yBDals8aU8RWtb0xLnPkI/19b391bda8f43e16e64d40b55561e5cd/How_tracking_user_behavior_on_your_website_can_improve_customer_experience.png" alt="" />
                            <h3>Amir</h3>
                            </span>
                            <button className='rat__btn'>5</button>
                            <h3>4</h3>
                        </li>
                        <li className='rat__item'>
                            <span className='rt__sp'>
                            <img  src="https://media.nngroup.com/media/people/photos/2022-portrait-page-3.jpg.600x600_q75_autocrop_crop-smart_upscale.jpg" alt="" />
                            <h3>Abrorbek</h3>
                            </span>
                            <button className='rat__btn'>5</button>
                            <h3>2</h3>
                        </li>
                        <li className='rat__item'>
                            <span className='rt__sp'>
                            <img  src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=2311" alt="" />
                            <h3>Diyor</h3>
                            </span>
                            <button className='rat__btn'>5</button>
                            <h3>3</h3>
                        </li>
                        <li className='rat__item'>
                            <span className='rt__sp'>
                            <img  src="https://avatars.githubusercontent.com/u/744487?v=4" alt="" />
                            <h3>Khurshid</h3>
                            </span>
                            <button className='rat__btn'>5</button>
                            <h3>4</h3>
                        </li>
                        <li className='rat__item'>
                            <span className='rt__sp'>
                            <img  src="https://media.licdn.com/dms/image/v2/C4D03AQEeEyYzNtDq7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1524234561685?e=2147483647&v=beta&t=uHzeaBv3V2z6Tp6wvhzGABlTs9HR-SP-tEX1UbYNn4Q" alt="" />
                            <h3>Diyor</h3>
                            </span>
                            <button className='rat__btn'>5</button>
                            <h3>3</h3>
                        </li>
                     
                    </ul>

                </div>
                <div className="rating__left">
                    <br />
                    <h2>Guruhlar</h2>
                    <ul className='left__box'>
                        <li className='left__item'>
                            <h4>Guruhlar</h4>
                            <h4>Rating</h4>
                        </li>
                        <li className='left__item'>
                            <h4>Guruh1</h4>
                            <h4>1</h4>
                        </li>
                        <li className='left__item'>
                            <h4>Guruh2</h4>
                            <h4>2</h4>
                        </li>
                        <li className='left__item'>
                            <h4>Guruh3</h4>
                            <h4>3</h4>
                        </li>
                        <li className='left__item'>
                            <h4>Guruh4</h4>
                            <h4>4</h4>
                        </li>
                     
                    </ul>

                    
                </div>
            </div>
             
             <div className="dash__chart">
             <h2>Davomat Statistikasi</h2>
             <br />
                <SimpleChart/>
             </div>

        </div>
    );
};

export default Dashboard;