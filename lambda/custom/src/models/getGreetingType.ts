export enum GreetingTypes {
  Morning,
  Afternoon,
  Evening
}

export function getGreetingType(hours: number) {
  let retValue: GreetingTypes;

  if (hours >= 6 && hours < 12) {
    retValue = GreetingTypes.Morning;
  } else if (hours >= 12 && hours < 17) {
    retValue = GreetingTypes.Afternoon;
  } else {
    retValue = GreetingTypes.Evening;
  }

  return retValue;
}
