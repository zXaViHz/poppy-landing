import './App.css';
import './style.css';

function App() {
  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="logo">Poppy</div>
        <nav>
          <a href="#about">ABOUT</a>
          <a href="#photos">PHOTOS</a>
          <a href="#reviews">REVIEWS</a>
          <a href="#offers">OFFERS</a>
          <a href="#faq">FAQ</a>
        </nav>
        <a href="#contact" className="contact-btn">CONTACT</a>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-label">SET THE TABLE</span>
          <h1>Delivering Fresh<br />Customized Bouquets</h1>
          <p>We locally source Flowers and Center Pieces that are worth Gathering around the table for.</p>
        </div>
        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Bouquet" />
        </div>
      </section>

      {/* About Section */}
      <section className="about" id="about">
        <div className="about-content">
          <span className="about-label">OUR PROMISE</span>
          <h2>We work with local farms to provide a charming touch</h2>
          <p>Sed malesuada in tristique lorem nunc gravida ac. Ornare vitae morbi sed iaculis dui fermentum eu. Rutrum sit mauris massa volutpat purus interdum cursus. Commodo fermentum convallis.</p>
          <a href="#order" className="order-btn">ORDER YOUR BOUQUET</a>
        </div>
        <div className="about-imgs">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Lavender" />
          <img src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" alt="Tulip" />
        </div>
      </section>

      {/* Process Section */}
      <section className="process">
        <span className="process-label">OUR PROCESS</span>
        <h2>We are committed to providing the best services</h2>
        <div className="process-steps">
          <div className="step">
            <div className="step-circle">1</div>
            <h3>Discovery</h3>
            <p>Euismod et in euismod natoque tristique netus lacinia luctus ac. Aliquam massa neque.</p>
          </div>
          <div className="step">
            <div className="step-circle">2</div>
            <h3>Customization</h3>
            <p>Nibh enim nisl diam adipiscing platea sit. Vitae ullamcorper nulla libero bibendum mauris.</p>
          </div>
          <div className="step">
            <div className="step-circle">3</div>
            <h3>Delivery</h3>
            <p>Felis odio facilisi mattis vitae consequat turpis nisl. Phasellus eu purus a turpis quam.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery" id="photos">
        <h2>View our beautiful bouquets</h2>
        <div className="gallery-list">
          <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" alt="Bouquet 1" />
          <img src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=400&q=80" alt="Bouquet 2" />
          <img src="https://images.unsplash.com/photo-1468421870903-4df1664ac249?auto=format&fit=crop&w=400&q=80" alt="Bouquet 3" />
        </div>
      </section>

      {/* Offers Section */}
      <section className="offers" id="offers">
        <h2>Here are the current offers available at our shop</h2>
        <div className="offers-list">
          <div className="offer">
            <span className="offer-badge">20% OFF</span>
            <h3>Shop all of Your Fall Favorites</h3>
            <p>Vestibulum felis pretium nunc nisi, malesuada tincidunt massa metus in. Malesie</p>
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Offer 1" />
          </div>
          <div className="offer">
            <span className="offer-badge">FREE GIFT</span>
            <h3>Free Candy With $50 Purchase</h3>
            <p>Erat tristique quam pharetra nulla sit at ut. Sed malesuada at eu sit diam.</p>
            <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Offer 2" />
          </div>
          <div className="offer">
            <span className="offer-badge">FREE GIFT</span>
            <h3>Free Delivery Before 8am</h3>
            <p>Erat tristique quam pharetra nulla sit at ut. Sed malesuada at eu sit diam.</p>
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Offer 3" />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq" id="faq">
        <h2>We've pulled together some basics to help you get started</h2>
        <div className="faq-list">
          <div className="faq-item">
            <h4>Viverra urna urna ipsum duis arcu sodales.</h4>
            <p>Sem cursus ut mauris magna nulla sit cursus ultricies. Convallis libero, risus habitasse sagittis rutrum, mauris quam habitasse nullam sagittis rutrum.</p>
          </div>
          <div className="faq-item">
            <h4>Pellentesque fringilla sit nec ipsum orci eu.</h4>
            <p>Sem cursus ut mauris magna nulla sit cursus ultricies. Mauris rutrum amet, quam habitasse nullam sagittis rutrum.</p>
          </div>
          <div className="faq-item">
            <h4>Ultrices sed tincidunt varius lacus sapien.</h4>
            <p>Sem cursus ut mauris magna nulla sit cursus ultricies. Convallis libero, risus habitasse sagittis rutrum, mauris quam habitasse nullam sagittis rutrum.</p>
          </div>
          <div className="faq-item">
            <h4>Ac ac pulvinar commodo sollicitudin mollis.</h4>
            <p>Sem cursus ut mauris magna nulla sit cursus ultricies. Convallis libero, risus habitasse sagittis rutrum, mauris quam habitasse nullam sagittis rutrum.</p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h3>Let's keep in touch</h3>
          <form className="newsletter-form">
            <input type="email" placeholder="Your email" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
        <div className="newsletter-img">
          <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80" alt="Newsletter" />
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">Poppy</div>
        <div className="footer-links">
          <div>
            <h5>Quick Links</h5>
            <a href="#photos">Photos</a>
            <a href="#offers">Offers</a>
            <a href="#reviews">Reviews</a>
          </div>
          <div>
            <h5>Site Information</h5>
            <a href="#about">About Us</a>
            <a href="#process">Our Process</a>
            <a href="#faq">FAQ</a>
          </div>
          <div>
            <h5>Follow</h5>
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>PHOTOS BY EVIE</span>
          <span>BY BREGINA NICOLOLE</span>
          <span>POWERED BY WEBFLOW</span>
        </div>
      </footer>

      {/* Messenger Chat Plugin (Meta) */}
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <script dangerouslySetInnerHTML={{__html: `
        var chatbox = document.getElementById('fb-customer-chat');
        chatbox.setAttribute("page_id", "quan.dinh.888447");
        chatbox.setAttribute("attribution", "biz_inbox");
      `}} />
      <script async defer crossOrigin="anonymous" src="https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js"></script>
    </>
  );
}

export default App;
