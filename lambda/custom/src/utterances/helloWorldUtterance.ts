import { UtteranceBase } from './utteranceBase';
import { IUtteranceResultBase } from '../entities/utteranceResultBase';
import { GreetingTypes, getGreetingType } from '../models/getGreetingType';

export class HelloWorldUtterance extends UtteranceBase {
  constructor() {
    super();
  }

  public respond(hours: number): IUtteranceResultBase {
    const type = getGreetingType(hours);

    let speechText: string;

    switch (type) {
      case GreetingTypes.Morning:
        speechText = 'Good morning!';
        break;
      case GreetingTypes.Afternoon:
        speechText = 'Good afternoon!';
        break;
      case GreetingTypes.Evening:
        speechText = 'Good evening!';
        break;
      default:
        speechText = 'Hello World!';
        break;
    }

    return {
      speech: speechText,
      cardTitle: 'Hello World',
      cardContent: speechText
    };
  }
}
