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
    showCardInfo: boolean;
  };

const SymbolCardBody = ({ price, companyName, industry, marketCap, showCardInfo }: SymbolCardInfoProps) => {
    const formattedPrice = currencyFormatter(price)
    const formattedMarketCap = currencyFormatter(marketCap)

    const itemListInfo = [
      {
        label: companyName,
        icon : <CompanyIcon/>
      },
      {
        label: industry,
        icon: <IndustryIcon />
      },
      {
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
      {/* {showCardInfo ? <ListItem Icon={<CompanyIcon />} label={companyName} spacing="space-between"/>  : null}
      {showCardInfo ?<ListItem Icon={<IndustryIcon />} label={industry} spacing="space-between" />: null}
      {showCardInfo ?<ListItem Icon={<MarketCapIcon />} label={formattedMarketCap} spacing="space-between" />: null} */}
      {showCardInfo ? itemListInfo.map(({label, icon}) => (
      <ListItem Icon={icon} label={label} spacing="space-between" />
      ))
       : null}
    </div>
  );
};

export default SymbolCardBody;