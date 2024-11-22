import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import SymbolCardHeader from './SymbolCardHeader'
import SymbolCardInfo from './SymbolCardInfo'
import { useEffect, useRef } from 'react';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);
  const { activeSymbol } = useAppSelector((state) => state.store);
  
  const handleOnClick = () => {
    onClick(id);
  };

  const prevCountRef = useRef<number | null>(null);

  useEffect(() => {
    prevCountRef.current = price; 
  }, [price]);

  const addClassNames = () => {
    let className = ['symbolCard'];
    if(activeSymbol) {
      if(activeSymbol === id) {
        className.push('symbolCard--clicked')
      }
      if (activeSymbol !== id) {
        className.push('symbolCard--not-clicked')
      }
    }
    const prevPrice = prevCountRef.current;
    if(prevPrice !== null) {
      const increasePercent = (100 * (price - prevPrice)) / prevPrice;


    if (price > prevPrice) {
      if (increasePercent >= 25) {
        className.push('symbolCard__shake');
      }
      className.push('symbolCard--green-shadow');
    }
    if (price < Number(prevPrice)) {
      className.push('symbolCard--red-shadow');
    }
  }
    return className.join(' ');
  }

  return (
    <div onClick={handleOnClick} className={addClassNames()}>
      <div>
        <SymbolCardHeader trend={trend} id={id}/>
        <SymbolCardInfo price={price} companyName={companyName} industry={industry} marketCap={marketCap} />
      </div>
    </div>
  );
};
export default SymbolCard;
