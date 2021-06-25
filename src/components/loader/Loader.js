import "../../App.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loading from "react-loader-spinner";
export const Loader = () => {
  return (
    <div className="loader">
      <Loading
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={30000} //3 secs
      />
    </div>
  );
};
