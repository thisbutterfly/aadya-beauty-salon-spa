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