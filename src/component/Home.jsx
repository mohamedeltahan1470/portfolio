import "./Home.css";
import photo from "../assets/photo.jpg";
const Home = () => {
  return (
    <div className="home">
        <div className="home-content">
            <h1>Mohammed Ali</h1>
            <p>Web Developer & Designer</p>
            <button>CONTACT ME</button>
        </div>
        <div className="home-img">
            <img src={photo} alt="photo" />
        </div>
    </div>
  )
}

export default Home