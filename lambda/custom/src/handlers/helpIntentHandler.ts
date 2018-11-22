import * as Alexa from 'ask-sdk-core';
import { createUtterance } from '../factories/utteranceFactory';
import { HelpUtterance as Utterance } from '../utterances/helpUtterance';

export const HelpIntentHandler: Alexa.RequestHandler = {
  canHandle(handlerInput: Alexa.HandlerInput) {
    return handlerInput.requestEnvelope.request.type === 'IntentRequest'
      && handlerInput.requestEnvelope.request.intent.name === 'AMAZON.HelpIntent';
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
