import logo from '../images/github.svg';

function Badge() {
    return (  
      <div className="github-badge github">
          <a href="https://bit.ly/3mMYVKN" target="_blank" rel="noreferrer">
            <img src={logo} alt="github"/> 
          </a>
      </div>  
    );
  }
  
  export default Badge;
  