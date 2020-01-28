const greeting = 'Hello from the Types!';

interface Message {
  field: string;
  digit: number;
}

const message: Message = {
  field: greeting,
  digit: 23,
};

export default (): void => {
  console.log('[TypeScript]:', message);
};
