import logo from "./assets/images/logo.svg";
import avatar from "./assets/images/avatar.png";
import partner1 from "./assets/images/partner1.png";
import partner2 from "./assets/images/partner2.png";
import partner3 from "./assets/images/partner3.png";
import partner4 from "./assets/images/partner4.png";
import partner5 from "./assets/images/partner5.png";
import partner6 from "./assets/images/partner6.png";
import partner7 from "./assets/images/partner7.png";
import avatarLogo from "./assets/images/avatarLogo.png";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
  partner7
];

export default function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header__content">
          <div className="header__desktop">
            <div className="logo header__logo">
              <img
                src={logo}
                alt="logo"
                className="logo-image header__logo-image"
              />
            </div>
            <div className="header__search-container">
              <span className="header__icon">
                <i className="header__icon-i fa fa-search"></i>
              </span>
              <input
                type="search"
                placeholder="Найти..."
                className="search-form header__search-form "
              />
            </div>
            <div className="header__profile">
              <div className="header__profile-divider"></div>
              <p className="header__name">Константин</p>
              <img src={avatar} alt="logo" className=" avatar header__avatar" />
            </div>
            <div className="header__mobile-profile">
              <img
                src={avatarLogo}
                alt="logo"
                className="mobile-avatar header__mobile-avatar"
              />
            </div>
          </div>
          <hr className="header__search-divider" />
          <div className="header__mobile-search">
            <span className="header__icon">
              <i className="header__icon-i fa fa-search"></i>
            </span>
            <input
              type="search"
              placeholder="Найти..."
              className="search-form header__search-form"
            />
          </div>
        </div>
      </header>
      <main className="main">
        <div className="main__content">
          <div className="main__header">
            <h1>НАШИ ПАРТНЁРЫ</h1>
          </div>
          <div className=" galery main__galery">
            {partners.map((card) => (
              <div key={card} className="galery-card main__galery-card">
                <img
                  src={card}
                  className="partner-logo main__partner-logo"
                  alt="partnerLogo"
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
