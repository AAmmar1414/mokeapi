"use client"
import React, { useEffect, useState } from "react";

interface User {
  name: string;
  price: number;
  image: string;
  id: string;
}

const Fruits: React.FC = () => {
  const [fruits, setFruits] = useState<User[]>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("https://677ec7b594bde1c1252d84b4.mockapi.io/ec0m/1/test");
      const data = await response.json();
      setFruits(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Fruits</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {fruits.map((fruit) => (
          <div key={fruit.id} className="border p-4 rounded shadow">
            <img
              src={fruit.image}
              alt={fruit.name}
              className="w-full h-48 object-cover mb-2 rounded"
            />
            <h2 className="text-xl font-semibold">{fruit.name}</h2>
            <p className="text-gray-700">Price: ${fruit.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fruits;
