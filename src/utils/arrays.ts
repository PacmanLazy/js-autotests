// Signature of the callback
type CallBackFindIndex<T> = (
    value: T,
    index?: number,
    collection?: T[]
  ) => Promise<boolean>;

class ArrayUtils {
  /**
   * Async FindIndex function
   *
   * @export
   * @template T
   * @param {T[]} elements
   * @param {CallBackFind<T>} cb
   * @returns {Promise<number>}
   */
  async aFindIndex<T>( elements: T[], cb: CallBackFindIndex<T> ): Promise<number> {
    for (const [index, element] of elements.entries()) {
      if (await cb(element, index, elements)) {
        return index;
      }
    }
  
    return -1;
  }
}

export default new ArrayUtils();