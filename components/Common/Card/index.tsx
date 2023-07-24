import React from 'react';
import styles from './style.module.scss';
import { RadioCardProps } from '@/types/types';

export function RadioCard({ bgColor , children, className }:RadioCardProps) {
    let cardColorClass = styles.orangeCard;

    if (bgColor === 'blueCard') {
        cardColorClass = styles.blueCard;
    } else if (bgColor === 'orangeCard') {
        cardColorClass = styles.orangeCard;
    } else if (bgColor === 'whiteCard') {
      cardColorClass = styles.whiteCard;
  }
  return (
    <React.Fragment>
      <div className={className}>
        <div className="my-3">
            <div className={`${styles.Radiocard} ${cardColorClass} card-body`}>
               {children}
            </div>
        </div>
    </div>
    </React.Fragment>
  );
}

