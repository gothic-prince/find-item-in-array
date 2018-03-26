import find from '../src/index'
const array = ['a', 'b', 'c', 'd', 'e', 'f']

describe('thFromEndOfArray', () => {
  it('it should return "e"', () => {
    expect(find(2).thFromEndOfArray(array)).toBe('e')
  })
  it('it should return "f"', () => {
    expect(find(1).thFromEndOfArray(array)).toBe('f')
  })
  it('it should return "a"', () => {
    expect(find(20).thFromEndOfArray(array)).toBe('a')
  })
  it('it should return "a"', () => {
    expect(find(6).thFromEndOfArray(array)).toBe('a')
  })
})
describe('thFromStartOfArray', () => {
  it('it should return "e"', () => {
    expect(find(5).thFromStartOfArray(array)).toBe('e')
  })
  it('it should return "f"', () => {
    expect(find(6).thFromStartOfArray(array)).toBe('f')
  })
  it('it should return "f"', () => {
    expect(find(20).thFromStartOfArray(array)).toBe('f')
  })
  it('it should return "a"', () => {
    expect(find(1).thFromStartOfArray(array)).toBe('a')
  })
})
