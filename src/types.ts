export interface IPokemon {
    abilities: IAbility[];
    game_indices: IGameIndex[];
    height: number;
    id: number;
    name: string;
    sprites: ISprite;
    stats: IStat[];
    types: IType[];
    weight: number;
}

interface IAbility {
    ability: {
        name: string;
        url: string;
    };
}

interface IType {
    slot: number;
    type: {
        name: "normal" | "fire";
    };
}

interface IGameIndex {
    version: {
        name: string;
    };
}

interface ISprite {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
}

interface IStat {
    base_stat: number;
    stat: {
        name: string;
    };
}
