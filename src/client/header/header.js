import React from 'react';
import "./header.scss";

const header = () => {
    return (
        <div className="header">
            <div className="header__headerLinks">
                <a href="#" id="ServiceLogo">CLONE</a>
                <a href="#" id="tagSearch">タグ検索</a>
                <a href="#" id="weeklyNew">週間新作</a>
                <a href="#" id="recommendation">おすすめ！</a>
                <a href="#" id="memberService">メンバーサービス</a>
            </div>
            <div className="header__right">
                <span id="searchIcon">
                    <i className="fas fa-search"></i>
                </span>
                <a href="#" id="signIn">Sign in/up</a>
            </div>
        </div>
    );
}

export default header;