import Headers from "../Contracts/Types/Headers";
import ApiResponse from "../Contracts/ApiResponse";

export default class DefaultApiResponse<D> implements ApiResponse<D> {
    constructor(
        protected data: D,
        protected headers: Headers,
        protected status: number
    ) {

    }

    getData(): D {
        return this.data;
    }

    getHeaders(): Headers {
        return this.headers;
    }

    getStatus(): number {
        return this.status;
    }
}