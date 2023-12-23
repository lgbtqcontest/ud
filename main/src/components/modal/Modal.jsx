import { Link } from "react-router-dom";
import { gl as Google } from "./../../assets/svg/gl.jsx";
import { ig as Instagram } from "./../../assets/svg/ig";
import { fb as Facebook } from "./../../assets/svg/fb";
import { cl as Close } from "./../../assets/svg/cl";
import "./md.css";

// eslint-disable-next-line react/prop-types
const Modal = ({ open, setOpen, text, mode }) => {
  open
    ? (document.lastChild.style.overflow = "hidden")
    : (document.lastChild.style.overflow = "scroll");

  return (
    <div className={`${open ? "open" : ""} p-modal`}>
      <div className="inner-modal">
        <div className="md-top">
          <div className="left">
            <h1 className="logo md-logo">
              <span className="lit md-lit">Unity in Diversity</span> Belgium
              2024
            </h1>
            <h1>{mode}</h1>
          </div>
          <button
            role="button"
            className="close"
            onClick={() => {
              setOpen(false);
            }}
          >
            <Close />
          </button>
        </div>
        <div className="content">
          <p className="md-txt">{text}</p>
          <div className="buttons">
            <h2>Create my account with</h2>
            <div className="btns">
              <a
                href="https://lgbtq-contest.onrender.com/facebook"
                target="_self"
                className="fb"
              >
                <Facebook />
                <p className="btn-txt">Facebook</p>
              </a>
              <a
                href="https://lgbtq-contest.onrender.com/instagram"
                target="_parent"
                className="ig"
              >
                <Instagram /> <p className="btn-txt">Instagram</p>
              </a>
              <div className="sepe">
                <hr />
                <sub>Or</sub> <hr />
              </div>
              <a
                className="gl"
                href="https://lgbtq-contest.onrender.com/google"
                target="_parent"
              >
                <Google /> <p className="btn-txt">Google</p>
              </a>
            </div>
          </div>
        </div>
        <p className="lil">
          Join us on this exciting journey of self-expression, empowerment, and
          unity. Let's make the LGBTQ Contest 2023 an unforgettable celebration
          of love and authenticity!
        </p>
      </div>
    </div>
  );
};

export default Modal;
