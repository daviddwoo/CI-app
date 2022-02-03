const { expect } = require("chai")

describe('Routes', () => {
  describe('foo', () => {
    it('foo equal to foo', async() => {
      const foo = 'foo'
      expect(foo).to.include('foo')
    })
  })
})