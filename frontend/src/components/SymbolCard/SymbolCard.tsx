import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import SymbolCardHeader from './SymbolCardHeader'
import SymbolCardInfo from './SymbolCardInfo'
import { memo, useEffect, useMemo, useRef } from 'react';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);
  const { activeSymbol, showCardInfo } = useAppSelector((state) => state.store);
  
  const handleOnClick = () => {
    onClick(id);
  };

  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = price; 
  }, [price]);

  const addClassNames = useMemo(() => { 
  let className = ['symbolCard'];
  if(activeSymbol) {
    className.push(activeSymbol === id ? 'symbolCard__clicked' : 'symbolCard__not-clicked');
  }
  const prevPrice = prevCountRef.current;
  if(prevPrice !== null) {
    const increasePercent = (100 * (price - prevPrice)) / prevPrice;
    if (price > prevPrice) {
      if (increasePercent >= 25) {
        className.push('symbolCard__shake');
      }
      className.push('symbolCard__green-shadow');
    }
    if (price < Number(prevPrice)) {
      className.push('symbolCard__red-shadow');
    }
  }
  return className.join(' ');
}, [price, activeSymbol, id])


  return (
    <div onClick={handleOnClick} className={addClassNames}>
        <SymbolCardHeader trend={trend} id={id}/>
        <SymbolCardInfo price={price} companyName={companyName} industry={industry} marketCap={marketCap}  showCardInfo={showCardInfo} />
    </div>
  );
};
export default memo(SymbolCard);
