import React from 'react';
//node-sass module 필요, 아니면 node가 인식을 못함
import './topSector.scss';
import OnePicture from './onePicture/onePicture';
import NextArrow from './utilComp/bigLeftArrow';

const topSector = () => {
    //그림 url list를 놓고 for문으로 구현
    //교체는 각 div의 key와 연동하여 traslation으로 animation효과

    let pictures = ['../../assets/pic/kimetuposter1.jpg'];

    return (
        <div className="top-sector">
            <NextArrow />
            {
                pictures.map((el, index) => {
                    return <OnePicture image={el} key={index}/>;
                })
            }
            <NextArrow />
        </div>
    )
}

export default topSector;