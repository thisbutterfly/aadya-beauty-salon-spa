import React, {Component} from 'react';

export default class MakeupTab extends Component{
    render(){
        return(
            <div className="container">
                 <div className="gallery-images">
            {MakeupImages.map(makeup => (
              <>
                <img src={makeup.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
            </div>
        )
    }
}

const MakeupImages = [
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299528/Salon-n-Spa/makeup/makeup4_sp3ouc.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299528/Salon-n-Spa/makeup/makeup6_yvq30t.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299527/Salon-n-Spa/makeup/makeup_qhm2wc.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299528/Salon-n-Spa/makeup/makeup5_wnquvq.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299528/Salon-n-Spa/makeup/makeup3_gdoiig.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299528/Salon-n-Spa/makeup/makeup2_bclaiz.jpg"
    }
]