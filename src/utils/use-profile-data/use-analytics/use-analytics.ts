interface GTAG extends Window {
  gtag: (eventName: string, eventType: string, data?: Object) => void;
}

export function useAnalytics() {
  const noop = () => null;
  const debugFunction = (param: any) => console.log(param);
  const placeholderHandler = process.env.NODE_ENV === 'development' ? debugFunction : noop;

  const emptyHandlers = {
    logSocialMediaClick: placeholderHandler,
    sendGoogleEvent: placeholderHandler,
    logReferralScroll: placeholderHandler,
  }

  if(typeof window === "undefined") {
    return emptyHandlers;
  }

  const windowWithGtag = window as unknown as GTAG;
  const sendGoogleEvent = windowWithGtag?.gtag;

  if(!sendGoogleEvent) {
    return emptyHandlers;
  }

  const logSocialMediaClick = (socialMedia: string) => {
    sendGoogleEvent("event", `view_${socialMedia}`, { event_label: `view_${socialMedia}` });
  }

  const logReferralScroll = (referralIndex: number | string) => {
    sendGoogleEvent("event", "view_referral", { event_label: `view_referral_${referralIndex}` });
  }

  return {
    logSocialMediaClick,
    sendGoogleEvent,
    logReferralScroll,
  }
}