import { expect } from "chai";
import DefaultApiConfig from "../../src/Api/DefaultApiConfig";
import BaseApi from "../../src/Api/BaseApi";
import TestClient from "./TestClient";

describe('BaseApi with TestClient class', function() {
    type Content = {
        content: string
    };
    const apiConfig = new DefaultApiConfig('https://tmgr1.dev/api/');
    const client = new TestClient(apiConfig);
    const baseApi = new BaseApi<TestClient<Content>, Content>(client, apiConfig);

    it('setBaseUrl', function() {
        expect(apiConfig.getBaseUrl()).equal('https://tmgr1.dev/api');
    });

    it('get', async function() {

        const response = await baseApi.get('/test');

        expect(response.getStatus()).equal(200);
        expect(response.getData().content).equal('Get content');
        expect(response.getData()).to.deep.equal({
            content: 'Get content'
        });
        expect(response.getData()).not.to.deep.equal({
            content: 'abcd'
        });

        const response1 = await baseApi.delete('/notfound');
        expect(response1.getStatus()).equal(404);
    });
});