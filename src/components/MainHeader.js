import "./MainHeader.css";

export default function MainHeader() {
  return (
    <header class="main-header">
      <div>
        <a class="main-header__brand" href="index.html">
          Asswuffah
        </a>
      </div>
      <nav class="main-nav">
        <ul class="main-nav__items">
          <li class="main-nav__item">
            <a href="packages/index.html">Academy</a>
          </li>
          <li class="main-nav__item">
            <a href="packages/index.html">Guidance</a>
          </li>
          <li class="main-nav__item main-nav__item--cta">
            <a href="packages/index.html">Join Us</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
