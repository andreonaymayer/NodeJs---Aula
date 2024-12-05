import {RoupaRepository} from "./repository.js";

export class ClubesService {
    async getClubes() {
        let roupaRepository = new RoupaRepository();
        return roupaRepository.findAll();
    }
}
