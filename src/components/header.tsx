import React, { useRef } from 'react';
import Styles from '../Sass/Header.module.scss';

const Header = () => {
  const [active, setActive] = React.useState<number>(0);
  const [scrolled, setScrolled] = React.useState<boolean>(false);
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const activeSet = (index: number) => {
    setActive(index);
  };
  const firstList = [
    { name: 'Home', link: '#home' },
    { name: 'Service', link: '#service' },
    { name: 'About', link: '#about' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '/Contact' },
  ];
  const name = 'Nikita Lyman';

  React.useEffect(() => {
    const handdleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handdleScroll);

    return () => window.removeEventListener('scroll', handdleScroll);
  }, []);

  return (
    <div className={`${Styles.container} `}>
      <div ref={ref} className={`${Styles.container__main} ${scrolled ? Styles.blurred : ''}`}>
        {/* Left part */}
        <ul>
          {firstList.slice(0, 3).map((item, index) => (
            <a href={item.link}>
              <li
                onClick={() => activeSet(index)}
                className={`${active === index ? Styles.active : ''} ${
                  item.name === 'About' ? Styles.underline : ''
                }`}
                key={index}>
                {item.name}
              </li>
            </a>
          ))}
        </ul>

        {/* Middle part */}
        <div className={Styles.middlePart}>
          <h1>{name}</h1>
        </div>

        {/* Right part */}
        <ul>
          {firstList.slice(3).map((item, index) => (
            <a href={item.link}>
              <li
                onClick={() => activeSet(index + 3)}
                className={`${active === index + 3 ? Styles.active : ''} ${
                  item.name === 'Contact' ? Styles.underline : ''
                }`}
                key={index}>
                {item.name}
              </li>
            </a>
          ))}
          <button className={Styles.vcButton}>
            <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
              Get VC
            </a>
          </button>
        </ul>
        <div className={Styles.invisible}>
          {menuOpen ? (
            <div className={Styles.invisible__nav}>
              <ul>
                {firstList.map((item, index) => (
                  <a href={item.link}>
                    <li
                      onClick={() => activeSet(index)}
                      className={`${active === index ? Styles.active : ''} ${
                        item.name === 'Contact' ? Styles.underline : ''
                      }`}
                      key={index}>
                      {item.name}
                    </li>
                  </a>
                ))}
              </ul>
              <button className={Styles.vcButton}>
                <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
                  Get VC
                </a>
              </button>
            </div>
          ) : (
            ''
          )}
          <div className={Styles.invisible__navBLock}>
            <ul>
              {firstList.map((item, index) => (
                <a href={item.link}>
                  <li
                    onClick={() => activeSet(index)}
                    className={`${active === index ? Styles.active : ''} ${
                      item.name === 'Contact' ? Styles.underline : ''
                    }`}
                    key={index}>
                    {item.name}
                  </li>
                </a>
              ))}
            </ul>
            <button className={Styles.vcButton}>
              <a href="/Nikita_LymanCv.pdf" download="Nikita_Lyman_CV.pdf">
                Get VC
              </a>
            </button>
          </div>
          <div className={Styles.burger} onClick={toggleMenu}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
