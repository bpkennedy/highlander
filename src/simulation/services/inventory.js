export const DOLLARS = 'dollars'

export const itemCatalog = {
  [DOLLARS]: ({ quantity } = { quantity: 0 }) => ({
    display: 'Dollars',
    img: '',
    description: 'Pay for things with this.',
    quantity,
  }),
}
