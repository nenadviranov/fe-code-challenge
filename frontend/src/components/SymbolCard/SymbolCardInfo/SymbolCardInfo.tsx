import ListItem from '@/components/ListItem';
import './symbolCardInfo.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';
import { ReactComponent as IndustryIcon } from '@/assets/industry.svg';
import { ReactComponent as MarketCapIcon } from '@/assets/market_cap.svg';
import { currencyFormatter } from '../../../utils/currencyFormatter'
import { memo } from 'react';

type SymbolCardInfoProps = {
    price: number;
    marketCap: number;
    industry: string;
    companyName: string;
    showCardInfo: boolean;
  };

const SymbolCardBody = ({ price, companyName, industry, marketCap, showCardInfo }: SymbolCardInfoProps) => {
    const formattedPrice = currencyFormatter(price)
    const formattedMarketCap = currencyFormatter(marketCap)

    const itemListInfo = [
      {
        id: 1,
        label: companyName,
        icon : <CompanyIcon/>
      },
      {
        id: 2,
        label: industry,
        icon: <IndustryIcon />
      },
      {
        id: 3,
        label: formattedMarketCap,
        icon: <MarketCapIcon />
      }
    ]

  return (
    <div className="symbolCard__info">
      <div className='symbolCard__price'>
        <div>PRICE:</div> 
        <div>{formattedPrice}</div>
      </div>
      {showCardInfo ? itemListInfo.map(({id, label, icon}) => (
      <ListItem key={id} Icon={icon} label={label} spacing="space-between" />
      ))
       : null}
    </div>
  );
};

export default memo(SymbolCardBody);