import React from 'react';

const List = (props) => {
    const { tips } = props;
    if (!tips || tips.length === 0) return <p>Tips comming soon!</p>;
    
    return (
        <div>
            {tips.map((tip) => {
                return (
                    <div className="tip-card" key={tip.id}>
                        <h3>{tip.num}</h3>
                        <h3>{tip.name}</h3>
                        <div className="tip-info">
                            <p>{tip.info01}</p>
                            <p>{tip.info02}</p>
                            <p>{tip.info03}</p>
                            <p>{tip.info04}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default List;