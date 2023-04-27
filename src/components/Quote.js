import React, { useState, useEffect } from 'react';

function QuoteComponent() {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=freedom',
          {
            headers: {
              'X-Api-Key': '5JcaEtYfVy+K33GwjVZwpQ==pHlk8DwAsjIFh954',
            },
          },
        );
        const data = await response.json();
        const randomIndex = Math.floor(Math.random() * data.length);
        setQuote(data[randomIndex].quote);
        setAuthor(data[randomIndex].author);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error('Error fetching quote: ', error);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return <p>Loading quote...</p>;
  }

  if (error) {
    return <p>Error fetching quote. Please try again later.</p>;
  }

  return (
    <div className="quote-container">
      <p className="quote">{quote}</p>
      <p className="author">
        -
        {author}
      </p>
    </div>
  );
}

export default QuoteComponent;
