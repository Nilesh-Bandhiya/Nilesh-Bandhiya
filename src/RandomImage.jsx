import React, { Component } from "react";
import axios from "axios";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import { FaFacebook, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Helmet } from "react-helmet";
import "./RandomImage.css";

class RandomImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: "",
    };
  }

  componentDidMount() {
    this.fetchRandomImage();
  }

  fetchRandomImage = async () => {
    try {
      const response = await axios.get("https://picsum.photos/400/400");
      this.setState({ imageUrl: response.request.responseURL });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { imageUrl } = this.state;
    const shareTitle = "Check out this random image!";

    return (
      <>
        <Helmet>
          <meta property="og:url" content={imageUrl} />
          <meta property="og:title" content={shareTitle} />
          <meta property="og:image" content={imageUrl} />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={shareTitle} />
          <meta name="twitter:image" content={imageUrl} />
          {/* <meta property="og:type" content="website" /> */}
          {/* <meta property="og:image:alt" content={shareTitle} /> */}
        </Helmet>
        <div className="random-image-container">
          <div className="image-wrapper">
            <img className="random-image" src={imageUrl} alt="Random" />
          </div>
          <div className="button-container">
            <FacebookShareButton url={imageUrl} quote={shareTitle}>
              <FaFacebook className="social-icon" />
            </FacebookShareButton>
            <TwitterShareButton url={imageUrl} title={shareTitle}>
              <FaTwitter className="social-icon" />
            </TwitterShareButton>
            <WhatsappShareButton
              url={imageUrl}
              title={shareTitle}
            >
              <FaWhatsapp className="social-icon" />
            </WhatsappShareButton>
          </div>
        </div>
      </>
    );
  }
}

export default RandomImage;
