import * as Alexa from 'ask-sdk-core';
import { createUtterance } from '../factories/utteranceFactory';
import { LaunchRequestUtterance as Utterance } from '../utterances/launchRequestUtterance';

export const LaunchRequestHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
  },
  handle(handlerInput: Alexa.HandlerInput) {
    const uttranceResult = createUtterance(Utterance).respond();

    return handlerInput.responseBuilder
      .speak(uttranceResult.speech)
      .reprompt((uttranceResult.repromptSpeech as string))
      .withSimpleCard(
        (uttranceResult.cardTitle as string),
        (uttranceResult.cardContent as string)
      )
      .getResponse();
  },
};
