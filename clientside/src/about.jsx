import React from "react";
import Nav from "./components/nav";
import Footer from "./components/footer";
import aboutCSS from "./css/about.module.css";
import Title from "./components/title";
import Staffcard from "./components/staffcard";
import Leaflet from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { staffs } from "./data/shopdata";
import "leaflet/dist/leaflet.css";
import PhoneInTalkRoundedIcon from "@mui/icons-material/PhoneInTalkRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

function About() {
  Leaflet.Icon.Default.imagePath = "../node_modules/leaflet";

  delete Leaflet.Icon.Default.prototype._getIconUrl;

  Leaflet.Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return (
    <div>
      <header>
        <Nav linkcolor="black" clsWidth="smallCls" searchIconDisplay="show" />
        <Title name="ABOUT US" />
      </header>
      <main className={aboutCSS.main}>
        <section className={aboutCSS.staffs}>
          <h6 className={aboutCSS.tag}>STAFF</h6>
          <div className={aboutCSS.staffHolder}>
            {staffs.map((staff, index) => {
              return (
                <Staffcard
                  imageUrl={staff.image}
                  name={staff.name}
                  bio={staff.bio}
                  skills={staff.skills}
                  key={index}
                />
              );
            })}
          </div>
        </section>
        <section>
          <h6 className={aboutCSS.tag}>ABOUT</h6>
          <article className={aboutCSS.about}>
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea nostrud exercitation ullamco luame dotrmert
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea nostrud exercitation ullamco luame dotrmert
            </p>
            <hr className={aboutCSS.aboutHr} />
            <p>
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea nostrud exercitation ullamco luame dotrmert
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea nostrud exercitation ullamco luame dotrmert
            </p>
          </article>
        </section>
        <section>
          <h6 className={aboutCSS.tag}>CONTACT US</h6>
          <div className={aboutCSS.contact}>
            <div>
              <div className={aboutCSS.imageContainer}>
                <img
                  src="https://i.pinimg.com/564x/cc/c5/bc/ccc5bcbe8e508c5e9ac45d6c1dc500ec.jpg"
                  alt="shoe"
                />
              </div>
              <address>
                <p>
                  <PhoneInTalkRoundedIcon className={aboutCSS.contactIcon} />{" "}
                  +243 814-707-321, +1 458-834-9810
                </p>
                <p>
                  <EmailRoundedIcon className={aboutCSS.contactIcon} />{" "}
                  martinsadepoju4@gmail.com
                </p>
              </address>
            </div>
            <form className={aboutCSS.aboutForm}>
              <input
                className={aboutCSS.contactInput}
                name="contactName"
                type="text"
                placeholder="Enter your Name"
              />
              <input
                className={aboutCSS.contactInput}
                name="contactPhone"
                type="text"
                placeholder="Enter your Phone"
              />
              <input
                className={aboutCSS.contactInput}
                name="contactEmail"
                type="text"
                placeholder="Enter your Email"
              />
              <textarea
                className={aboutCSS.contactTxtArea}
                rows="4"
                cols="40"
                name="contactMessage"
                placeholder="Enter your Message"
              ></textarea>
              <button
                className={"button " + aboutCSS.contactButton}
                type="submit"
              >
                SUBMIT
              </button>
            </form>
          </div>
        </section>
        <section className={aboutCSS.location}>
          <h6 className={aboutCSS.tag}>LOCATION</h6>
          <div className={aboutCSS.address}>
            <div className={aboutCSS.map}>
              <MapContainer
                center={[51.505, -0.09]}
                zoom={35}
                scrollWheelZoom={false}
                style={{ height: "30vw", width: "30vw" }}
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
            <div className={aboutCSS.shop}>
              <address className={aboutCSS.adrs}>
                <h5> 342 RIVERVIEW PATH AVENUE </h5>
                <p> we are convieniently located opposite the Indigo Labs</p>
              </address>
              <p> Our hours are as follows</p>
              <p>
                Monday thru Saturday
                <time>
                  <b>-7am-10pm</b>
                </time>
              </p>
              <p>
                {" "}
                Sunday-<b>CLOSED</b>
              </p>
              <p>Come visit us soon!</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
