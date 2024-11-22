import { memo } from 'react';
import './symbolCardHeader.css';
import arrowDown from '@/assets/down.png';
import arrowUp from '@/assets/up.png';

type SymbolCardHeaderProps = {
  id: string;
  trend: string | null;
};

const SymbolCardHeader = ({ id, trend }: SymbolCardHeaderProps) => {
  return (
    <div className="symbolCard__header">
      <img src={trend === 'UP' ? arrowUp : arrowDown} className="symbolCard__trendIcon" />
      {id}
    </div>
  );
};

export default memo(SymbolCardHeader);