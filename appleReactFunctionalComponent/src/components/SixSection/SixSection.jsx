import arcade from "../../assets/images/icons/arcade.png";

function SixSection() {
  return (
    <section className="sixth-highlight-wrapper">
      <div className="container-fluid">
        <div className="row">
          <div className="left-side-wrapper col-sm-12 col-md-6">
            <div className="left-side-container">
              <div className="top-logo-wrapper">
                <div className="logo-wrapper">
                  <img src={arcade} />
                </div>
              </div>
              <div className="description-wrapper white">
                Agent 8 is a small hero on a big mission.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Play now</a>
                  </li>
                  <li>
                    <a href="">Learn about Apple Arcade</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="right-side-wrapper col-sm-12 col-md-6">
            <div className="right-side-container">
              <div className="title-wrapper">
                Apple Card Monthly Installments
              </div>
              <div className="description-wrapper">
                Pay for your next iPhone over time, interest-free with Apple
                Card.
              </div>
              <div className="links-wrapper">
                <ul>
                  <li>
                    <a href="">Learn more</a>
                  </li>
                  <li>
                    <a href="">Apply now</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SixSection;