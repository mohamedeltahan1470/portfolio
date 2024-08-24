import "./header.css";
import "./all.css";

const Header = () => {
  return (
    <div className='header'>
        <div className='header-div1'>KR</div>
        <div className='header-menu'>
            <ul>
                <li><a href="#">HOME</a></li>
                <li><a href="#">ABOUT</a></li>
                <li><a href="#">PROJECTS</a></li>
                <li><a href="#">CONTACT</a></li>
            </ul>
        </div>
        <div className="header-font"> 
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"> <i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        </div>
    </div>
  )
}

export default Header