export const getStepValues = (itemsLength: number, isBig: boolean) => {
    return isBig
        ? {
              step: 70,
              maxOffset: -(70 * itemsLength - 350),
          }
        : {
              step: 48,
              maxOffset: -(48 * itemsLength - 240),
          };
};
