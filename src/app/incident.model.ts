export interface Incident {
    key?: string; 
    title: string;
    description: string;
    status: 'en cours' | 'clôturé'; 
    dateReported: Date;
    dateClosed?: Date; 
  }
  