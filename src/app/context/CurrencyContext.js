"use client";

import { createContext, useContext, useState, useEffect } from "react";

const CurrencyContext = createContext();

const priceMaps = {
  // Discovery Calls & Guide Book
  "discovery-45": { INR: "₹1,000", USD: "$15" },
  "discovery-30": { INR: "₹666", USD: "$9.99" },
  "merchandise-book": { INR: "₹699", USD: "$8.99" },
  
  // Yoga & Hybrid Sessions
  "yoga-hybrid-personal": { INR: "₹11,111", USD: "$149" },
  "yoga-hybrid-group-1": { INR: "₹7,777", USD: "$99" },
  "yoga-hybrid-group-2": { INR: "₹999", USD: "$12.99" },
  "yoga-hybrid-group-3": { INR: "₹10,000", USD: "$129" },
  "yoga-hybrid-group-3days": { INR: "₹1,999", USD: "$29" },
  "yoga-hybrid-group-5days": { INR: "₹2,999", USD: "$39" },
  
  // Online Hybrid Sessions
  "hybrid-sessions-1": { INR: "₹3,000", USD: "$39" },
  "hybrid-sessions-3": { INR: "₹7,999", USD: "$99" },
  "hybrid-sessions-6": { INR: "₹8,999", USD: "$119" },
  
  // Anti-Aging Summer Offer
  "anti-aging-33": { INR: "₹3,999", USD: "$49" },
  "anti-aging-22": { INR: "₹3,500", USD: "$45" },
  "anti-aging-11": { INR: "₹3,000", USD: "$39" },
  
  // Customized Meal Plans
  "meal-plan-1": { INR: "₹6,000", USD: "$79" },
  "meal-plan-3": { INR: "₹15,555", USD: "$189" },
  "meal-plan-installment": { INR: "₹18,000", USD: "$219" },
  "meal-plan-silver": { INR: "₹9,000", USD: "$119" },
  "meal-plan-gold": { INR: "₹15,000", USD: "$189" },
  "meal-plan-platinum": { INR: "₹18,000", USD: "$229" },
  
  // Complete Hair Solution
  "hair-solution": { INR: "₹2,999", USD: "$39" }
};

const actualPriceMaps = {
  "yoga-hybrid-personal": { INR: "₹15,000", USD: "$199" },
  "yoga-hybrid-group-1": { INR: "₹9,300", USD: "$119" },
  "yoga-hybrid-group-2": { INR: "₹999", USD: "$12.99" },
  "yoga-hybrid-group-3": { INR: "₹11,988", USD: "$149" },
  "hybrid-sessions-3": { INR: "₹9,000", USD: "$119" },
  "hybrid-sessions-6": { INR: "₹12,000", USD: "$159" },
  "meal-plan-3": { INR: "₹18,000", USD: "$239" },
  "meal-plan-installment": { INR: "₹18,000", USD: "$239" },
  "meal-plan-silver": { INR: "₹12,000", USD: "$159" },
  "meal-plan-gold": { INR: "₹20,000", USD: "$249" },
  "meal-plan-platinum": { INR: "₹24,000", USD: "$299" },
  "merchandise-book": { INR: "₹999", USD: "$12.99" }
};

export function CurrencyProvider({ children }) {
  const [currency, setCurrencyState] = useState("INR");

  useEffect(() => {
    const saved = localStorage.getItem("gwg-currency");
    if (saved === "USD" || saved === "INR") {
      Promise.resolve().then(() => {
        setCurrencyState(saved);
      });
    }
  }, []);

  const setCurrency = (val) => {
    if (val === "USD" || val === "INR") {
      setCurrencyState(val);
      localStorage.setItem("gwg-currency", val);
    }
  };

  const formatPrice = (id) => {
    const prices = priceMaps[id];
    if (!prices) return "";
    return prices[currency] || prices["INR"];
  };

  const formatActualPrice = (id) => {
    const prices = actualPriceMaps[id];
    if (!prices) return "";
    return prices[currency] || prices["INR"];
  };

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, formatPrice, formatActualPrice }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
