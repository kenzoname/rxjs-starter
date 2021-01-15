export type TypeLog  = 'debug' | 'info' | 'warn' | 'error';
export interface Log {
    type: TypeLog,
    message: any
  }