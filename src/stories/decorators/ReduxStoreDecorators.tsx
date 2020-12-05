import {Provider} from "react-redux";
import store from "../../p2-homeworks/h10/bll/store";
import React from "react";

export const ReduxStoreDecorator = (storyFn: any) => {
    return <Provider store={store}>
        {storyFn()}
    </Provider>
}