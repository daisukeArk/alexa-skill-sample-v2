import { UtteranceBase } from './utteranceBase';
import { IUtteranceResultBase } from '../entities/utteranceResultBase';

export class LaunchRequestUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = 'Welcome to the Alexa Skills Kit, you can say hello!';

    return {
      speech: speechText,
      repromptSpeech: speechText,
      cardTitle: 'Hello World',
      cardContent: speechText
    };
  }
}
