import React from 'react';

const MemberCard = ({name, role, image}) => {
    return (
    <li className="memberInfos">
        <img className='memberPic' src={image} alt={name} />
        <h2>{name}</h2>
        <h3>{role}</h3>
        <p> Linkedin ?</p>
    </li>
    );
};

export default MemberCard;