import React from 'react';
import { PAYMENT_METHODS } from '../constants/paymentMethods';

interface PaymentOptionsProps {
  selectedMethod: 'card' | 'wallet' | 'spei';
  onSelectMethod: (method: 'card' | 'wallet' | 'spei') => void;
}

export const PaymentOptions: React.FC<PaymentOptionsProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  return (
    <div className="payment-options">
      {PAYMENT_METHODS.map((method) => {
        const isSelected = selectedMethod === method.id;
        return (
          <div
            key={method.id}
            className={`payment-option-card ${isSelected ? 'selected' : ''}`}
            onClick={() => onSelectMethod(method.id)}
          >
            <div className="payment-option-icon">
              <span className="material-symbols-outlined">{method.icon}</span>
            </div>
            <div className="payment-option-info">
              <span className="payment-option-title">{method.title}</span>
              <span className="payment-option-desc">{method.desc}</span>
            </div>
            <div className="payment-option-select">
              <span className={`circle-checkbox ${isSelected ? 'checked' : ''}`}>
                {isSelected && '✓'}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};
