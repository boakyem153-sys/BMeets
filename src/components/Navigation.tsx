import React from 'react';
import { Home, Users, MessageCircle, Globe, User, Settings } from 'lucide-react';
import clsx from 'clsx';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'matches', icon: Users, label: 'Matches' },
    { id: 'chat', icon: MessageCircle, label: 'Chat' },
    { id: 'explore', icon: Globe, label: 'Explore' },
    { id: 'profile', icon: User, label: 'Profile' },
    { id: 'settings', icon: Settings, label: 'Settings' }
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-2 md:relative md:border-t-0 md:border-r md:w-64 md:h-screen md:py-4">
      <div className="flex justify-around md:flex-col md:space-y-2">
        {navItems.map(({ id, icon: Icon, label }) => (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className={clsx(
              'flex flex-col md:flex-row items-center space-y-1 md:space-y-0 md:space-x-3 px-3 py-2 rounded-lg transition-colors',
              activeTab === id
                ? 'text-indigo-600 bg-indigo-50'
                : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
            )}
          >
            <Icon size={20} />
            <span className="text-xs md:text-sm font-medium">{label}</span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
