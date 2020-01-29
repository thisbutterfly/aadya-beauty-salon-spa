import React, {Component} from 'react';

export default class SpaTab extends Component{
    render(){
        return(
            <div className="container">
                 <div className="gallery-images">
            {SpaImages.map(spa => (
              <>
                <img src={spa.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
            </div>
        )
    }
}

const SpaImages = [
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580300101/Salon-n-Spa/spa/spa2_ykb6gv.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580300101/Salon-n-Spa/spa/spa_of7gyi.jpg"
    }
]