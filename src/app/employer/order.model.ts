export interface OrderItem {
productName: any;
    id: string;
    name: string;
    quantity: number;
    scanned: number;
  }
  
  export interface Order {
createdAt: string|number|Date;
    id: string;
    status: string;
    items: OrderItem[];
  }
  