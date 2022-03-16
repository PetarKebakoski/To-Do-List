import { Guid } from "guid-typescript";

export class ToDo {
    constructor(
        public id: Guid,
        public title: string,
        public isComplete: boolean,
    ){

    }
}