import {Link} from 'react-router-dom';
import {useContext, useState} from 'react'
import ContentContext from './ContentContext.js'
import ProfileCard from './ProfileCard'
import {BrowserRouter as Router, Route, useHistory} from 'react-router-dom'



function handleClick(e, history, currentSelected, setCurrentSelected){
    if(Number(e.target.id) === currentSelected) {
        history.push('/profiles');
        setCurrentSelected(-1);
    } else {
        history.push(`/profiles/${e.target.id}`);
        setCurrentSelected(Number(e.target.id));
    }
}





const Profiles = (selectedId) => {
    const content = useContext(ContentContext)
    const [ currentSelected, setCurrentSelected ] = useState(-1);

    const history = useHistory();

    return (
        <div>
            {content.contactProfiles.map((item, index) => {
                return (
                <div id={index} className="profile-content">
                    <p id={index} onClick={(e) => handleClick(e, history, currentSelected, setCurrentSelected)}>{item.firstName} {item.lastName}</p>
                    <Route component={() => <ProfileCard id={index} />} path={`/profiles/:id`} />
                </div>)
            })}
            
        </div>

    )
}



export default Profiles;