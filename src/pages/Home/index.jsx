import '../../styles/Home.css';
import img from '../../assets/img-home.jpg';
import Cards from '../../components/Cards';
import Datas from '../../Datas.json';

function Home() {
  return (
    <div className="Home-div">
      <div className="img-div">
        <h1 className="title-home">Chez vous, partout et ailleurs</h1>
        <img src={img} alt="Récifs au bord de mer" className="kasa-img-home" />
      </div>
      <div className="home-cards">
        {Datas.map((location) => (
          <Cards location={location} id={location.id} />
        ))}
      </div>
    </div>
  );
}

export default Home;
