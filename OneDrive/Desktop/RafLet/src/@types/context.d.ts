import { ItemType } from "./item";

export interface IContext {
    oneItem : boolean;
    handleSetOneItem :() => void;
    items: ItemType[];
}


export interface ProviderProps { 
    children: ReactNode; 
}

export type ItemDispatch =  | { item: ItemType; type: 'add' }
                            | { id: string; type: 'delete'}
                            | { items: ItemType[] | undefined; type: 'items'}