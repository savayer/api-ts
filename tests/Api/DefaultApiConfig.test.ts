import { expect } from "chai";
import DefaultApiConfig from "../../src/Api/DefaultApiConfig";
import Headers from "../../src/Contracts/Types/Headers";

describe('DefaultApiConfig class', function() {
    const apiConfig = new DefaultApiConfig('https://tmgr.dev/api/')
    it('setBaseUrl', function() {
        expect(apiConfig.getBaseUrl()).equal('https://tmgr.dev/api');
    });

    it('setHeaders', function() {
        const contentTypeJsonHeaders: Headers = {
            'Content-Type': 'application/json',
        };
        apiConfig.setHeaders(contentTypeJsonHeaders);
        expect(apiConfig.getHeaders()['Content-Type']).equal('application/json');
    });
});