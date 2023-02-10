import mergeSort from './index';

describe('mergeSort', () => {
    it('should return a sorted array of numbers', () => {
      const dataFirst = { data: [22, 6, 7, 8, 3, 4, 6, 3] };
      const dataSecond = { data: [4, 5, 6] };
      const expectedResult = [3, 3, 4, 4, 5, 6, 6, 6, 7, 8, 22];
      const result = mergeSort(dataFirst, dataSecond);
  
      expect(result).toEqual(expectedResult);
    });
  
    it('should return an empty array when both collections are empty', () => {
      const dataFirst = { data: [] };
      const dataSecond = { data: [] };
      const expectedResult = [];
      const result = mergeSort(dataFirst, dataSecond);
  
      expect(result).toEqual(expectedResult);
    });

    it('should return the correct result when one of the collections is empty', () => {
      const dataFirst = { data: [22, 6, 7, 8, 3, 4, 6, 3] };
      const dataSecond = { data: [] };
      const expectedResult = [3, 3, 4, 6, 6, 7, 8, 22];
      const result = mergeSort(dataFirst, dataSecond);

      expect(result).toEqual(expectedResult);
    });

});


