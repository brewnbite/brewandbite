import React from 'react';
import styles from '../styles/Blog.module.css';
import blog1image from '../images/Blog-1.png';
import blog2image from '../images/Blog-2.jpg';

const Blog = () => {
  return (
    <><div className='up'></div><div className={styles.blogContainer}>
          <h1 className={styles.blogTitle}>
              Brew & Bite Blog
              <span style={{ display: 'block', fontSize: '1rem', color: '#8b4513', fontFamily: 'Open Sans', marginTop: '1rem', fontWeight: 'normal' }}>
                  Stories, Tips & Coffee Adventures
              </span>
          </h1>

          {/* Blog 1 */}
          <article className={styles.blogArticle}>
              <h2 className={styles.blogHeading}>5 Ways to Make Your Café Visits More Enjoyable [Coffee Lovers’ Guide]</h2>
              <img src={blog1image} alt="Cafe Enjoyment Tips" className={styles.blogImage} />
              <p>
              Let’s be honest—we all crave those cozy little moments in life that bring comfort, warmth, and just a little pause from the everyday chaos. For many of us, a simple visit to a café can feel like one of those beautiful breaks—a comforting cup of specialty coffee, soft background music, warm lighting, maybe a flaky artisan pastry on the side… it’s not just about food or drink, it’s an elevated coffee experience. At Brew & Bite, we truly believe that every visit to a café should feel special—like a little pocket of joy in your day. But here’s a thought: while we work hard to create the best café atmosphere possible, there are a few things you can do too, to make your visit even more meaningful and enjoyable. So, grab your favorite mug and let’s dive into some simple yet powerful ways to elevate your next coffee experience.
              </p>

              <h3>1. Pick Your Perfect Time</h3>
              <p>
              We often underestimate the power of timing. Whether you’re heading out for a quick coffee break or planning to spend a couple of hours in a cozy corner, the time of day can really set the tone for your café visit. Mornings are usually calm, with the gentle hum of a coffee machine and sunlight pouring in through the windows. It’s perfect if you’re looking for peace and clarity before starting your day. Afternoons, on the other hand, tend to bring in a livelier crowd—ideal if you’re catching up with a friend or just want to soak in that vibrant café buzz.

✨ Insider tip: At Brew & Bite, weekday mornings are a hidden gem. It’s when the café feels almost like your own private little nook—serene, fresh, and filled with the aroma of just-baked artisan pastries.
            </p>

              <h3>2. Discover Your Favorite Spot</h3>
              <p>
              Every café has its magic corners—whether it's the sunny window seat with a view of the street, the cozy couch near the bookshelf, or that quiet table tucked away in a corner. Finding your spot adds a personal touch to your visit. It’s like having a familiar space in a public place, and it can instantly make your café time feel more intimate and comforting.

At Brew & Bite, we’ve curated our layout with that idea in mind. Whether you’re someone who loves people-watching or someone who prefers a bit of solitude, there’s a space waiting for you. 🌿 Next time you visit, try changing your usual seat—you might stumble upon a new favorite spot you never noticed before.
              </p>

              <h3>3.Explore the Menu Beyond Your Usual Order</h3>
              <p>
              We get it—we all have our comfort orders. Maybe it’s a caramel latte with extra foam or a classic masala chai. But every now and then, stepping out of your usual choices can surprise you in the best way. At Brew & Bite, our menu is designed not just to comfort but to delight. From seasonal coffee blends to unique food pairings, there’s always something new to try.

Our baristas love recommending new drinks or desserts based on your taste preferences—don’t hesitate to ask! 🍰 Pro Tip: Try pairing our Cinnamon Mocha Latte with a slice of our signature Almond Raspberry Cake. Trust us—it’s a match made in café heaven. And hey, sometimes trying something different is all you need to make an ordinary day feel extraordinary.
              </p>

              <h3>4. Connect Beyond the Cup</h3>
              <p>
              Cafés have always been more than just a place for coffee—they’re places for community, creativity, and connection. There’s a quiet kind of magic in striking up a light-hearted conversation with the barista or smiling at a fellow customer reading a book in the corner.

At Brew & Bite, we’re proud of the little community we’ve built. On weekends, we often host small events like poetry evenings, open mic nights, or mini art showcases by local creators. It’s our way of supporting the local scene and creating a space that’s alive with stories. 📸 Don’t forget to capture your moments with us and tag #BrewAndBiteVibes on Instagram—we love seeing your stories and often feature our favorite posts!
              </p>

              <h3>5. Make It Your Mini Escape</h3>
              <p>
              One of the most beautiful parts of a café experience is how it lets you slow down—if only for a little while. It’s like a quiet pause in your day where you don’t have to rush or multitask. So next time you’re at Brew & Bite, try putting your phone away for a bit. Listen to the music playing softly in the background, feel the warmth of your cup in your hands, take in the aroma of freshly roasted coffee beans.

Maybe write in a journal, sketch something, or just sit quietly and breathe. These simple, mindful moments can turn your café visit into a personal ritual—something that grounds you and refreshes your spirit.
              </p>

              <h3>Final Thoughts: Little Moments Matter</h3>
              <p>
              At the end of the day, the best café experiences aren’t just about the drinks or food—it’s about how you feel when you’re there. It’s about the cozy atmosphere, the little interactions, the rituals you create, and the stories you take home with you. So the next time you walk into Brew & Bite, try one of these small changes. Who knows—maybe your next coffee run won’t just be another errand, but a memory you carry with a smile.

And we’d love to hear your own café rituals or stories—drop us a note during your visit or share your thoughts on our Contact Us page!
              </p>

              <div className={styles.blogCta}>
              Curious to try something new? <a href="/menu">Explore our full menu</a> and discover your next favorite sip or bite at Brew & Bite!
              </div>
              <div className={styles.blogCta}>
              Got a story to share or a question for us? We'd love to hear from you—<a href="/contact">get in touch on our Contact Us page</a> and be part of the Brew & Bite community!
              </div>
          </article>

          {/* Blog 2 */}
          <article className={styles.blogArticle}>
              <h2 className={styles.blogHeading}>7 Café Drinks You Absolutely Need to Try This Season [Brew & Bite Specials]</h2>
              <img src={blog2image} alt="Drink According to Mood" className={styles.blogImage} />
              <p>
              There’s something magical about sipping a perfectly crafted café drink—whether it’s a frothy cappuccino that warms your soul or a fruity iced tea that feels like a mini vacation in a cup. At Brew & Bite, we believe that a good drink does more than quench your thirst—it uplifts your mood, brings comfort, and sometimes, even sparks a conversation.

As the seasons change, so do our cravings. And while your usual order will always have a place in your heart (hello, classic latte lovers!), it’s always fun to explore new flavors and give your taste buds a delightful surprise.

Here’s a lovingly curated list of 7 must-try café drinks from our seasonal beverages menu that are bound to make your next visit extra special. Let’s dive in—your next favorite might just be waiting on this list.              </p>

              <h3>1. Cinnamon Mocha Latte – The Cozy Hug in a Cup</h3>
              <p>
              This seasonal beverage is the perfect blend of comfort and warmth. Rich chocolate meets the boldness of espresso, with a gentle swirl of cinnamon that adds a comforting aroma and just the right amount of spice.

It’s our go-to drink for those chilly days when all you want is a cozy nook, your favorite book, and something warm to sip slowly.

☕ Best Paired With: A slice of our Almond Raspberry Cake.              </p>

              <h3>2. Iced Berry Hibiscus Tea – Fresh, Floral & Flirty</h3>
              <p>
              Refreshing, light, and just a little bit playful—our Iced Berry Hibiscus Tea is a customer favorite for good reason. This caffeine-free cooler is perfect when you want something fruity without being overly sweet.

Infused with hibiscus petals, berries, and a touch of citrus zest, it’s basically springtime in a glass.

🌸 Perfect for: A mid-day pick-me-up or a casual catch-up with a friend.
              </p>

              <h3>3. Vanilla Rose Cold Brew – A Floral Twist to Your Daily Fix</h3>
              <p>
              Cold brew is already a game-changer—but when you add delicate notes of vanilla and rose, it becomes an experience. This one’s for the adventurous coffee lovers who enjoy flavor layering and something unique.

The floral essence isn’t overpowering—it just lingers gently in the background, elevating your regular cold brew into something almost poetic.

🌹 Pro Tip: This seasonal beverage photographs beautifully for your Instagram feed (you’re welcome!).              </p>

              <h3>4. Spiced Chai Latte – A Sip of Home</h3>
              <p>
              There’s nothing like the nostalgia of a good chai—especially when it’s brewed with freshly crushed spices and creamy milk. Our Spiced Chai Latte is made the traditional way, with a generous mix of cinnamon, ginger, cloves, cardamom, and a hint of black pepper.

It’s comfort in a cup. One sip, and it instantly transports you to a cozy kitchen where conversations flow freely and hearts feel lighter.

🍂 Mood pairing: Rainy afternoons and slow music.              </p>

              <h3>5. Caramel Hazelnut Cappuccino – The Sweet Escape</h3>
              <p>
              If your heart says “sweet” but your taste buds crave balance, this one’s your perfect match. The nutty depth of hazelnut paired with smooth caramel syrup turns an ordinary cappuccino into a dreamy indulgence.

Not too sugary, not too bold—just creamy, comforting perfection with every sip.

🥐 Try this with: Our freshly baked butter croissant.              </p>

            <h3>6. Matcha Mint Latte – Green, Clean, and Serene</h3>
                        <p>
                        Looking for something that’s both energizing and refreshing? Enter our Matcha Mint Latte. The earthy richness of matcha meets the crisp, cool zing of mint—a surprisingly delicious duo.

This seasonal beverage is great when you want a gentle caffeine boost without the heaviness of traditional coffee. Plus, it’s a great conversation starter: “Have you tried matcha with mint?!”

🍃 Bonus: Matcha is packed with antioxidants, so it’s a win for wellness lovers too.              </p>

            <h3>7. Orange Espresso Tonic – The Unexpected Favorite</h3>
                        <p>
                        This one’s a bold choice—but hear us out. The Orange Espresso Tonic is the underdog that ends up stealing the show. Imagine the fizzy brightness of tonic water, the citrusy zing of fresh orange, and the depth of a sharp espresso shot. It’s refreshing, zesty, and strangely addictive.

Think of it as a coffee mocktail—a refreshing twist that’s perfect for sunny afternoons or when you want to try something different.

🍊 Best enjoyed: Chilled, with a slice of orange on the rim.            </p>

            <h3>Bonus Tip: Talk to Your Barista!</h3>
                        <p>
                        One of the best parts of café culture is the human connection. Our baristas at Brew & Bite love sharing drink stories, offering recommendations, and helping you discover something you didn’t know you’d love. Don’t be shy to ask what’s trending, what’s new, or even what their personal favorite is—you might just find yours too!        </p>

            <h3>Final Sip: Let Every Cup Tell a Story</h3>
                        <p>
                        Trying new café drinks is more than just a taste test—it’s about finding those little sparks of joy in everyday life. So next time you visit Brew & Bite, ditch the usual (just once!) and try something new from this list.

Who knows? Your next favorite café memory might start with a sip of something unexpected.

And hey, we’d love to hear which one you tried! Share your experience on Instagram and tag us using #SipWithBrewAndBite—we love seeing your happy sips and cozy café stories.     </p>
              <div className={styles.blogCta}>
              "Not sure which drink to try? Our baristas are here to help! <a href='/contact'>Ask them</a> for their personal favorites or recommendations—your next go-to café drink might be just a conversation away."              </div>
          </article>
      </div></>
  );
};

export default Blog;
