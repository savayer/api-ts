import {Repository} from "../Contracts/Repository";
import Api from "../Contracts/Api";
import Model from "../Contracts/Model";
import {UUID} from "../Contracts/UUID";
import TmgrApi from "../Api/TmgrApi";

export default class TaskRepository implements Repository<Model>{
    private _resource: TmgrApi;
    private _prefix: string;

    constructor(resource: TmgrApi) {
        this._resource = resource;
        this._prefix = '/tasks';
    }

    delete(id: UUID): void {
        this._resource.delete(this.url(`/${id}`))
    }

    find(id: UUID): Model {
        return undefined;
    }

    findAll(offset: Number, limit: Number): Model[] {
        return [];
    }

    store(model: Model): Model {
        return undefined;
    }

    update(id: UUID, model: Model): Model {
        return undefined;
    }

    url(uri: string): string {
        return `${this._prefix}/${uri}`;
    }

}