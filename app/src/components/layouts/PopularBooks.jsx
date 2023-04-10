import React from 'react'

const PopularBooks = () => {
  return (
    <section id="popular-books" class="bookshelf">
	<div class="container">
	<div class="row">
		<div class="col-md-12">

			<div class="section-header align-center">
				<div class="title">
					<span>Some quality items</span>
				</div>
				<h2 class="section-title">Popular Books</h2>
			</div>
   
			<ul class="tabs">
			  <li data-tab-target="#all-genre" class="active tab">All Genre</li>
			  <li data-tab-target="#business" class="tab">Business</li>
			  <li data-tab-target="#technology" class="tab">Technology</li>
			  <li data-tab-target="#romantic" class="tab">Romantic</li>
			  <li data-tab-target="#adventure" class="tab">Adventure</li>
			  <li data-tab-target="#fictional" class="tab">Fictional</li>
			</ul>

			<div class="tab-content">
			  <div id="all-genre" data-tab-content class="active">
			  	<div class="row">

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item1.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Portrait photography</h3>
								<p>Adam Silber</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item2.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Once upon a time</h3>
								<p>Klien Marry</p>
								<div class="item-price">$ 35.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item3.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Tips of simple lifestyle</h3>
								<p>Bratt Smith</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item4.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Just felt from outside</h3>
								<p>Nicole Wilson</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				</div>
				<div class="row">

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item5.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Peaceful Enlightment</h3>
								<p>Marmik Lama</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item6.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Great travel at desert</h3>
								<p>Sanchit Howdy</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item7.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Life among the pirates</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item8.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Simple way of piece life</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

		    	</div>

			  </div>
			  <div id="business" data-tab-content>
			  	<div class="row">
				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item2.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Peaceful Enlightment</h3>
								<p>Marmik Lama</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item4.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Great travel at desert</h3>
								<p>Sanchit Howdy</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item6.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Life among the pirates</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item8.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Simple way of piece life</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

		    	 </div>
			  </div>

			  <div id="technology" data-tab-content>
			  	<div class="row">
				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item1.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Peaceful Enlightment</h3>
								<p>Marmik Lama</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item3.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Great travel at desert</h3>
								<p>Sanchit Howdy</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item5.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Life among the pirates</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item7.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Simple way of piece life</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>
		    	 </div>
			  </div>

			  <div id="romantic" data-tab-content>
			  	<div class="row">
		    	  <div class="col-md-3">
			    	  <figure class="product-style">
							<img src="images/tab-item1.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Peaceful Enlightment</h3>
								<p>Marmik Lama</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item3.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Great travel at desert</h3>
								<p>Sanchit Howdy</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item5.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Life among the pirates</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item7.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Simple way of piece life</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>
		    	 </div>
			  </div>

			  <div id="adventure" data-tab-content>
			  	<div class="row">
				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item5.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Life among the pirates</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item7.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Simple way of piece life</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>
		    	 </div>
			  </div>

			  <div id="fictional" data-tab-content>
			  	<div class="row">
				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item5.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Life among the pirates</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>

				  	<div class="col-md-3">
					  	<figure class="product-style">
							<img src="images/tab-item7.jpg" alt="Books" class="product-item" />
							<button type="button" class="add-to-cart" data-product-tile="add-to-cart">Add to Cart</button>
							<figcaption>
								<h3>Simple way of piece life</h3>
								<p>Armor Ramsey</p>
								<div class="item-price">$ 40.00</div>
							</figcaption>
						</figure>
					</div>
		    	 </div>
			  </div>

			</div>

		</div>
			
		</div>
	</div>
</section>
  )
}

export default PopularBooks