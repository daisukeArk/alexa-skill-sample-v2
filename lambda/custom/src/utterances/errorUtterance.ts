import { UtteranceBase } from './utteranceBase';
import { IUtteranceResultBase } from '../entities/utteranceResultBase';

export class ErrorUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(): IUtteranceResultBase {
    const speechText = 'Sorry, I can\'t understand the command. Please say again.';

    return {
      speech: speechText,
      repromptSpeech: speechText
    };
  }
}
