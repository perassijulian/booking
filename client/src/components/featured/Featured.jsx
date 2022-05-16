import "./featured.css";
import useFetch from '../../hooks/useFetch.js';

const Featured = () => {

  const { data, error, isLoading } = useFetch("/hotels/countByCity?cities=rosario,cordoba,ushuaia")

  return (
    <div className="featured">

      {isLoading ? (
        "loading" 
      ) : (<>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/664049.webp?k=fd691141ae6bdd6048ca0095f5d9bec810f571654be41c9bd556d645a474b025&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Rosario</h1>
          <h2>{data[0]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/880015.webp?k=3fc23c5f6cabcd070f054c4dbc52e41689530e3a64e58e75a6fe74f12eea9296&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Cordoba</h1>
          <h2>{data[1]} properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/square250/664586.webp?k=907a96c5aa6786ae155dadd1ff210fbf00c3cfe52823e7a3562693fc900ff632&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Ushuaia</h1>
          <h2>{data[2]} properties</h2>
        </div>
      </div>
      </>)}
    </div>
  );
};

export default Featured;