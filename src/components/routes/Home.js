import Gif from "../assets/Dev.gif";
import "./home.scss";
function Home(props) {
  const { profileData } = props;
  return (
    <>
      <div className="to-right">
        <div className="to-left">
          <div>Hello 👋</div>
          <div>
            <span>I am Aditya Bhosale</span>
          </div>
         <img src={Gif} alt="gif loading..." />
        </div>
        <div className="profile">
        <div className="heading">Looking Forward</div> 
        {profileData?.map((data) => {
          return (
            <>
              <div className="heading">{data.heading}</div>
            </>
          );
        })}
      </div>
        <img src={Gif} alt="gif loading..." />
      </div>
      
    </>
  );
}

export default Home;
