import { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import RoomCard from './RoomCard';

function App() {
  return (
    <div>
      <Navbar />
      <h2>Available Rooms</h2>
      <RoomCard name="Deluxe Room" price="5000" view="Mountain View" />
      <RoomCard name="Standard Room" price="3000" view="City View" />
      <RoomCard name="Suite Room" price="8000" view="Pool View" />
      <Footer />
    </div>
  );
}

export default App;