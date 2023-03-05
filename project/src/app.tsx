import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { NotificationManager } from '@alfalab/core-components/notification-manager';
import { Notification } from '@alfalab/core-components/notification';
import { notificationsActions, notificationsSelector } from './store/notifications';
import { useAppDispatch, useAppSelector } from './store';
import { TNotification } from './types';
import './app.module.css'

export const App = () => {
  const dispatch = useAppDispatch()
  const { notifications } = useAppSelector(notificationsSelector);

  const notificationElementConverter = (notification: TNotification) =>
  (<Notification
    badge='positive'
    title={notification.title}
    autoCloseDelay={4000}
    id={notification.id!.toString()}
    key={notification.id!.toString()}
  />)

  const removeNotification = (id: string) => {
    dispatch(notificationsActions.removeNotification(Number(id)))
  };

  return (<>
    <RouterProvider router={router} />
    <NotificationManager
      notifications={notifications.map(notificationElementConverter)}
      onRemoveNotification={removeNotification}
    />
  </>);
}
