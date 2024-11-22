import ListItem from '@/components/ListItem';
import './symbolCardInfo.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { currencyFormatter } from '../../../utils/currencyFormatter'

type SymbolCardInfoProps = {
    price: number;
    marketCap: number;
    industry: string;
    companyName: string;
  };

const SymbolCardBody = ({ price, companyName, industry, marketCap }: SymbolCardInfoProps) => {
    const formattedPrice = currencyFormatter(price)
    const formattedMarketCap = currencyFormatter(marketCap)

  return (
    <div className="symbolCard__info">
      <div className='symbolCard__price'>
        <div>PRICE:</div> 
        <div>{formattedPrice}</div>
      </div>
      <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between" />
      <ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />
      <ListItem Icon={<MarketCapIcon />} label={formattedMarketCap} spacing="space-between" />
    </div>
  );
};

export default SymbolCardBody;