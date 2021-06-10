import {Link} from 'react-router-dom';
import ContentContext from './ContentContext.js'
import {useContext} from 'react'


const MyPage = () => {
    const content = useContext(ContentContext)
    return (
        <div>
            {content.newsArticles.map(item => {
                return (<div className="article-content"><h3>{item.title}</h3><br /><p className="article">{item.article}</p></div>)
            })}
            
        </div>

    )
}



export default MyPage;