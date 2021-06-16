import React from 'react';
import './FollowCard.css';

const FollowCard = (props) =>{
    console.log(props);
    return (
        <div className="follow-Card">
            {props.children}
            <div className="follow-button">
                <button>Follow</button>
            </div>
        </div>
        //<div Profile="Images"><img src="https://picsum.photos/id/1/200/300" /></div>
        
    );
}
export default FollowCard;