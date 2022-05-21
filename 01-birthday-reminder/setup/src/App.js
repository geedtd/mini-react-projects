import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople] = useState(data)

  return <main>
    <section className="container">
      <h3>{people.length} Birthdays Today</h3>
      <List people={people}/>
      <button onClick={() => console.log('I was clicked')}>
        Clear All Birthday Reminders
      </button>
    </section>
  </main>;
}

export default App;
