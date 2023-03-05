import { TNotification } from './../../types';
import { createSlice, CaseReducer, PayloadAction } from "@reduxjs/toolkit"

type NotificationsStateType = {
    notifications: TNotification[],
    notificationCounter: number,
}

const initialState: NotificationsStateType = {
    notifications: [],
    notificationCounter: 0,
}

const NAME = 'notifications';

const addNotification: CaseReducer<NotificationsStateType, PayloadAction<TNotification>> = (state, { payload }) => {
    const notifications = state.notifications.slice();
    const notification = {
        id: state.notificationCounter,
        title: payload.title,
        badge: payload.badge
    }
    notifications.push(notification)
    state.notifications = notifications
    state.notificationCounter += 1;
}

const removeNotification: CaseReducer<NotificationsStateType, PayloadAction<number>> = (state, { payload }) => {
    const updatedNotifications = state.notifications.filter(x => x.id !== payload);
    state.notifications = updatedNotifications
}

export const { actions: notificationsActions, reducer: notificationsReducer } = createSlice({
    name: NAME,
    initialState,
    reducers: {
        addNotification,
        removeNotification,
    }
})
