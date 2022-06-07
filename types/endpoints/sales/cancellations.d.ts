export = cancellationEndpointsFactory;
/**
 * @typedef {{
 *   fees: string[],
 *   flexPasses: string[],
 *   parcels: string[],
 *   redeemableItems: string[],
 *   soldItems: string[],
 *   tickets: string[],
 *   giftCertificates: string[],
 *   insurances: string[],
 *   trxId: string,
 *   penalty?: {
 *      amount: number,
 *      reason: string
 *   }
 * }} CancelSetData
*/
declare function cancellationEndpointsFactory({ client, internalAuthTokenProvider }: {
    client: any;
    internalAuthTokenProvider: any;
}): {
    sets: {
        create: ({ token, jwtToken, cancelData, headers }: {
            token: string;
            jwtToken: string;
            cancelData: CancelSetData;
            headers: any;
        }) => Promise<any>;
    };
    refunds: {
        create: ({ token, jwtToken, cancelSet, headers }: {
            token: string;
            jwtToken: string;
            cancelSet: any;
            headers: any;
        }) => Promise<any>;
    };
};
declare namespace cancellationEndpointsFactory {
    export { CancelSetData };
}
type CancelSetData = {
    fees: string[];
    flexPasses: string[];
    parcels: string[];
    redeemableItems: string[];
    soldItems: string[];
    tickets: string[];
    giftCertificates: string[];
    insurances: string[];
    trxId: string;
    penalty?: {
        amount: number;
        reason: string;
    };
};
