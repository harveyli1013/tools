import { ERROR_THE_VARIATE_IS_NOT_EITHER_STRING_TYPE_OR_NUMBER_TYPE } from '../reminder'
import { isNumber, isString } from './typesVerification'

export function sum(a: number | string, b: number | string): number | string {
  if (isNumber(a) && isNumber(b)) {
    return <number>a + <number>b
  }
  if (isString(a) || isString(b)) {
    return <string>a + <string>b
  }

  throw new Error(ERROR_THE_VARIATE_IS_NOT_EITHER_STRING_TYPE_OR_NUMBER_TYPE)
}
