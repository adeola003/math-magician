const Home = () => (
  <div className="welcome">
    <h2>Welcome to your Math magician App!</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis vel quibusdam quas
      earum iure in maxime maiores molestias alias, blanditiis, consectetur quam assumenda,
      sapiente excepturi fugiat qui ipsam corporis. Facere.
    </p>
    <p>
      Navigate through this web App from the links
      in the navigation bar. You are currently in the Home section.
    </p>
    <ul className="instructions">
      <li>Click on the calculator link to get access to a simple calculation app</li>
      <hr />
      <li>Click on the quote link to display inspirational quotes to enlighten your day</li>
      <hr />
    </ul>
    <p>
      Enjoy this app and feel free to star this project on the
      <a href="https://github.com/adeola003/math-magician" target="blank" className="github-link">Github</a>
      {' '}
      repository
    </p>
  </div>
);
export default Home;