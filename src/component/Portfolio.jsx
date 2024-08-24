import "./portfolio.css";

const Portfolio = () => {
  return (
    <div>
        <div className="portfolio-title">
            <h2>Portfolio</h2>
        </div>
        <div className="portfolio-content">
            <div className="div-color">Web Design <hr /></div>
            <div className="div-color2">Mobile Design <hr /></div>
            <div className="div-color">Logo Degign <hr /></div>
            <div className="div-color2">Web Application Development</div>
            <div className="div-color">Moblie Application Development</div>
            <div className="div-color2">PWA Development</div>
        </div>
    </div>
  )
}

export default Portfolio