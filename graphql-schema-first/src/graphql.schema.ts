
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateCatInput {
    name: string;
    age?: Nullable<number>;
}

export interface Cat {
    id: string;
    name: string;
    age?: Nullable<number>;
}

export interface IQuery {
    cats(): Cat[] | Promise<Cat[]>;
    cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export interface IMutation {
    createCat(createCatInput: CreateCatInput): Cat | Promise<Cat>;
    removeCat(id: string): Nullable<boolean> | Promise<Nullable<boolean>>;
}

type Nullable<T> = T | null;
