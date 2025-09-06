// src/utils/readingTime.ts
export const calculateReadingTime = (text: string): number => {
  const wordsPerMinute = 200;
  const wordCount = text.split(/\s+/).length;
  const readingTime = Math.ceil(wordCount / wordsPerMinute);
  return readingTime;
};
