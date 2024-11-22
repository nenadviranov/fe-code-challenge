import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { useAppSelector } from '@/hooks/redux';
import ListItem from '@/components/ListItem';
import SymbolCardHeader from './SymbolCardHeader'
import SymbolCardInfo from './SymbolCardInfo'

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const { trend, companyName, industry, marketCap } = useAppSelector((state) => state.stocks.entities[id]);
  const handleOnClick = () => {
    onClick(id);
  };

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div>
        <SymbolCardHeader trend={trend} id={id}/>
        <SymbolCardInfo price={price} companyName={companyName} industry={industry} marketCap={marketCap} />
      </div>
    </div>
  );
};
export default SymbolCard;
