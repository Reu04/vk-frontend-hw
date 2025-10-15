/*
 * В этом задании надо разработать функцию
 * `convertBytesToHuman`. Эта функция  должна принимать
 * аргумент `bytes` только числового типа.
 * На выходе функция должна отдать
 * человекопонятную строку, которая будет
 * отражать размер файла. Округление, максимум,
 * до 2 знаков после запятой, исключая нули.
 *  Примеры использования:
 * `convertBytesToHuman(1024) === '1 KB';`
 * `convertBytesToHuman(123123123) === '117.42 MB';`
 * `convertBytesToHuman(1610612736) === '1.5 GB';`
 * Необходимо предусмотреть защиту от
 * передачи аргументов неправильного типа
 * и класса (например, отрицательные числа).
 * В случае передачи неподходящего аргумента,
 * функция должна вернуть false.
 */

const dataUnitsMap = new Map([
  [2**10, 'KB'],
  [2**20, 'MB'],
  [2**30, 'GB'],
  [2**40, 'TB'],
  [2**50, 'PB'],
  [2**60, 'EB'],
  [2**70, 'ZB'],
  [2**80, 'YB'],
]);

export default function convertBytesToHuman(bytes) {
  if ((typeof bytes !== 'number' && 
      typeof bytes !== 'bigint') || 
      bytes < 0) {
    return false;
  }

  const reverseMap = [...dataUnitsMap.entries()].reverse();
  for (const [value, name] of reverseMap) {
    if (bytes >= value) {
      const formattedRes = parseFloat((+bytes / value).toFixed(2))
      return `${formattedRes} ${name}`;
    }
  }
  return `${bytes} B`
}