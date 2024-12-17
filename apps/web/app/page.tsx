
import UserList from '../components/UserList';
import { trpc } from '../utils/trpc';


export default function AdminPanel() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Wallet Admin Panel</h1>
      <UserList />
    </div>
  );
}

