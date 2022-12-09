declare module "@alan-ai/alan-sdk-web/dist/AlanButtonOptions" {
  interface AlanButtonOptions {
    key: string;
    onCommand?: (commandData: ON_COMMAND_PROPS) => void;
  }
}
