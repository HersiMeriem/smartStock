
export interface Product {
    id: string;
    code: string;
    name: string;
    expectedQuantity: number;
    countedQuantity: number;
    status: 'normal' | 'damaged' | 'missing';
    discrepancy: number;
  }
  