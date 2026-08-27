export const PAYMENT_METHODS = [
  {
    id: 'card',
    icon: 'credit_card',
    title: 'Tarjeta de crédito o débito',
    desc: 'Visa, Mastercard, Amex',
  },
  {
    id: 'wallet',
    icon: 'wallet',
    title: 'Billetera digital',
    desc: 'Apple Pay · Google Pay',
  },
  {
    id: 'spei',
    icon: 'account_balance',
    title: 'Transferencia SPEI',
    desc: 'Pago bancario directo',
  },
] as const;
