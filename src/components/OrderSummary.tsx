// src/components/OrderSummary.tsx
import React from 'react';
import musicIcon from '../assets/icon-music.svg';
import illustrationHero from '../assets/illustration-hero.svg';

// Define the shape of the props this component expects
interface OrderSummaryProps {
  orderSummary: string; // Title text like "Order Summary"
  description: string;   // Description paragraph
  price: string;         // Plan price like "$59.99/year"
}

// This is a functional component using TypeScript
const OrderSummary: React.FC<OrderSummaryProps> = ({ orderSummary, description, price }) => {
  return (
    // Full-screen container, centers the card in the middle
    <div
      className="min-h-screen flex items-center justify-center bg-[#e0e8ff] px-4"
      style={{
        // SVG wave background added directly via a data URI
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg xmlns=\"http://www.w3.org/2000/svg\" width=\"1440\" height=\"437\" viewBox=\"0 0 1440 437\"%3E%3Cpath fill=\"%23D6E1FF\" fill-rule=\"evenodd\" d=\"M0 0v87.026c218.558-116.035 460.05-116.035 724.475 0s502.933 116.035 715.525 0V0H0z\"/%3E%3C/svg%3E')",
        backgroundRepeat: 'no-repeat', // Do not repeat background
        backgroundPosition: 'top',     // Align background at the top
        backgroundSize: 'cover'        // Scale background to cover full width
      }}
    >
      {/* Card container */}
      <div className="w-full max-w-sm bg-white rounded-2xl overflow-hidden shadow-xl">
        {/* Top image inside the card */}
        <img src={illustrationHero} alt="Hero" className="w-full h-[180px] object-cover" />

        {/* Text and buttons below the image */}
        <div className="p-6 text-center">
          {/* Title */}
          <h2 className="text-xl font-bold text-[#1f2f56] mb-2">{orderSummary}</h2>

          {/* Description paragraph */}
          <p className="text-sm text-[#717fa6] mb-6">
            {description}
          </p>

          {/* Plan summary box */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-[#f7f9ff] p-4 rounded-lg mb-6 gap-3">
            <div className="flex items-center gap-3">
              {/* Music icon bubble */}
              <div className="p-2 rounded-full bg-[#dfe6fb]">
                <img src={musicIcon} alt="Music Icon" className="w-8 h-8" />
              </div>

              {/* Plan details */}
              <div className="text-left">
                <p className="font-bold text-sm text-[#1f2f56]">Annual Plan</p>
                <p className="text-sm text-[#717fa6]">{price}</p>
              </div>
            </div>

            {/* Change button */}
            <button className="text-sm font-bold text-[#382ae1] hover:text-[#766cf1] underline">Change</button>
          </div>

          {/* Primary action button */}
          <button className="w-full bg-[#382ae1] hover:bg-[#766cf1] text-white py-3 rounded-lg shadow mb-4">
            Proceed to Payment
          </button>

          {/* Cancel button */}
          <button className="text-sm font-bold text-[#717fa6] hover:text-[#1f2f56]">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;

/*
  📱 RESPONSIVENESS EXPLAINED:
  ---------------------------
  1. The outer container uses Tailwind's `min-h-screen`, `flex`, and `justify-center`/`items-center` to center the card.
  2. `px-4` adds side padding so the content doesn't touch screen edges on mobile.
  3. The card uses `max-w-sm` and `w-full` — meaning it will shrink to fit smaller screens.
  4. Inside the plan summary box, we use:
     - `flex-col` to stack items vertically by default (mobile-first).
     - `sm:flex-row` to switch to horizontal layout on screens `640px` and up.
     - `sm:items-center` and `sm:justify-between` help align them nicely in row layout.
  ✅ All combined, it looks clean and adapts well from mobile to desktop!
*/
