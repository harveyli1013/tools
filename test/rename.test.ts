import { fileRename } from '../src'

describe('fileRename', () => {
  // test('rename files name not correct', () =>
  //   fileRename('../static/image').then(res => {
  //     expect(res).rejects.toMatch('error')
  //   }))
  test('rename files name in correct', () => {
    fileRename('../static/images').then(res => {
      expect(res).toBeTruthy()
    })
  })
})
