import React from 'react'
import './Card.css'

const Dashboard = () => {
    return (
        <>
            <div className="wrapper">

                <div className="table basic">
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">29</span>
                            </div>
                        </div>
                    </div>
                    <div className="package-name"></div>
                    <ul className="features">
                        <li>
                            <span className="list-name">One Selected Template</span>

                        </li>
                        <li>
                            <span className="list-name">100% Responsive Design</span>

                        </li>
                        <li>
                            <span className="list-name">Credit Remove Permission</span>

                        </li>
                        <li>
                            <span className="list-name">Lifetime Template Updates</span>

                        </li>
                    </ul>
                    <div className="btn"><button>Get started</button></div>
                </div>
                <div className="table premium">
                    <div className="ribbon"><span>Recommend</span></div>
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">59</span>
                            </div>
                        </div>
                    </div>
                    <div className="package-name"></div>
                    <ul className="features">
                        <li>
                            <span className="list-name">Five Existing Templates</span>

                        </li>
                        <li>
                            <span className="list-name">100% Responsive Design</span>

                        </li>
                        <li>
                            <span className="list-name">Credit Remove Permission</span>

                        </li>
                        <li>
                            <span className="list-name">Lifetime Template Updates</span>

                        </li>
                    </ul>
                    <div className="btn"><button>Get started</button></div>
                </div>
                <div className="table ultimate">
                    <div className="price-section">
                        <div className="price-area">
                            <div className="inner-area">
                                <span className="text">$</span>
                                <span className="price">99</span>
                            </div>
                        </div>
                    </div>
                    <div className="package-name"></div>
                    <ul className="features">
                        <li>
                            <span className="list-name">All Existing Templates</span>

                        </li>
                        <li>
                            <span className="list-name">100% Responsive Design</span>

                        </li>
                        <li>
                            <span className="list-name">Credit Remove Permission</span>

                        </li>
                        <li>
                            <span className="list-name">Lifetime Template Updates</span>

                        </li>
                    </ul>
                    <div className="btn"><button>Get started</button></div>
                </div>
            </div>


        </>
    )
}

export default Dashboard