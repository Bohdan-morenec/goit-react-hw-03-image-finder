import "./App.css";
import { Component } from "react";
import { Searchbar } from "./components/searchBar";
import { ImageGalleryList } from "./components/ImageGallery";
import { Button } from "./components/button";
import { photoApi } from "./services/photoApi";
import Modal from "./components/modal";
import { Loader } from "./components/loader";

class App extends Component {
  state = {
    SearchValue: "",
    pageNumber: 1,
    arraypPhotos: [],
    loading: false,
    error: null,
    bigPicture: "",
    showModal: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.SearchValue !== this.state.SearchValue) {
      this.addPagePhotos();
    }
  }

  addPagePhotos = () => {
    const { SearchValue, pageNumber } = this.state;

    this.setState({ loading: true });

    photoApi(SearchValue, pageNumber)
      .then((value) =>
        this.setState((prevState) => ({
          arraypPhotos: [...prevState.arraypPhotos, ...value],
          pageNumber: prevState.pageNumber + 1,
        }))
      )
      .catch(this.setState({ error: false }))
      .finally(() => this.setState({ loading: false }));
  };

  getSearchValuee = (value) => {
    this.setState({
      SearchValue: value,
      pageNumber: 1,
      arraypPhotos: [],
    });
  };

  openModal = (e) => {
    const { bigpicture } = e.currentTarget.dataset;

    this.setState({
      bigPicture: bigpicture,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });

    const { loading, arraypPhotos, showModal } = this.state;

    return (
      <div className="App">
        <Searchbar getSearchValuee={this.getSearchValuee} />
        {this.state.error && "oh something went wrong"}
        <ImageGalleryList
          ArrayApiPhoto={this.state.arraypPhotos}
          openModal={this.openModal}
        />
        {loading && <Loader />}

        {arraypPhotos.length > 0 && <Button onSubmit={this.addPagePhotos} />}

        {showModal && (
          <Modal img={this.state.bigPicture} onClose={this.toggleModal}></Modal>
        )}
      </div>
    );
  }
}

export default App;
