import React, { forwardRef, useMemo, useCallback } from 'react';
import WordCloud from 'react-d3-cloud';

type Word = { text: string; value: number };
type Props = {
  words: Word[];
};

export const WordCloudComponent = forwardRef<HTMLDivElement, Props>(({ words }, ref) => {
  const sortedWords = useMemo(() => words.sort((a, b) => b.value - a.value).slice(0, 150), [words]);

  const calculateFontSize = useCallback((value: number, min: number, max: number) => {
    const sizeRange = [30, 200]; // Min and max font sizes
    const normalized = (value - min) / (max - min);
    return sizeRange[0] + normalized * (sizeRange[1] - sizeRange[0]);
  }, []);

  // Calculate min and max values for dynamic sizing
  const minMax = useMemo(() => {
    const values = sortedWords.map(w => w.value);
    return [Math.min(...values), Math.max(...values)];
  }, [sortedWords]);

  return (
    <div ref={ref} style={{ width: '100%', height: '500px' }}>
      <WordCloud
        data={sortedWords}
        fontSize={word => calculateFontSize(word.value, minMax[0], minMax[1])}
        rotate={() => 0}
      />
    </div>
  );
});

WordCloudComponent.displayName = 'WordCloudComponent';
