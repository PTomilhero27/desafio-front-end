import ky from "ky";

import { env } from "@/constants/env.mjs";

export const apiDashboard = ky.create({
  prefixUrl: env.NEXT_PUBLIC_YMS_BASE_URL,
  timeout: 180000,
});
