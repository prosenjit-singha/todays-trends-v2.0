declare module "@alan-ai/alan-sdk-web/dist/AlanButtonOptions" {
  interface AlanButtonOptions {
    key: string;
    onCommand?: (
      commandData: {} & { command: string; payload: object }
    ) => void;
  }
}
