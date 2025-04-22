import React from 'react'
import { render } from '@testing-library/react-native'
import Card from '@/components/Card'

describe('Card', () => {
  it('should show name and value correctly', () => {
    const { getByText } = render(
      <Card name='Dólar oficial' value={1100} unit='$' color='#00FF99' />
    )

    expect(getByText('Dólar oficial')).toBeTruthy()
    expect(getByText('$ 1100')).toBeTruthy()
  })
})
