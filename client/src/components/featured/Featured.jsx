import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/664049.webp?k=fd691141ae6bdd6048ca0095f5d9bec810f571654be41c9bd556d645a474b025&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Buenos Aires</h1>
          <h2>2.123 properties</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/640201.webp?k=942136439541853a5782cc72453476a8aac47bc394c88a353175a2030ac523bc&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Puerto Madryn</h1>
          <h2>533 properties</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/city/540x270/664105.webp?k=1b18e8252c861c11c20c662158441b67bccf92ab0ad69ef49dda87d4ccb6f924&o="
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>El calafate</h1>
          <h2>532 properties</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;