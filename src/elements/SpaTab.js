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
        imgLink: "https://via.placeholder.com/250"
    },
    {
        imgLink: "https://via.placeholder.com/250"
    },
    {
        imgLink: "https://via.placeholder.com/250"
    },
    {
        imgLink: "https://via.placeholder.com/250"
    },
    {
        imgLink: "https://via.placeholder.com/250"
    },
]