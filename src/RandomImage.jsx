import React, { Component } from 'react';
import axios from 'axios';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton } from 'react-share';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import './RandomImage.css';

class RandomImage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      imageUrl: '',
    };
  }

  componentDidMount() {
    this.fetchRandomImage();
  }

  fetchRandomImage = async () => {
    try {
      const response = await axios.get('https://picsum.photos/600/400');
      this.setState({ imageUrl: response.request.responseURL });
    } catch (error) {
      console.error(error);
    }
  };

  render() {
    const { imageUrl } = this.state;
    const shareTitle = 'Check out this random image!';

    return (
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
          <WhatsappShareButton url={imageUrl} title={shareTitle}>
            <FaWhatsapp className="social-icon" />
          </WhatsappShareButton>
        </div>
      </div>
    );
  }
}

export default RandomImage;
