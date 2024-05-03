import React, { useState } from 'react';
import WarningBanner from './WarningBanner';

function MainPage(props){
    const [showWarning, setShowWarning] = useState(false);

    const handleToggleClick = () => {
        setShowWarning(prevShowWarning => !prevShowWarning);
    }

    return(
        <>
            <WarningBanner warn={showWarning}/>
            <button onClick={handleToggleClick}>{showWarning ? '감추기' : '보이기'}</button>
        </>
    )
}

export default MainPage;