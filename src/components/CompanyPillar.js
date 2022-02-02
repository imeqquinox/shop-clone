import React from 'react';

function CompanyPillar(props) {
    return (
        <div className='home__pillar'>
            <div className='home__pillaricon'>
                {props.icon}
            </div>
            <h2 className='home__pillar title'>
                {props.title}
            </h2>
            <div className='home__pillarinfo'>
                <p>{props.info}</p>
            </div>
        </div>
    );
}

export default CompanyPillar;
