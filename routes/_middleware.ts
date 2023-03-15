import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 618,
  site: "meu-site-1",
  domains: ["meu-site-1.deco.site"],
});