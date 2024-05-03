import React, { useState } from 'react';

function WarningBanner(props){

    if(!props.warn){
        return null;
    }

    return(
        <>경고!</>
    )
}


export default WarningBanner;