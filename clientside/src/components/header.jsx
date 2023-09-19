import { React, useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderCSS from "./header.module.css";
import Nav from "./nav";

const classes = [
  {
    index: 0,
    url: "https://wallpaperaccess.com/full/1076768.jpg",
  },
  {
    index: 1,
    url: "https://wallpaperaccess.com/full/1076763.jpg",
  },
  {
    index: 2,
    url: "https://wallpaperaccess.com/full/1306720.jpg",
  },
  {
    index: 3,
    url: "https://wallpaperaccess.com/full/1076764.jpg",
  },
  {
    index: 4,
    url: "https://wallpaperaccess.com/full/1076767.jpg",
  },
];

function Header(props) {
  const [index, setIndex] = useState(0);
  const [id, setId] = useState(null);
  const header = useRef(null);
  const circles = useRef([]);
  const arr = [0, 1, 2, 3, 4];
  const navigate = useNavigate();

  const toShop = () => {
    navigate("/shop");
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      header.current.style.backgroundImage = "url(" + classes[index]?.url + ")";
      header.current.classList.add(HeaderCSS["slide-animation"]);
      setTimeout(() => {
        header.current.classList.remove(HeaderCSS["slide-animation"]); // Remove the slide-animation class after the animation finishes
      }, 3000);
      setIndex((prevValue) => {
        if (prevValue <= 3) {
          return prevValue + 1;
        } else {
          return 0;
        }
      });
    }, 4000);
    setId(intervalId);

    return () => {
      clearInterval(intervalId);
    };
  }, [index]);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (!header.current || !header.current.getBoundingClientRect) {
        return;
      }
      const { top, bottom } = header.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom > 0;
      if (!isVisible) {
        clearInterval(id);
      }
    });
  }, [id]);

  function deleteExistingClass() {
    circles.current.forEach((element) => {
      if (element.classList.contains("header_active__UiXKG")) {
        element.classList.remove("header_active__UiXKG");
      }
    });
  }
  function addNewClass(n) {
    circles.current[n].classList.add("header_active__UiXKG");
  }
  function changeImage(event) {
    clearInterval(id);
    var circleClicked = event.target;
    switch (circleClicked) {
      case circles.current[0]:
        header.current.style.backgroundImage = "url(" + classes[0].url + ")";
        deleteExistingClass();
        addNewClass(0);
        break;
      case circles.current[1]:
        header.current.style.backgroundImage = "url(" + classes[1].url + ")";
        deleteExistingClass();
        addNewClass(1);

        break;
      case circles.current[2]:
        header.current.style.backgroundImage = "url(" + classes[2].url + ")";
        deleteExistingClass();
        addNewClass(2);
        break;
      case circles.current[3]:
        header.current.style.backgroundImage = "url(" + classes[3].url + ")";
        deleteExistingClass();
        addNewClass(3);
        break;
      case circles.current[4]:
        header.current.style.backgroundImage = "url(" + classes[4].url + ")";
        deleteExistingClass();
        addNewClass(4);
        break;
      default:
        console.log(circleClicked);
        break;
    }
  }

  return (
    <header ref={header} className={HeaderCSS.head}>
      <Nav linkcolor="white" clsWidth="smallCls" searchIconDisplay="show" />
      <div className={HeaderCSS.headerBox}>
        <h1>Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
        <button onClick={toShop} className="button">
          Explore More
        </button>
        <div className={HeaderCSS.circles}>
          {arr.map((element, index) => {
            return (
              <div
                key={index}
                ref={(element) => {
                  circles.current[index] = element;
                }}
                className={HeaderCSS.circle}
                onClick={changeImage}
              ></div>
            );
          })}
        </div>
      </div>
    </header>
  );
}

export default Header;
// const [count,updateCount] = useState(0)
//  const intervalId = useRef(null);