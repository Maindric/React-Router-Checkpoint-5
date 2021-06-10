import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {useState} from 'react'
import Article from './data_handlers/article'
import Profile from './data_handlers/profile'
import ContentContext from './ContentContext'
import Nav from './Nav.js'
import MyPage from './MyPage.js'
import About from './About.js'
import Profiles from './Profiles.js'
import './App.css';

/*
The primary user should have the following:
* A list of News Articles they care about.
* A list of secondary profiles they are "connected to".

Each secondary profile should have the following:
* First Name
* Last Name
* Birthday
* A profile pic (can be relative or external url)
*/

function populateContent(addContent){
  addContent([
    new Profile("Rick", "Sanchez", new Date("1958-07-03"), "https://pbs.twimg.com/profile_images/2737055347/de34b2e40b4e0bad2e7a8cd0fb4cf3b9.jpeg"),
    new Profile("Mortimer", "Smith", new Date("2008-02-29"), "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/d7/d72b88483c8b56d305aa74619d954e5d70ff4559_full.jpg"),
    new Profile("Xi", "Jinping", new Date("1953-06-15"), "https://www.factinate.com/wp-content/uploads/2018/07/maxresdefault-14.jpg"),
    new Profile("Jong-un", "Kim", new Date("1984-08-01"), "https://www.washingtonpost.com/resizer/Pwpy2yh3UnlUwyzc_QqMJQotbRs=/1484x0/arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/F6KQAI53JY457ADQCRAYHIGCYI.jpg"),
    new Profile("Bobby", "Kotick", new Date("1963-05-01"), "http://www.veterangamers.co.uk/blog/wp-content/uploads/2010/04/Activision-CEO-Bobby-Kotick-is-the-devil.jpg"),
    new Profile("Enlisted", "Jesus", new Date("1965-06-19"), "https://i.redd.it/rx1vhh5l4r901.jpg"),
    new Profile("Richard", "Paul", new Date("1966-02-06"), "https://media1.tenor.com/images/033377e7586d48d99c261eea50af4b62/tenor.gif?itemid=17805159")
  ],
  [
    new Article('Former Child Stars Describe Growing Up In The Industry',
                '“It’s tough because you grow up thinking that there are craft services tables everywhere you go. And then you learn they’re just on movie sets, not at the DMV or Home Depot or other places like that.”'),
    new Article('Theater Company’s Fundraising Email More Tragic Than Any Play It’s Ever Produced',
                'NEW YORK—Managing to evoke unparalleled feelings of pity and fear in its audience, a fundraising email sent Wednesday from local theater company The Calliope Players was reportedly far more tragic than any of the plays it had ever produced.'),
    new Article('Man Exiting Store While Alarm Sounds Makes Big Show Of Looking Surprised To Appear Innocent',
                'OAK BROOK, IL—In response to the electronic bell suddenly blaring from security, local man Jordan Davis, who exited a Macy’s while the alarm sounded, reportedly made a big show of looking surprised by the noise in order to appear innocent to bystanders and employees.'),
    new Article('Army to authorize beards if vaccine goal reached by July 4th',
                'PENTAGON — Army Chief of Staff Gen. James C. McConville today pledged to authorize beards if the Army met the goal of having 90% of all soldiers vaccinated against Covid-19 by July 4th.'),
    new Article('Biden Offers Infrastructure Concession By Partially Demolishing Brooklyn Bridge',
                '“Look, if we’re ever going to move past the contentiousness of the past four years, we need to leave the door open to bipartisan compromises like detonating C4 charges across the Brooklyn Bridge to level half the structure, and that’s exactly what I’ve done,” said the president in a press conference that praised conservatives Lisa Murkowski (R-AK) and Susan Collins (R-ME) for remaining “flexible and pragmatic” on their calls to blow up all six of the bridge’s trusses.'),
    new Article('‘No proof of aliens’ says Space Force General of the Galaxy Mzorpus Klaatu',
                'WASHINGTON — Recently released videos of Unidentified Aerial Phenomena (UAP) show no evidence of extraterrestrial life, said Mzorpus Klaatu, Space Force’s General of Galaxy Markarian 422 and foremost alien expert.'),
    new Article('North Korea promises to kill as many citizens as necessary to resist US aggression',
                'PYONGYANG — Tensions on the Korean Peninsula spiked this week after Pyongyang sounded a defiant tone against the West and vowed to “murder as many of our proud people as necessary” to resist American aggression.')
  ])
}

function App() {
  const [content, setContent] = useState({newsArticles:[], contactProfiles:[]});
  const [populated, setPopulated] = useState(false);

  const addContent = (profiles, articles) => {
    setContent({newsArticles : content.newsArticles.concat(...articles), 
                contactProfiles: content.contactProfiles.concat(...profiles)});
  }

  if(!populated)
  {
    populateContent(addContent);
    setPopulated(true);
  }

  return (
    <div className="App">
      <ContentContext.Provider value={content}>
        <Router>
          <div className="content">
            <Nav />
            <h2 className="title">SpaceBook</h2>
            <Switch>
              <Route exact path="/" component={MyPage} />
              <Route exact path="/about" component={About} />
              <Route path="/profiles" component={Profiles} />
            </Switch>
          </div>
        </Router>
      </ContentContext.Provider>
    </div>
  );
}

export default App;
