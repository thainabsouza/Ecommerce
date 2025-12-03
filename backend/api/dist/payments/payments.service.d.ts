export declare class PaymentsService {
    createPixPayment(total: number, description: string): Promise<{
        qrCodeBase64: any;
        qrCodeText: any;
        status: any;
        id: any;
    }>;
}
