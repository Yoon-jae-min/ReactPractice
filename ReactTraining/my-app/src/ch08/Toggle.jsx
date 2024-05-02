import React, { useState } from 'react';

function Toggle(props){
    const [isToggleOn, setIsToggleOn] = useState(false);

    const handleClick = () => {
        setIsToggleOn((isToggleOn) => !isToggleOn);
    };

    return (
        <>
            <button onClick={handleClick}>
                {isToggleOn ? '켜짐' : '꺼짐'}
            </button>
        </>
    )
}

export default Toggle;