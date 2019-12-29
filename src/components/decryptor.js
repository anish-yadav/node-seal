import { Exception } from './exception'

export const Decryptor = ({ library, context, secretKey }) => {
  const _Exception = Exception({ library })
  let _instance = null
  try {
    _instance = new library.Decryptor(context.instance, secretKey.instance)
  } catch (e) {
    throw _Exception.safe({ error: e })
  }

  /**
   * @typedef {Object} Decryptor
   * @implements IDecryptor
   */

  /**
   * @interface IDecryptor
   */
  return {
    /**
     * Get the underlying WASM instance
     *
     * @private
     * @readonly
     * @name IDecryptor#instance
     * @type {instance}
     */
    get instance() {
      return _instance
    },

    /**
     * Inject this object with a raw WASM instance
     *
     * @private
     * @function
     * @name IDecryptor#inject
     * @param {Object} options Options
     * @param {instance} options.instance WASM instance
     */
    inject({ instance }) {
      if (_instance) {
        _instance.delete()
        _instance = null
      }
      _instance = instance
    },

    /**
     * Delete the underlying WASM instance
     *
     * Should be called before dereferencing this object
     * @function
     * @name IDecryptor#delete
     */
    delete() {
      if (_instance) {
        _instance.delete()
        _instance = null
      }
    },

    /**
     * Decrypts a Ciphertext and stores the result in the destination parameter.
     *
     * @function
     * @name IDecryptor#decrypt
     * @param {Object} options Options
     * @param {CipherText} options.cipherText CipherText to decrypt
     * @param {PlainText} options.plainText PlainText destination to store the result
     */
    decrypt({ cipherText, plainText }) {
      try {
        _instance.decrypt(cipherText.instance, plainText.instance)
      } catch (e) {
        throw _Exception.safe({ error: e })
      }
    },

    /**
     * Computes the invariant noise budget (in bits) of a CipherText. The invariant
     * noise budget measures the amount of room there is for the noise to grow while
     * ensuring correct decryptions. This function works only with the BFV scheme.
     *
     * @par Invariant Noise Budget
     * The invariant noise polynomial of a CipherText is a rational coefficient
     * polynomial, such that a CipherText decrypts correctly as long as the
     * coefficients of the invariantnoise polynomial are of absolute value less
     * than 1/2. Thus, we call the infinity-norm of the invariant noise polynomial
     * the invariant noise, and for correct decryption requireit to be less than
     * 1/2. If v denotes the invariant noise, we define the invariant noise budget
     * as -log2(2v). Thus, the invariant noise budget starts from some initial
     * value, which depends on the encryption parameters, and decreases when
     * computations are performed. When the budget reaches zero, the CipherText
     * becomes too noisy to decrypt correctly.
     *
     * @function
     * @name IDecryptor#invariantNoiseBudget
     * @param {Object} options Options
     * @param {CipherText} options.cipherText CipherText to measure
     * @returns {Number} Invariant noise budget (in bits)
     */
    invariantNoiseBudget({ cipherText }) {
      try {
        return _instance.invariantNoiseBudget(cipherText.instance)
      } catch (e) {
        throw _Exception.safe({ error: e })
      }
    }
  }
}