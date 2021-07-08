export type IInnerFunc = () => string;
export type IGlobalRef = {
  [key: string]: IInnerFunc;
};
