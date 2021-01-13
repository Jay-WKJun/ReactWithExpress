import React from 'react';
import './bigLeftArrow.scss';

//특정 크기에 shadow등의 약한 효과를 주고 가운데 "<"를 넣어준다.
const bigLeftArrow = (props) => {
    return (
        <div className="leftArrowDiv" >
            <span className="leftArrowDiv__leftArrowSpan">
                <i class="fas fa-chevron-left"></i>
            </span>
        </div>
    )
}

export default bigLeftArrow;