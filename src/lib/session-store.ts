export interface SessionData {
  createdAt: number;
  ip: string;
}

const globalForSessions = globalThis as unknown as {
  digiproSessions?: Map<string, SessionData>;
};

export const sessions =
  globalForSessions.digiproSessions ?? new Map<string, SessionData>();

// Always persist to globalThis — required for serverless (Vercel)
globalForSessions.digiproSessions = sessions;
