import React, {Component} from 'react';

export default class HairTab extends Component{
    render(){
        return(
            <div className="container">
                 <div className="gallery-images">
            {HairImages.map(hair => (
              <>
                <img src={hair.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
            </div>
        )
    }
}

const HairImages = [
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299742/Salon-n-Spa/hair/hair5_tucijr.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299742/Salon-n-Spa/hair/hair4_n1dghd.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299742/Salon-n-Spa/hair/hair_gesjty.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299742/Salon-n-Spa/hair/hair2_kzhlbs.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299742/Salon-n-Spa/hair/hair6_rxzrx5.jpg"
    },
    {
        imgLink: "https://res.cloudinary.com/dkksvxoms/image/upload/c_scale,w_250,h_350/v1580299741/Salon-n-Spa/hair/hair3_hdmje3.jpg"
    },
]