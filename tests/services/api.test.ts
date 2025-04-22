import { fetchDollar } from '@/services/api'

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ venta: 1150 }),
  })
) as jest.Mock

describe('fetchDollar', () => {
  it('should return an Stat object with Dollar data', async () => {
    const result = await fetchDollar()
    expect(result).toEqual({
      name: 'Dólar oficial',
      value: 1150,
      unit: '$',
      color: '#00FF99',
    })
  })
})
