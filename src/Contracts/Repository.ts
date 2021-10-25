import {UUID} from "./UUID";
import Url from "./Url";

export interface Repository<T> extends Url {
    find (id: UUID): T;
    store (model: T): T;
    update (id: UUID, model: T): T;
    delete (id: UUID): void;
    findAll (offset: Number, limit: Number): T[];
}