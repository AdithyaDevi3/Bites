import { describe, it, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useCart } from '~/hooks/useCart'

describe('useCart', () => {
  it('adds items and computes totals', () => {
    const { result } = renderHook(() => useCart())
    act(() => {
      result.current.addToCart({ id: 1, name: 'Test', description: 't', price: 5, image: '', category: 'x' })
    })
    expect(result.current.items.length).toBe(1)
    expect(result.current.getItemCount()).toBe(1)
  })
})
