import React, {Component} from 'react';

export default class AllImagesTab extends Component{
    render(){
        return(
            <div className="container">
                 <div className="gallery-images">
            {AllImages.map(all => (
              <>
                <img src={all.imgLink} alt="gallery-placeholder" className="gallery-picture" />
              </>
            ))}
          </div>
            </div>
        )
    }
}

const AllImages = [
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
    },
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