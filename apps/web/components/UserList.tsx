'use client'

import { useState } from 'react';
import { trpc } from '../utils/trpc';

export default function UserList() {
  const { data: users, refetch } = trpc.getUsers.useQuery();
  const updateUser = trpc.updateUser.useMutation();
  const updateWallet = trpc.updateWallet.useMutation();

  const handleToggleActive = async (userId: string, isActive: boolean) => {
    await updateUser.mutateAsync({ id: userId, isActive: !isActive });
    refetch();
  };

  const handleToggleFrozen = async (walletId: string, isFrozen: boolean) => {
    await updateWallet.mutateAsync({ id: walletId, isFrozen: !isFrozen });
    refetch();
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Users</h2>
      <table className="min-w-full">
        <thead>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Active</th>
            <th>Wallet Frozen</th>
            <th>Wallet Frozen</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user) => (
            <tr key={user.id}>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.isActive ? 'Yes' : 'No'}</td>
              <td>{user.wallet?.isFrozen ? 'Yes' : 'No'}</td>
              <td>
                <button
                  onClick={() => handleToggleActive(user.id, user.isActive)}
                  className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                >
                  {user.isActive ? 'Deactivate' : 'Activate'}
                </button>
                <button
                  onClick={() => handleToggleFrozen(user.wallet?.id, user.wallet?.isFrozen)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  {user.wallet?.isFrozen ? 'Unfreeze Wallet' : 'Freeze Wallet'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

