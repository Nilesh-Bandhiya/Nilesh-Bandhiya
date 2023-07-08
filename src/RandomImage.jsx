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
      const response = await axios.get("https://picsum.photos/600/400");
      this.setState({ imageUrl: response.request.responseURL });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { imageUrl } = this.state;
    const shareUrl = "https://random-image-share.vercel.app/";
    const shareTitle = "Check out this random image!";

    return (
      <>
        <Helmet>
          {/* Facebook */}
          <meta property="og:url" content={shareUrl} />
          <meta property="og:title" content={shareTitle} />
          <meta property="og:image" content={imageUrl} />

          {/* Twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={shareTitle} />
          <meta name="twitter:image" content={imageUrl} />

          {/* WhatsApp */}
          <meta property="og:type" content="website" />
          <meta property="og:image:alt" content={shareTitle} />
          <meta property="og:image:type" content="image/jpeg" />
        </Helmet>
        <div className="random-image-container">
          <div className="image-wrapper">
            <img className="random-image" src={imageUrl} alt="Random" />
          </div>
          <div className="button-container">
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <FaFacebook className="social-icon" />
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <FaTwitter className="social-icon" />
            </TwitterShareButton>
            <WhatsappShareButton
              url={shareUrl}
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
