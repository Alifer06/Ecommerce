import React from 'react';

interface CheckoutSummaryProps {
  subtotal: number;
  shipping: number;
  total: number;
  onPay: () => void;
}

export const CheckoutSummary: React.FC<CheckoutSummaryProps> = ({
  subtotal,
  shipping,
  total,
  onPay,
}) => {
  return (
    <div className="checkout-summary-card">
      <div className="summary-row">
        <span className="summary-label">Subtotal</span>
        <span className="summary-val">{subtotal.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
      </div>
      <div className="summary-row">
        <span className="summary-label">Envío</span>
        <span className="summary-val">{shipping.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
      </div>
      <div className="summary-divider"></div>
      <div className="summary-row total-row">
        <span className="summary-label-total">Total</span>
        <span className="summary-val-total">{total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}</span>
      </div>
      <button className="pay-btn" onClick={onPay}>
        Pagar {total.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })}
      </button>
    </div>
  );
};
