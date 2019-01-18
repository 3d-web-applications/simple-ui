export const calcFillingLevel = (value) => {
  
  // min at 107, max at 16
  const progress = (91 * value) + 16;
  return {
    '-webkit-clip-path': `inset(${progress}px 0px 0px 0px)`,
    'clip-path': `inset(${progress}px 0px 0px 0px)`,
  };
};
