import useFetch from "../../hooks/useFetch";
import "./featuredProperties.css";

const FeaturedProperties = () => {
  const { data, error, isLoading } = useFetch("/hotels?featured=true&limit=4");
  const randomIndex = Math.floor(Math.random()*data.photos.length);

  return (
    <div className="fp">
      {isLoading ? (
        "loading"
      ) : (<>
        {data.map((d,i) => {
          return(
            <div className="fpItem" key={d._id}>
              <img
                src={data.photos[randomIndex]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{d.name}</span>
              <span className="fpCity">{d.city}</span>
              <span className="fpPrice">Starting from ${d.cheapestPrice}</span>
              {d.rating && <div className="fpRating">
                <button>{d.rating}</button>
                <span>Excellent</span>
              </div>}
            </div>
          )
        })}
      </>)}
    </div>
  );
};

export default FeaturedProperties;