/**
 * Функция возвращает окончание для множественного числа слова на основании числа и массива окончаний
 * @param {Number} iNumber Число на основе которого нужно сформировать окончание
 * @param {Array<String>} aEndings Array Массив слов или окончаний для чисел (1, 4, 5), например ['яблоко', 'яблока', 'яблок']
 * return {String}
 */
export default function getNumEnding(iNumber, aEndings) {
  iNumber = iNumber % 100;
  if (iNumber >= 11 && iNumber <= 19) return aEndings[2];
  const i = iNumber % 10;
  switch (i) {
    case (1):
      return aEndings[0];
    case (2):
    case (3):
    case (4):
      return aEndings[1];
    default:
      return aEndings[2];
  }
}