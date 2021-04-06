function naiveStringSearch(str, subStr) {
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < subStr.length; j++) {
      if (subStr[j] !== str[i]) {
        break;
      } else {
        j++;
      }
    }
  }
}

naiveStringSearch('omgomomffg', 'omfg');
