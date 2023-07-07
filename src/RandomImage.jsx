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
    const shareTitle = "Check out this random image!";

    return (
      <div className="random-image-container">
        <Helmet>
          <meta property="og:image" content={imageUrl} />
          <meta property="og:title" content="Check out this random image!" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:image" content={imageUrl} />
          <meta name="twitter:title" content="Check out this random image!" />
          <meta property="og:image" content={imageUrl} />
          <meta property="og:title" content="Check out this random image!" />
          <meta
            property="og:description"
            content="Description of the shared content."
          />
        </Helmet>
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
          <WhatsappShareButton url={imageUrl} title={shareTitle} data-action="share/whatsapp/share">
            <FaWhatsapp className="social-icon" />
          </WhatsappShareButton>
        </div>
      </div>
    );
  }
}

export default RandomImage;
