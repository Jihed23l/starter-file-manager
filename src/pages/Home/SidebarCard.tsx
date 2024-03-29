import Card from '../../components/UI/Card';
import { Link } from 'react-router-dom';
import StarIcon from '../../assets/icons/Star.svg';
import BoxIcon from '../../assets/icons/Box.svg';

const SidebarCard = () => {

  return (
    <div className="card-container">
      <Card>
        <div className="logo-container">
          <div className="logo start">
            <img src={StarIcon} alt="" />
          </div>
          <div className="logo-description">
            <h2>
              <span></span> Starred Files
            </h2>
            <Link to="/starred">
               Go To View
               </Link>
          </div>
        </div>
      </Card>
      <Card>
        <div className="logo-container">
          <div className="logo box">
            <img src={BoxIcon} alt="" />
          </div>
          <div className="logo-description">
            <h2>
              <span></span> Achived Files
            </h2>
            <Link to="/archived"> 
            Go To View
            </Link>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SidebarCard;
