import Users from "./Users";
import UserClass from "./UserClass.js";

const About = () => {
  return (
    // <div className="p-4">
    //     <h1 className="font-bold text-2xl">About</h1>
    //     <p className="text-1xl">This is Namaste React series...</p>
    //     {/* <Users name="John Doe (functional component)"/> */}
    //     <UserClass name="John Doe (class based component)"/>
    // </div>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full m-5 max-w-4xl p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">
          About Us
        </h2>

        <p className="text-lg text-gray-700 mb-4">
          Welcome to **Food-Delivery** - your go-to platform for food delivery
          from your favorite restaurants, all at the click of a button! Whether
          you're craving fast food, gourmet meals, or a cozy local bite, we have
          it all. We're here to ensure you get the best food, delivered right to
          your doorstep, fast and fresh.
        </p>

        <p className="text-lg text-gray-700 mb-4">
          At **Food-Delivery**, we understand that convenience is key. Our
          mission is to provide an easy, seamless food ordering experience. With
          just a few taps, you can order from an array of local and national
          restaurants, track your delivery, and have your meal delivered
          quickly. No matter where you are, we've got you covered!
        </p>

        <p className="text-lg text-gray-700 mb-4">
          We’ve built a network of reliable delivery partners who ensure your
          food arrives at the right temperature and within the shortest time
          possible. We’re committed to offering high-quality service every time,
          so you can enjoy your meal without a hassle.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          Our Values
        </h3>
        <ul className="list-disc pl-6 text-lg text-gray-700 mt-2">
          <li>
            <strong>Customer-Centric:</strong> We always put our customers first
            by providing exceptional food delivery service and support.
          </li>
          <li>
            <strong>Fast Delivery:</strong> Speed is essential. Our platform
            ensures that your food reaches you hot and fresh, without delay.
          </li>
          <li>
            <strong>Wide Variety:</strong> Whether it’s a midnight snack, a
            lunch break treat, or a special dinner, we offer an extensive
            variety of food options.
          </li>
          <li>
            <strong>Reliability:</strong> Our delivery partners are vetted,
            ensuring your meal arrives safely and on time.
          </li>
          <li>
            <strong>Quality Service:</strong> We prioritize food quality,
            providing only fresh meals that meet high standards.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          Our Vision
        </h3>
        <p className="text-lg text-gray-700 mt-2">
          Our vision is to be the leading food delivery platform, connecting
          people with the food they love, whenever they need it. We aim to
          revolutionize the way food is delivered by ensuring fast, reliable,
          and quality-driven services, creating a world where everyone can enjoy
          their favorite meals effortlessly.
        </p>

        <h3 className="text-2xl font-semibold text-gray-700 mt-6">
          How It Works
        </h3>
        <div className="space-y-4 mt-4">
          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Step 1: Browse Your Favorite Restaurants
            </h4>
            <p className="text-lg text-gray-700 mt-2">
              Explore a wide variety of restaurants in your area and browse
              through their menu to find exactly what you're craving.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Step 2: Place Your Order
            </h4>
            <p className="text-lg text-gray-700 mt-2">
              Add your favorite items to your cart, customize your meal if
              needed, and proceed to checkout.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Step 3: Track Your Delivery
            </h4>
            <p className="text-lg text-gray-700 mt-2">
              Track your order in real-time as our delivery partner makes their
              way to you, ensuring timely and accurate deliveries.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold text-gray-700">
              Step 4: Enjoy Your Meal!
            </h4>
            <p className="text-lg text-gray-700 mt-2">
              Once your food arrives, dig in and enjoy! We're here to make your
              dining experience as easy and enjoyable as possible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
