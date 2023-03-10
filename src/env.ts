import dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export const LCD_ENDPOINT: string = env.LCD_ENDPOINT!;
export const CHAIN_ID: string = env.CHAIN_ID!;
export const MNEMONIC_KEY: string = env.MNEMONIC_KEY!;
export const WARP_CONTROLLER_ADDRESS: string | undefined =
  env.WARP_CONTROLLER_ADDRESS;
export const SETTEN_PROJECT: string | undefined = env.SETTEN_PROJECT;
export const SETTEN_KEY: string | undefined = env.SETTEN_KEY;
