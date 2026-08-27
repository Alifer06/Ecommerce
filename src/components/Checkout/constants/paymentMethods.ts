export const PAYMENT_METHODS = [
  {
    id: 'card',
    icon: '💳',
    title: 'Tarjeta de crédito o débito',
    desc: 'Visa, Mastercard, Amex',
  },
  {
    id: 'wallet',
    icon: '💼',
    title: 'Billetera digital',
    desc: 'Apple Pay · Google Pay',
  },
  {
    id: 'spei',
    icon: '🏛',
    title: 'Transferencia SPEI',
    desc: 'Pago bancario directo',
  },
] as const;
