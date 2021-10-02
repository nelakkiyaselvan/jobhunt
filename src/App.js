import './App.css';
import locationImg from './react-assest/images/location.png'
import searchImg from './react-assest/images/search.png'
import LogoImg from './react-assest/images/logo.png'

export const listRender = (count) => {
  const arr = new Array(count);
  arr.fill(1);
  const listDoms = arr.map((item, idx) => {
    return (
        <div className="cards" key={idx}>
            <div className="thumb-image"/>
            <div className="card-text">
                <span className="text-contents card-title">Executive Producer</span>
                <span className="text-contents card-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </span>
                <div className="view-btn">View Details</div>
            </div>
        </div>
    );
  })
  return listDoms;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <div className="nav-section">
            <div className="logo">
              <img className="logo-icon" alt="Job Hunt" src={LogoImg}/>
              JobHunt
            </div>
            <span className="nav-link find-job">Find Jobs</span>
            <span className="nav-link skill-yourself">Upskill Yourself</span>
          </div>
          <div className="nav-section user-acc">
            <div className="nav-link post-job"><span>Post a Job</span></div>
            <div className="nav-link sign-in"><span>Sign in</span></div>
          </div>
        </nav> 
        <div className="hero-content hero-text">Find Your Dream Job</div>
        <div className="hero-content hero-desc">Browse through thousands of full-time or part-time jobs near you</div>
      </header>
      <section className="search-bar">
        <div className="search-content search-child search-box">
          <img className="search-icons" alt="Search Job Type" src={searchImg}/>
          <input placeholder="Job title or keyword" className="search-input"></input>
        </div>
        <div className="search-content search-child search-location">
          <img className="search-icons" alt="Search Job Location" src={locationImg}/>
          <select>
            <option className="search-option" value="" disabled selected >Select location</option>
            <option className="search-option" value="usa">USA</option>
          </select>
        </div>
        <div className="search-child search-btn">
          <span>Search</span>
        </div>
          <img className="search-btn-icon" alt="Search Job Type" src={searchImg}/>
      </section>
      <section className="body-content">
        <div className="cards-container">
          {listRender(7)}
        </div>
      </section>
    </div>
  );
}

export default App;
