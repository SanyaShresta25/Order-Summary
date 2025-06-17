// Import the OrderSummary component from the 'components' folder
import OrderSummary from './components/OrderSummary';

// This is the main App component
/* What are props?
Props is short for properties.
They are like arguments you pass into a component to customize what it shows.
Think of OrderSummary like a function, and you're passing in different values to change the title, description, and price.
*/

const App = () => {
  return (
    // We are using the OrderSummary component here and giving it 3 props:
    // 1. orderSummary - this is a title like "Order Summary"
    // 2. description - this is the sentence that describes the service
    // 3. price - this tells how much the plan costs
    <OrderSummary
      orderSummary="Order Summary"
      description="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!"
      price="$9.99/year"
    />
  );
};

export default App;
