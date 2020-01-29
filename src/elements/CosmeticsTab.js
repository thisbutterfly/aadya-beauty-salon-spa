import React, {Component} from 'react';

export default class CosmeticsTab extends Component{
    render(){
        return(
            <div className="container">
                 <div className="gallery-images">
            {CosmeticsImages.map(cosmetics => (
              <>
                <img src={cosmetics.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
            </div>
        )
    }
}

const CosmeticsImages = [
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580300356/Salon-n-Spa/cosmetics/cosmetics4_nxy1uu.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580300355/Salon-n-Spa/cosmetics/cosmetics_f3fxfj.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580300356/Salon-n-Spa/cosmetics/cosmetics3_ydm6bx.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580300355/Salon-n-Spa/cosmetics/cosmetics2_zp5kok.jpg"
    }
]