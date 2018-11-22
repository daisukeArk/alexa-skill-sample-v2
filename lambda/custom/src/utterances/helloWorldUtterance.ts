import { UtteranceBase } from './utteranceBase';
import { IUtteranceResultBase } from '../entities/utteranceResultBase';

export class HelloWorldUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = 'Hello World!';

    return {
      speech: speechText,
      cardTitle: 'Hello World',
      cardContent: speechText
    };
  }
}
