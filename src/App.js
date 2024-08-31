import React from 'react';
import './App.css';
import"./../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (

    < >
    

      <nav className="navbar">
        <div className="navbar-container container">
          <div className="hamburger-lines">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
          <ul className="menu-items">
            <li><a href="#home">Home</a></li>
           
            <li><a href="#food">Category</a></li>
            <li><a href="#food-menu">Menu</a></li>
            
            <li><a href="#contact">Contact</a></li>
          </ul>
          <h1 className="logo"></h1>
        </div>
      </nav>

      <section className="showcase-area" id="showcase">
        <div className="showcase-container">
          <h1 className="main-title" id="home">Eat Right Food</h1>
          <p>Eat Healthy, it is good for our health.</p>
          
        </div>
      </section>

      <section id="food">
  <h2>Food Types</h2>
  <div className="food-container container">
    <div className="card food-type">
      <img decoding="async" src="https://i.postimg.cc/yxThVPXk/food1.jpg" alt="Fruits" />
      <div className="card-body">
        <h3 className="card-title">Fruits</h3>
        <a href="https://en.wikipedia.org/wiki/Fruit" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </div>
    <div className="card food-type">
      <img decoding="async" src="https://i.postimg.cc/Nffm6Rkk/food2.jpg" alt="Vegetables" />
      <div className="card-body">
        <h3 className="card-title">Vegetables</h3>
        <a href="https://en.wikipedia.org/wiki/Vegetable" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </div>
    <div className="card food-type">
      <img decoding="async" src="https://i.postimg.cc/76ZwsPsd/food3.jpg" alt="Grains" />
      <div className="card-body">
        <h3 className="card-title">Grains</h3>
        <a href="https://en.wikipedia.org/wiki/Grain" className="btn btn-primary" target="_blank" rel="noopener noreferrer">Learn more</a>
      </div>
    </div>
  </div>
</section>

<section id="allfood">
<section id="food-menu">
  <h2 className="food-menu-heading">Food Menu</h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 2" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>

<section id="food-menu">
  <h2 className="food-menu-heading"></h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 2" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>

<section id="food-menu">
  <h2 className="food-menu-heading"></h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 2" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>

<section id="food-menu">
  <h2 className="food-menu-heading"></h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 2" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>


<section id="food-menu">
  <h2 className="food-menu-heading"></h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 2" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>

<section id="food-menu">
  <h2 className="food-menu-heading"></h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1691030658788-41d188eabb64?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 2" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>

<section id="food-menu">
  <h2 className="food-menu-heading"></h2>
  <div className="food-menu-container container">
    <div className="card food-menu-item">
      <img decoding="async" src="https://images.unsplash.com/photo-1596797038530-2c107229654b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW5kaWFuJTIwZm9vZHxlbnwwfHwwfHx8MA==" alt="Food Item 1" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 1</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    <div className="card food-menu-item">
      <img decoding="async" src="https://plus.unsplash.com/premium_photo-1661772253149-48ec033cf4b7?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGluZGlhbiUyMGZvb2QlMjBnaXJsc3xlbnwwfHwwfHx8MA==" alt="Contact Image" />
      <div className="card-body">
        <h2 className="card-title">Food Menu Item 2</h2>
        <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quae.</p>
        <p className="card-price">Price: ₹250</p>
      </div>
    </div>
    {/* Additional food menu items can follow the same pattern */}
  </div>
</section>
</section>
      

      <section id="contact">
        <div className="contact-container container">
         
          <div className="form-container">
            <h2>Contact Us</h2>
            <textarea cols="30" rows="6" placeholder="Your message"></textarea>
            <a href="#" className="btn btn-primary">Submit</a>
          </div>
        </div>
      </section>

      <footer id="footer">
        <h2>Restaurant &copy; All rights reserved</h2>
      </footer>
    </>
  );
}

export default App;
