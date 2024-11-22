import { useEffect } from 'react';
import './priceChart.css';
import { Line, LineChart, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { fetchPriceHistory, selectors } from '@/store/priceHistorySlice';
import Loading from '@/components/Loading';
type PriceChartProps = {
  symbolId: string | null;
};

const PriceChart = ({ symbolId }: PriceChartProps) => {
  const dispatch = useAppDispatch();
  const { activeSymbol } = useAppSelector((state) => state.store);
  const symbol = symbolId || activeSymbol;
  useEffect(() => {
    if (activeSymbol) {
      const priceChartHistory = dispatch(fetchPriceHistory(activeSymbol));
      return () => priceChartHistory.abort()
    }
    
  }, [dispatch, activeSymbol]);
  const apiState = useAppSelector(selectors.apiState);
  const data = useAppSelector(selectors.selectPriceHistory);
  const symbolInfo = useAppSelector(selectors.selectSymbolInfo);

  if (apiState.loading && symbol !== null)
    return (
      <div className="priceChart">
        <Loading />
      </div>
    );
  if (apiState.error) return <div className="priceChart">Failed to get price history!</div>;
  if (!symbol) return <div className="priceChart">Select stock</div>;
  return (
    <div className="priceChart">
      <div>{symbolInfo}</div>
      <ResponsiveContainer width="98%" height="100%">
        <LineChart data={data.map((e) => ({ ...e, time: new Date(e.time).toLocaleTimeString() }))}>
          <Line type="monotone" dataKey="price" stroke="#8884d8" dot={false} />
          <XAxis dataKey="time" />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PriceChart;
