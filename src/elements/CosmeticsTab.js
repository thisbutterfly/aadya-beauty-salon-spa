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
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
    {
        imgLink: "https://via.placeholder.com/300"
    },
]