import React, { useState } from 'react';

function FruitSelect(props){
    const [value, setValue] = useState('grape');

    const selectChange = (event) => {
        setValue(event.target.value);
    }

    const formSubmit = (event) => {
        alert('선택한 과일: ' + value);
        event.preventDefault();
    }

    return(
        <form onSubmit={formSubmit}>
            <label>
                과일을 선택하세요: 
                <select value={value} onChange={selectChange}>
                    <option value="apple">사과</option>
                    <option value="banana">바나나</option>
                    <option value="grape">포도</option>
                    <option value="waterMelon">수박</option>
                </select>
            </label>
            <button type='submit'>제출</button>
        </form>
    )
}

export default FruitSelect;