/**
 * Password recovery token definition
 */
export declare class Token {
  id: number;
  token: string;
  expiresSec: number;
  createdAt: Date;
  user: string;
}
