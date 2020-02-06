import React, { Component } from "react";
import HeadingUnderline from "./components/HeadingUnderline";
import FooterOther from "./components/FooterOther";
import {Link} from "react-router-dom";

export default class Article extends Component {
  render() {
    return (
      <div className="section">
        <h1 className="is-size-1 has-text-centered">Heading of Blog</h1>
        <HeadingUnderline />
        <div className="container" style={{ padding: "30px" }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec
            sagittis aliquam malesuada bibendum arcu vitae. Aliquam sem
            fringilla ut morbi tincidunt augue interdum velit euismod. Interdum
            velit euismod in pellentesque. Ac turpis egestas maecenas pharetra
            convallis. Nisl pretium fusce id velit. Morbi tristique senectus et
            netus et malesuada. Semper feugiat nibh sed pulvinar. Imperdiet sed
            euismod nisi porta lorem mollis aliquam ut. Integer vitae justo eget
            magna fermentum iaculis eu. Eu lobortis elementum nibh tellus
            molestie nunc non blandit massa. Mauris pharetra et ultrices neque.
            Felis bibendum ut tristique et egestas quis ipsum suspendisse. Mi
            sit amet mauris commodo quis imperdiet massa. Ac placerat vestibulum
            lectus mauris. Tincidunt dui ut ornare lectus sit. Facilisis
            volutpat est velit egestas dui id ornare arcu. Est ultricies integer
            quis auctor elit sed vulputate mi. Amet risus nullam eget felis eget
            nunc. Malesuada bibendum arcu vitae elementum curabitur vitae nunc
            sed. Semper viverra nam libero justo laoreet sit amet cursus sit. Eu
            turpis egestas pretium aenean pharetra magna ac placerat. Faucibus
            pulvinar elementum integer enim neque volutpat. Feugiat scelerisque
            varius morbi enim nunc faucibus a pellentesque. Purus semper eget
            duis at tellus at urna condimentum. Blandit cursus risus at ultrices
            mi tempus. Velit sed ullamcorper morbi tincidunt ornare massa eget.
            Arcu non odio euismod lacinia at quis risus sed. Aliquam purus sit
            amet luctus venenatis lectus magna fringilla urna. Leo integer
            malesuada nunc vel. Viverra maecenas accumsan lacus vel facilisis
            volutpat est velit egestas. Euismod nisi porta lorem mollis. Sit
            amet venenatis urna cursus eget nunc. Aliquam eleifend mi in nulla.
            Posuere urna nec tincidunt praesent semper feugiat nibh sed. Nunc
            sed velit dignissim sodales. Purus sit amet volutpat consequat.
            <br />
            <br />
            Egestas fringilla phasellus faucibus scelerisque. Pellentesque
            adipiscing commodo elit at imperdiet. Viverra nibh cras pulvinar
            mattis. Senectus et netus et malesuada fames ac. Congue quisque
            egestas diam in arcu cursus euismod quis viverra. Neque volutpat ac
            tincidunt vitae semper. Vitae sapien pellentesque habitant morbi
            tristique. Pretium lectus quam id leo in vitae turpis massa sed. Dui
            id ornare arcu odio. Aliquam id diam maecenas ultricies mi. Nunc sed
            augue lacus viverra vitae congue eu. Tincidunt arcu non sodales
            neque sodales ut etiam sit amet. Eu mi bibendum neque egestas.
            Interdum varius sit amet mattis vulputate. In hac habitasse platea
            dictumst. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
            vivamus at. Magna etiam tempor orci eu lobortis elementum nibh. Eget
            nulla facilisi etiam dignissim diam quis enim lobortis scelerisque.
            Sit amet massa vitae tortor condimentum lacinia quis vel.
          </p>
          <div className="card-content">
            <div class="media">
              <div class="media-left">
                <figure class="image is-48x48">
                  <img
                    src="https://bulma.io/images/placeholders/96x96.png"
                    alt="Placeholder image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <p class="title is-4">John Smith</p>
                <p class="subtitle is-6">@johnsmith</p>
              </div>
            </div>
          </div>
          <div className="container button-contain">
            <Link to="/blog">
              <button className="appointment-button">Return</button>
            </Link>
          </div>
        </div>
        <FooterOther />
      </div>
    );
  }
}
