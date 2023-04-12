export const insertArrayAtPos = <T>(array: T[], position: number, element: T) => {
  const arrayCopy = [...array];
  arrayCopy.splice(position, 0, element);
  return arrayCopy;
};
