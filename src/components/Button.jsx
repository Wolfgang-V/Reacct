import React from 'react';

const Button = (props) => {
    const { title = 'Button', color = 'btn-primary', func } = props;
    const myName = 'wG';

    const handleClick = () => {
        if (typeof func === 'function') func(myName);
    };

    return (
        <button className={`btn ${color}`} onClick={handleClick}>
            {title}
        </button>
    );
};

export default Button;