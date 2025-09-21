import React from 'react';
import { MapPin, Clock, Languages, Heart, MessageCircle, CheckCircle } from 'lucide-react';
import { User } from '../types';
import { motion } from 'framer-motion';

interface UserCardProps {
  user: User;
  compatibility?: number;
  sharedInterests?: string[];
  onMessage?: () => void;
  onLike?: () => void;
}

const UserCard: React.FC<UserCardProps> = ({ 
  user, 
  compatibility, 
  sharedInterests, 
  onMessage, 
  onLike 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
    >
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-3 right-3 flex items-center space-x-2">
          {user.isVerified && (
            <div className="bg-blue-500 text-white p-1 rounded-full">
              <CheckCircle size={16} />
            </div>
          )}
          <div className={`w-3 h-3 rounded-full ${user.isOnline ? 'bg-green-400' : 'bg-gray-400'}`} />
        </div>
        {compatibility && (
          <div className="absolute top-3 left-3 bg-indigo-600 text-white px-2 py-1 rounded-full text-sm font-medium">
            {compatibility}% match
          </div>
        )}
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900">{user.name}, {user.age}</h3>
          <span className="text-sm text-gray-500">{user.isOnline ? 'Online' : 'Offline'}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-2">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{user.city}, {user.country}</span>
        </div>

        <div className="flex items-center text-gray-600 mb-3">
          <Languages size={16} className="mr-1" />
          <span className="text-sm">{user.languages.join(', ')}</span>
        </div>

        {sharedInterests && sharedInterests.length > 0 && (
          <div className="mb-3">
            <p className="text-sm text-gray-600 mb-1">Shared interests:</p>
            <div className="flex flex-wrap gap-1">
              {sharedInterests.map((interest, index) => (
                <span
                  key={index}
                  className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        )}

        <p className="text-gray-600 text-sm mb-4 line-clamp-2">{user.bio}</p>

        {(onMessage || onLike) && (
          <div className="flex space-x-2">
            {onLike && (
              <button
                onClick={onLike}
                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <Heart size={16} className="mr-1" />
                Like
              </button>
            )}
            {onMessage && (
              <button
                onClick={onMessage}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
              >
                <MessageCircle size={16} className="mr-1" />
                Message
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default UserCard;
