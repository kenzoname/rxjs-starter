export type TypeLog  = 'debug' | 'info' | 'warn' | 'error' | 'success';
export interface Log {
    type: TypeLog,
    message: any
  }