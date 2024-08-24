import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container"> 
            <h2>GET IN TOUCH</h2>
            <i className="fas fa-envelope"></i><span> kr12@hotmail.com</span><br />
            <i className="far fa-id-card"></i><span>717-55-1234</span>
        </div>
        <div >
            <button className="footer-btn">Contact Me</button>
        </div>
        
        <div className="footer-font"> 
        <a href="#"><i className="fab fa-linkedin"></i></a>
        <a href="#"><i className="fab fa-facebook-f"></i></a>
        <a href="#"><i className="fab fa-twitter"></i></a>
        <p>Copyright &copy; 2019 KR</p>
        </div>
    </div>
  )
}

export default Footer