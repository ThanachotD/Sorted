interface Colecctions {
    data: Number[];
  }
  
  function mergeSort(collectionFirst: Colecctions, collectionSecond: Colecctions) {
    const collectionMerge = { data: [...collectionFirst.data, ...collectionSecond.data] };
    for (var i = 0; i < collectionMerge.data.length; i++) {
      for (var j = 0; j < collectionMerge.data.length; j++) {
        if (collectionMerge.data[i] < collectionMerge.data[j]) {
          var data = collectionMerge.data[i];
          collectionMerge.data[i] = collectionMerge.data[j];
          collectionMerge.data[j] = data;
        }
      }
    }
    return collectionMerge.data;
  }
//const dataFirst = { data: [22, 6, 7, 8, 3, 4, 6, 3] };
//const dataSecond = { data: [4, 5, 6] };
//console.log(mergeSort(dataFirst, dataSecond).join(", "));
export default mergeSort;
  
 

  