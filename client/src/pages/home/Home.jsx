import './home.css';
import Featured from '../../components/featured/Featured'
import Header from '../../components/header/Header'
import Navbar from '../../components/navbar/Navbar'
import FeaturedProperties from '../../components/featuredProperties/FeaturedProperties';

const Home = () => {
  return (
    <div className='home'>
      <Navbar />  
      <Header />
      <div className='homeContainer'>
        <Featured />
        <h1 className="homeTitle">Browse by property type</h1>
        <FeaturedProperties />
      </div>
    </div>
  )
}

export default Home