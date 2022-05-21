import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data)

  let clearData = () => {
    setPeople([])
  }
  return <main>
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people}/>
      <button onClick={() => clearData()}>
        Clear All Birthday Reminders
      </button>
    </section>
  </main>;
}

export default App;
