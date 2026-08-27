import React from 'react';

interface SuccessModalProps {
  total: number;
  selectedMethod: 'card' | 'wallet' | 'spei';
  onConfirm: () => void;
}

export const SuccessModal: React.FC<SuccessModalProps> = ({
  total,
  selectedMethod,
  onConfirm,
}) => {
  const methodName =
    selectedMethod === 'card'
      ? 'Tarjeta'
      : selectedMethod === 'wallet'
      ? 'Billetera digital'
      : 'SPEI';

  return (
    <div className="modal-overlay">
      <div className="success-modal-card">
        <h3 className="success-modal-title">¡Pago Exitoso!</h3>
        <p className="success-modal-text">
          Tu pago de <strong>${total.toLocaleString()}</strong> mediante{' '}
          {methodName} se ha procesado de manera correcta.
        </p>
        <button className="success-modal-btn" onClick={onConfirm}>
          Volver a la tienda
        </button>
      </div>
    </div>
  );
};
