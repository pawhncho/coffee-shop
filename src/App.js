import React from 'react';

import { RiSearch2Line } from 'react-icons/ri';
import { GiCoffeeBeans } from 'react-icons/gi';
import { BsHeart } from 'react-icons/bs';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

import './App.css';

import banana from './shakes/banana.webp';
import lavender from './shakes/lavender.webp';
import strawberry from './shakes/strawberry.webp';

import blog1 from './blogs/blog1.webp';
import blog2 from './blogs/blog2.jpg';
import blog3 from './blogs/blog3.webp';

const App = () => {
	return (
		<main>

			<header>
				<GiCoffeeBeans color="#8B5E3C" size="36" style={{ cursor: 'pointer', }} />
				<nav className="navbar">
					<div className="navbar-item">Home</div>
					<div className="navbar-item">Menu</div>
					<div className="navbar-item">Blog</div>
					<div className="navbar-item">Contact</div>
					<RiSearch2Line size="18" color="#2C1A0F" style={{ cursor: 'pointer', }} />
				</nav>
			</header>

			<section className="banner">
				<div className="overlay">
					<span className="secondary-content">FRESHLY ROASTED</span>
					<span className="primary-content">COFFEE</span>
					<button>Shop now</button>
				</div>
			</section>

			<section className="body">
				<div className="top-categories">
					<span>
						<h1>TOP CATEGORIES</h1>
						<p>Explore The Recent Most Bought Drinks This Week</p>
					</span>
					<div className="list">
						<div className="list-item cappuccino">
							<span className="overlay">
								<h2>Cappuccino</h2>
								<p>View more</p>
							</span>
						</div>
						<div className="list-item espresso-americano">
							<span className="overlay">
								<h2>Americano</h2>
								<p>View more</p>
							</span>
						</div>
						<div className="list-item mocha">
							<span className="overlay">
								<h2>Mocha</h2>
								<p>View more</p>
							</span>
						</div>
					</div>
				</div>

				<div className="top-shakes">
					<span>
						<h1>TOP MILK SHAKES</h1>
						<p>Explore The Recent Most Bought Shakes This Week</p>
					</span>
					<div className="list">
						<div className="list-item">
							<p className="likes"><BsHeart color="" size="15" /> 30 likes</p>
							<img src={banana} alt="banana" />
							<h2>Banana Shake</h2>
							<div className="detail">
								<p>$20.00</p>
								<button>BUY NOW</button>
							</div>
						</div>
						<div className="list-item">
							<p className="likes"><BsHeart color="" size="15" /> 30 likes</p>
							<img src={lavender} alt="lavender" />
							<h2>Lavender Shake</h2>
							<div className="detail">
								<p>$20.00</p>
								<button>BUY NOW</button>
							</div>
						</div>
						<div className="list-item">
							<p className="likes"><BsHeart color="" size="15" /> 30 likes</p>
							<img src={strawberry} alt="strawberry" />
							<h2>Strawberry Shake</h2>
							<div className="detail">
								<p>$20.00</p>
								<button>BUY NOW</button>
							</div>
						</div>
						<div className="list-item">
							<p className="likes"><BsHeart color="" size="15" /> 30 likes</p>
							<img src={strawberry} alt="strawberry" />
							<h2>Strawberry Shake</h2>
							<div className="detail">
								<p>$20.00</p>
								<button>BUY NOW</button>
							</div>
						</div>
					</div>
				</div>

				<div className="blogs">
					<span>
						<h1>LATEST BLOGS</h1>
						<p>Explore The Recent Blog Posts</p>
					</span>
					<div className="list">
						<div className="list-item">
							<img src={blog1} alt="blog1" />
							<h2>The Art of Brewing: How to Make the Perfect Cup at Home</h2>
							<p>There’s something magical about brewing your own cup of coffee — the aroma, the warmth, the ritual. But how do you turn your kitchen into a mini café? The secret...</p>
							<button>Read more</button>
						</div>
						<div className="list-item">
							<img src={blog2} alt="blog2" />
							<h2>From Bean to Cup: The Journey of Your Morning Brew</h2>
							<p>Ever wonder how your morning cup of coffee gets from a faraway farm to your favorite mug? Every sip tells a story — of farmers, roasters, and the journey through...</p>
							<button>Read more</button>
						</div>
						<div className="list-item">
							<img src={blog3} alt="blog3" />
							<h2>5 Must-Try Coffee Drinks You’ll Fall in Love With</h2>
							<p>Bored of your regular latte or cappuccino? It’s time to explore the wonderful world of creative coffee drinks — from creamy delights to bold, adventurous brews...</p>
							<button>Read more</button>
						</div>
					</div>
				</div>
			</section>

			<footer>
				<div className="option">
					<h2>Category</h2>
					<div className="list">
						<p>New</p>
						<p>Weeky Picks</p>
						<p>Summer</p>
						<p>Winter</p>
					</div>
				</div>
				<div className="option">
					<h2>Company Info</h2>
					<div className="list">
						<p>About Us</p>
						<p>Contact Us</p>
						<p>Paymen Options</p>
						<p>Track Order</p>
						<p>Support</p>
					</div>
				</div>
				<div className="option">
					<h2>Follow us</h2>
					<div className="list">
						<FaInstagram size="18" color="#F7EFE6" />
						<FaFacebook size="18" color="#F7EFE6" />
						<FaYoutube size="18" color="#F7EFE6" />
					</div>
				</div>
			</footer>

		</main>
	);
};

export default App;
