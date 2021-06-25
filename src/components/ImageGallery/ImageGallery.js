import "../../App.css";
import PropTypes from "prop-types";
export const ImageGalleryList = ({ ArrayApiPhoto, openModal }) => {
  return (
    <ul className="ImageGallery">
      {ArrayApiPhoto.map(({ webformatURL, largeImageURL, id }) => (
        <li
          className="ImageGalleryItem"
          id={id}
          key={id}
          onClick={openModal}
          data-bigpicture={largeImageURL}
        >
          <img
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt="pictures"
          />
        </li>
      ))}
    </ul>
  );
};

ImageGalleryList.propTypes = {
  ArrayApiPhoto: PropTypes.array.isRequired,
  openModal: PropTypes.func.isRequired,
};
