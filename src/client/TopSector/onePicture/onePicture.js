//하나의 포스터를 띄울 때 사용
import React from 'react';
import "./onePicture.scss";
import pic from '../../../assets/pic/kimetuposter1.jpg';

const onePicture = (props) => {
    return (
        <div className="pic">
            <img src={pic} />
        </div>
    )
}

export default onePicture;