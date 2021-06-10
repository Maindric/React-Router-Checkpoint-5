import { BrowserRouter as Router, useParams, useHistory, Switch, Route } from "react-router-dom";
import { useContext } from 'react'
import ContentContext from './ContentContext.js'

const ProfileCard = (props) => {

    let { id } = useParams();
    const content = useContext(ContentContext)
    const history = useHistory();

    const displayImage = (assignedClass, isBig) => {
        return (
            <img className={assignedClass} src={content.contactProfiles[props.id].profileImageUrl} onClick={e => {
                if(isBig) {
                    history.push(`/profiles/${props.id}`);
                } else {
                    history.push(`/profiles/${props.id}/profile-image`);
                }
            }} />
        )
    }

    const conditionalHTML = () => {
        if(props.id === Number(id)) {
            return (
                <>
                    <p>{content.contactProfiles[props.id].birthday.toString()}</p>
                    <Router>
                        <Switch>
                            {/* <img src={content.contactProfiles[props.id].profileImageUrl onClick={} } /> */}
                            <Route exact path={`/profiles/${props.id}/profile-image`} render={props => displayImage("fullImage", true)}  />
                            <Route exact path={`/profiles/${props.id}`} render={props => displayImage("thumbnail", false)} />
                        </Switch>
                    </Router>

                </>
            );
        }
        return (<></>);
    }

    return(
        <div>
            {conditionalHTML()}
        </div>
    )
}

export default ProfileCard;