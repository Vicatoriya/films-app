export interface User {
  id?: string;
  name: string;
  email?: string | null;
  phone?: string | null;
  password: string;
  sessionId?: string | null;
}
