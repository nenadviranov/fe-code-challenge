import SymbolsGrid from '@/components/SymbolsGrid';
import PriceChart from '@/components/PriceChart';
import DesktopInfo from './src/DesktopInfo';
import { useState } from 'react';
import './symbolsView.css'
import { setActiveSymbolState } from '@/store/dashboardOptionsSlice';
import { useAppDispatch } from '@/hooks/redux';

const SymbolsView = () => {
  const dispatch = useAppDispatch()
  const [activeSymbol, setActiveSymbol] = useState<null | string>(null);
  const handleSymbolClick = (symbolId: string) => {
    setActiveSymbol((s) => (s === symbolId ? null : symbolId));
    dispatch(setActiveSymbolState(symbolId))
  };

  return (
      <div className="symbolsView">
        <DesktopInfo/>

        <div className="symbolsView__content">
          <div className='symbolsView__pice-chart'>
            <div className="symbolsView__chart">
              <h3>PRICE HISTORY</h3>
            </div>
            <PriceChart symbolId={activeSymbol}/>
          </div>
          <div className="symbolsView__cards">
            <SymbolsGrid onSymbolClick={handleSymbolClick}/>
          </div>
        </div>
      </div>
  );
};

export default SymbolsView;
