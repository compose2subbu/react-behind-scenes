import React, { useMemo } from 'react';

import Paragraph from './Paragraph'

const DemoOutput = (props) => {

    console.log("DEMO_OUTPUT");
    const { items } = props;
    const sortedList = useMemo(() => {
        console.log('sorting...')
        return items.sort((a,b) => a - b);        
    },[items]) 
    // console.log(sortedList);
    return (
        <div>
        {/* <p>{props.show ? 'This is visible!' : ''}</p> */}
        <Paragraph show={props.show}></Paragraph>
        <ul>
            {sortedList.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
        </div>
    );
};

export default React.memo(DemoOutput);
//  export default DemoOutput;