import React, { useEffect } from 'react';
import { useAppDispatch } from '../app/redux/store';
import { setYFinanceData } from '../app/redux/actions';

const YFinanceComponent: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('your_yfinance_api_url');
        const data = await response.json();
        dispatch(setYFinanceData(data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, [dispatch]);

  return null;
};

export default YFinanceComponent;
