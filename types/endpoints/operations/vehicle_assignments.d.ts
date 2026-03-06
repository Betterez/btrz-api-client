export = vehicleAssignmentFactory;
/**
 * @typedef {Object} VehicleAssignmentsQuery
 * @property {string} [providerId] - Provider account ID
 */
/**
 * Factory for vehicle-assignments API (btrz-api-operations).
 * @param {Object} deps
 * @param {import("axios").AxiosInstance} deps.client
 * @param {{ getToken: function(): string }} [deps.internalAuthTokenProvider]
 * @returns {Object} vehicle-assignments API methods
 */
declare function vehicleAssignmentFactory({ client, internalAuthTokenProvider }: {
    client: import("axios").AxiosInstance;
    internalAuthTokenProvider?: {
        getToken: () => string;
    };
}): any;
declare namespace vehicleAssignmentFactory {
    export { VehicleAssignmentsQuery };
}
type VehicleAssignmentsQuery = {
    /**
     * - Provider account ID
     */
    providerId?: string;
};
