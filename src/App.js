import React from 'react';

import User from './User';
import FollowCard from './FollowCard';
const App =()=>{

    return(
    <div>
        
        <img id='logoImage' src="https://i.pinimg.com/originals/5a/4e/9e/5a4e9e5b232b9ff0848852b19665cf59.jpg" alt = "Image not found" />
    
        <br/><User username="John" url= {"https://picsum.photos/id/1001/50/50"}/> 
        <User username="Alex" url= {"https://picsum.photos/id/1005/50/50"}/>
        <User username="Sam" url= {"https://picsum.photos/id/1012/50/50"}/>
        <FollowCard>
            <User username="Rony" url={"https://picsum.photos/id/1011/50/50"}/>
        </FollowCard>
        
    </div>
    );
}
export default App;