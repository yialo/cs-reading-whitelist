declare module '*.ts'
declare module '*.tsx'

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  const content: string;
  export default content;
}

declare module '*.css' {
  const content: {
    [className: string]: string;
  };
  export default content;
}
