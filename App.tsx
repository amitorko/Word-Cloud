import React from 'react';
import { WordCloudComponent } from './WordCloudComponent';

// Sample word data
const wordData = [
    { text: 'React', value: 100 },
    { text: 'JavaScript', value: 80 },
    { text: 'TypeScript', value: 60 },
    { text: 'Node.js', value: 40 },
    { text: 'Python', value: 20 },
    { text: 'Django', value: 10 },
    { text: 'Redux', value: 90 },
    { text: 'Vue', value: 30 },
    { text: 'Angular', value: 50 },
    // More words can be added here
];

function App() {
  // Conditional rendering based on the availability of words
  const content = wordData.length > 0 ? (
    <WordCloudComponent words={wordData} />
  ) : (
    <p>No words to display.</p> // Display this message if no words are available
  );

  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Word Cloud Example</h1>
      <div style={{ margin: '20px auto', width: '90%', maxWidth: '960px' }}>
        {content}
      </div>
    </div>
  );
}

export default App;
