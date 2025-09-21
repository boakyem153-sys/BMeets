import React, { useState } from 'react';
import { Edit, MapPin, Languages, Heart, Camera, Shield, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateMockUser } from '../utils/mockData';

const ProfileView: React.FC = () => {
  const [user] = useState(generateMockUser());
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {/* Cover Photo */}
        <div className="h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
        
        {/* Profile Info */}
        <div className="px-6 pb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between -mt-16 mb-4">
            <div className="flex items-end space-x-4">
              <div className="relative">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-white object-cover"
                />
                <button className="absolute bottom-2 right-2 bg-indigo-600 text-white p-2 rounded-full hover:bg-indigo-700">
                  <Camera size={16} />
                </button>
              </div>
              <div className="pb-4">
                <div className="flex items-center space-x-2">
                  <h1 className="text-2xl font-bold text-gray-900">{user.name}, {user.age}</h1>
                  {user.isVerified && (
                    <Shield size={20} className="text-blue-500" />
                  )}
                </div>
                <div className="flex items-center text-gray-600 mt-1">
                  <MapPin size={16} className="mr-1" />
                  <span>{user.city}, {user.country}</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors flex items-center space-x-2 mt-4 md:mt-0"
            >
              <Edit size={16} />
              <span>{isEditing ? 'Save' : 'Edit Profile'}</span>
            </button>
          </div>

          <p className="text-gray-700 mb-6">{user.bio}</p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center">
              <p className="text-2xl font-bold text-indigo-600">142</p>
              <p className="text-gray-600 text-sm">Connections</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-green-600">28</p>
              <p className="text-gray-600 text-sm">Countries</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-purple-600">4.8</p>
              <p className="text-gray-600 text-sm">Rating</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Languages */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Languages size={20} className="text-indigo-600" />
          <h2 className="text-xl font-semibold text-gray-900">Languages</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {user.languages.map((language, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm"
            >
              {language}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Interests */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Heart size={20} className="text-red-500" />
          <h2 className="text-xl font-semibold text-gray-900">Interests</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {user.interests.map((interest, index) => (
            <span
              key={index}
              className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm"
            >
              {interest}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Cultural Information */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Cultural Background</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Traditions</h3>
            <div className="flex flex-wrap gap-2">
              {user.culturalInfo.traditions.map((tradition, index) => (
                <span
                  key={index}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {tradition}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-1">Favorite Food</h3>
            <p className="text-gray-600">{user.culturalInfo.favoriteFood}</p>
          </div>
          <div>
            <h3 className="font-medium text-gray-900 mb-2">Music Genres</h3>
            <div className="flex flex-wrap gap-2">
              {user.culturalInfo.musicGenres.map((genre, index) => (
                <span
                  key={index}
                  className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm"
                >
                  {genre}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Personality Traits */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Star size={20} className="text-yellow-500" />
          <h2 className="text-xl font-semibold text-gray-900">Personality</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {user.personalityTraits.map((trait, index) => (
            <span
              key={index}
              className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
            >
              {trait}
            </span>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileView;
