export interface SessionData {
  createdAt: number;
  ip: string;
}

const globalForSessions = globalThis as unknown as {
  digiproSessions?: Map<string, SessionData>;
};

export const sessions =
  globalForSessions.digiproSessions ?? new Map<string, SessionData>();

if (process.env.NODE_ENV !== "production") {
  globalForSessions.digiproSessions = sessions;
}
