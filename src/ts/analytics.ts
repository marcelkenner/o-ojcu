export class AnalyticsTracker {
  log(event: string, metadata: Record<string, string | number> = {}) {
    console.debug('[analytics]', event, metadata);
  }
}
