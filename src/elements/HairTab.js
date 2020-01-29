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