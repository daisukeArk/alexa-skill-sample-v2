import { UtteranceBase } from './utteranceBase';
import { IUtteranceResultBase } from '../entities/utteranceResultBase';

export class CancelAndStopUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = 'Goodbye!';

    return {
      speech: speechText,
      cardTitle: 'Hello World',
      cardContent: speechText
    };
  }
}
