export default function (value: any): findItem {
  return new findItem(value)
}
class findItem {
  constructor(protected value: number) {}
  public thFromEndOfArray (items: Array<any>) {
    if (items.length >= this.value) {
      const index = items.length - this.value
      return items[index]
    }
    return items[0]
  }
  public thFromStartOfArray (items: Array<any>) {
    if (items.length >= this.value) {
      const index = this.value - 1
      return items[index]
    }
    return items[items.length - 1]
  }
}
