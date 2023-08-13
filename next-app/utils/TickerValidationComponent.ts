import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface TickerValidationProps {
  tickerName: string;
  onValidationResult: (isValid: boolean) => void;
}

const TickerValidationComponent: React.FC<TickerValidationProps> = ({ tickerName, onValidationResult }) => {
  const [isValidTicker, setIsValidTicker] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${tickerName}&apikey=A0OL0E8LK8LQ3EV1`);
        const data = response.data;

        // Check if the API response contains valid data indicating a valid ticker
        setIsValidTicker(data.bestMatches && data.bestMatches.length > 0);
        onValidationResult(data.bestMatches && data.bestMatches.length > 0);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsValidTicker(false);
        onValidationResult(false);
      }
    };

    fetchData();
  }, [tickerName, onValidationResult]);

  return null; // No DOM elements are returned
};

export default TickerValidationComponent;