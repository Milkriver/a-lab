import { RouterProvider} from 'react-router-dom';
import { router } from './routes';
import './app.module.css'


export const App = () => {
  return (<RouterProvider router={router}/>);
}
