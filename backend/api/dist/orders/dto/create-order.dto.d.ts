export declare class CreateOrderDto {
    email: string;
    items: {
        id: string;
        title: string;
        price: number;
    }[];
    total: number;
    paymentMethod: 'pix' | 'credit_card';
    paymentStatus: 'pending' | 'paid' | 'failed';
}
