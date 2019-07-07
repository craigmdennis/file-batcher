import fs from 'fs'
import path from 'path'
import isHidden from 'is-hidden'

/**
 * Test if a file is markdown file.
 *
 * @param file Filename or file descriptor
 */
const isMarkDownFile = file => {
  const isDotFile = isHidden(path.basename(file))
  const isFile = fs.lstatSync(file).isFile() && !isDotFile

  return /^.+(?:\.md|\.markdown)$/.test(file) && isFile
}

export default isMarkDownFile
