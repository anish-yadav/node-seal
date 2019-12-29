export const SchemeType = ({ library }) => {
  const _none = library.SchemeType.none
  const _BFV = library.SchemeType.BFV
  const _CKKS = library.SchemeType.CKKS

  /**
   * @typedef {Object} SchemeType
   * @implements ISchemeType
   */

  /**
   * @interface ISchemeType
   */
  return {
    /**
     * Return the 'none' scheme type
     *
     * @readonly
     * @name ISchemeType#none
     * @type {SchemeType.none}
     */
    get none() {
      return _none
    },

    /**
     * Return the 'BFV' scheme type
     * @readonly
     * @name ISchemeType#BFV
     * @type {SchemeType.BFV}
     */
    get BFV() {
      return _BFV
    },

    /**
     * Return the 'CKKS' scheme type
     * @readonly
     * @name ISchemeType#CKKS
     * @type {SchemeType.CKKS}
     */
    get CKKS() {
      return _CKKS
    }
  }
}