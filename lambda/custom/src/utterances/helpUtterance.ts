import { UtteranceBase } from './utteranceBase';
import { IUtteranceResultBase } from '../entities/utteranceResultBase';

export class HelpUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = 'You can say hello to me!';

    return {
      speech: speechText,
      repromptSpeech: speechText,
      cardTitle: 'Hello World',
      cardContent: speechText
    };
  }
}
