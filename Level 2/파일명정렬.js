function solution(files) {
  // 정렬에 필요한 정보를 담음 객체 배열 생성
  const fileList = files.map((file, index) => {
    const infoArr = file.split(/(\d+)/);
    return {
      file,
      index,
      word: infoArr[0].toLowerCase(),
      number: Number(infoArr[1]),
    };
  });
  // 조건에 맞게 정렬
  fileList.sort((a, b) => {
    if (a.word < b.word) return -1;
    if (a.word > b.word) return 1;
    if (a.number !== b.number) return a.number - b.number;
    return a.index - b.index;
  });
  // 기존 파일명만 반환
  return fileList.map((fileInfo) => fileInfo.file);
}

// 정렬 기준
// 1. 대소문자 없이 문자열 비교 (word)
// 2. 숫자 부분 비교 (number)
// 3. 기존 순서 비교 (index)
