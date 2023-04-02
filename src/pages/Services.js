import { Link } from "react-router-dom"
import planting from "../images/planting.png"
import manufacturing from "../images/manufacturing.png"
import community from "../images/community.png"
import mining from "../images/mining.png"
import construction from "../images/construction.png"
import cleaning from "../images/cleaning.png"
import emergency from "../images/emergency.png"
import education from "../images/education.png"
export default function Services() {
  return (
    <div className="content1">
      <div className="title">
              <h2>Categories</h2>
              <hr></hr>
              <div className="flex-container">
              <Link to="/agriculture" className="marketplace">
              <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={planting} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Agriculture</h4>
                {/* <BsThreeDots /> */}
              </div> 
              
            </div>
            </Link>
            <Link to="/manufacture" className='marketplace'>
            <div>
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={manufacturing} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Manufacture</h4>
                {/* <BsThreeDots /> */}
              </div> 
            </div>
            </Link>
            <Link to="/community" className='marketplace'>
            <div>
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={community} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>community</h4>
                {/* <BsThreeDots /> */}
              </div> 
            </div>
            </Link>
            <Link to="/mining" className='marketplace'>
            <div>

              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={mining} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Mining</h4>
                {/* <BsThreeDots /> */}
              </div> 
            </div>
            </Link>
            <Link to="/construction" className='marketplace'>
            <div>
            
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={construction} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Construction</h4>
                {/* <BsThreeDots /> */}
              </div> 
              
            </div>
            </Link>
            <Link to="/cleaning" className='marketplace'>
            <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={cleaning} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Cleaning</h4>
                {/* <BsThreeDots /> */}
              </div> 
              
            </div>
            </Link>
            <Link to="/emergency" className='marketplace'>
            <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={emergency} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Emergency</h4>
                {/* <BsThreeDots /> */}
              </div> 
              
            </div>
            </Link>
            <Link to="/education" className='marketplace'>
            <div>
              
              <div className="image" >
                
                <img style={{ width: 50, height: 60 }} src={education} alt="marketplace" />
                
              </div>
              
              <div className="name">
                <h4>Education</h4>
                {/* <BsThreeDots /> */}
              </div> 
              
            </div>
            </Link>
            
      </div>
      </div>
    </div>
  )
}
