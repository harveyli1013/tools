/* eslint-disable no-console */
import { pinyin } from 'pinyin-pro'

const fs = require('fs')
const path = require('path')

export async function fileDisplay(filePath: string): Promise<string[]> {
  try {
    const files = await fs.readdirSync(filePath)
    const paths = files.map(async filename => {
      // 获取当前文件的绝对路径
      const filedir = path.join(filePath, filename)
      // 根据文件路径获取文件信息，返回一个fs.Stats对象
      try {
        const stats = await fs.statSync(filedir)
        const isFile = stats.isFile() // 是文件
        const isDir = stats.isDirectory() // 是文件夹
        if (isFile) {
          return filename
        }
        if (isDir) {
          return await fileDisplay(filedir) // 递归，如果是文件夹，就继续遍历该文件夹下面的文件
        }
        return await Promise.reject(
          new Error('this file is not either a file or dir type'),
        )
      } catch (error) {
        return Promise.reject(error)
      }
    })
    return await Promise.all(paths)
  } catch (error) {
    return Promise.reject(error)
  }
}

export async function fileRename(filePath: string): Promise<boolean[] | Error> {
  const absPath = path.join(__dirname, filePath)
  try {
    const paths = await fileDisplay(absPath)

    return await Promise.all<Promise<boolean>>(
      paths.map(async fileName => {
        const globalNames = fileName.split('.')
        const suffixNames = globalNames[1]
        const czName = globalNames[0]
        const pyName = pinyin(czName, { toneType: 'none' }).split(' ').join('_')

        const oldPath = path.join(__dirname, `${filePath}/${fileName}`)
        const newPath = path.join(
          __dirname,
          `${filePath}/${pyName}.${suffixNames}`,
        )
        return new Promise((resolve, reject) => {
          fs.rename(oldPath, newPath, error => {
            if (error) reject(error)
            resolve(true)
          })
        })
      }),
    )
  } catch (error) {
    return error as Error
  }
}
