import UUID from "./Types/UUID";
import Url from "./Url";

export default interface Repository<T> extends Url {
    find (id: UUID): T;
    store (model: T): T;
    update (id: UUID, model: T): T;
    delete (id: UUID): void;
    findAll (offset: Number, limit: Number): T[];
}