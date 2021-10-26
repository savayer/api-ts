import { expect } from "chai";
import DefaultApiConfig from "../../src/Api/DefaultApiConfig";
import BaseApi from "../../src/Api/BaseApi";
import AxiosClient from "../../src/Api/AxiosClient";
import {Axios} from "axios";
import ApiResponse from "../../src/Contracts/ApiResponse";

describe('BaseApi class', function() {
    const apiConfig = new DefaultApiConfig('https://tmgr1.dev/api/');
    const client = new AxiosClient(new Axios(), apiConfig);
    const baseApi = new BaseApi<AxiosClient, any>(client, apiConfig);

    it('setBaseUrl', function() {
        expect(apiConfig.getBaseUrl()).equal('https://tmgr1.dev/api');
    });

    it('get', function() {
        baseApi.get('/test').then((r: ApiResponse<Record<string, any>>) => {
            expect(r.getStatus()).equal(0);
        })
    });
});