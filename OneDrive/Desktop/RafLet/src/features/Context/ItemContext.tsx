import * as React from 'react';
import { IContext, ProviderProps, ItemDispatch } from '../../@types/context';
import { ItemType } from '../../@types/item';
import ItemReducer from '../../utils/functions/ItemReducer';
import { GetItems } from '../../utils/functions/GetItems';

const ItemContext = React.createContext<IContext | undefined>(undefined);
const ItemDispatchContext = React.createContext<unknown>(null);

const ItemProvider : React.FC<ProviderProps> = ({ children }) => {
    const [items, dispatch]: [tasks: ItemType[], action: React.Dispatch<ItemDispatch>]= React.useReducer(ItemReducer, []);
    const [oneItem, setOneItem] : [oneItem: boolean, setOneItem:  React.Dispatch<React.SetStateAction<boolean>>] = React.useState<boolean>(false);
    
    // const userToken = "";
    React.useLayoutEffect( () => {
        setTimeout( () => {
            GetItems(/*userToken*/).then(data => {
                dispatch({type: 'items', items: data});
            }).catch(() => {
                throw new Error("Nu s-au putut incarca datele!");
            })
        }, 500)
    }, [])

    const handleSetOneItem = () => {
        setOneItem(!oneItem);
    }

    return (
        <ItemContext.Provider value={{ items, oneItem, handleSetOneItem }}>
            <ItemDispatchContext.Provider value={dispatch}>
                {children}
            </ItemDispatchContext.Provider>
        </ItemContext.Provider>
    );
};

export { ItemContext, ItemProvider, ItemDispatchContext };
