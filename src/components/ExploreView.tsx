import React, { useState } from 'react';
import { Search, Users, TrendingUp, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { generateMockGroups, generateMockPosts } from '../utils/mockData';
import { Group, Post } from '../types';

const ExploreView: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'groups' | 'posts'>('groups');
  const [groups] = useState<Group[]>(generateMockGroups(12));
  const [posts] = useState<Post[]>(generateMockPosts(8));

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white p-6 rounded-xl shadow-lg"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Explore & Connect</h1>
        
        <div className="flex space-x-4 mb-6">
          <button
            onClick={() => setActiveTab('groups')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'groups'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Groups
          </button>
          <button
            onClick={() => setActiveTab('posts')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'posts'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            Posts
          </button>
        </div>

        <div className="relative">
          <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder={`Search ${activeTab}...`}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </motion.div>

      {activeTab === 'groups' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={group.image}
                alt={group.name}
                className="w-full h-32 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{group.name}</h3>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                    {group.category}
                  </span>
                </div>
                <p className="text-gray-600 text-sm mb-3">{group.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-gray-500 text-sm">
                    <Users size={16} className="mr-1" />
                    {group.memberCount.toLocaleString()} members
                  </div>
                  <button
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      group.isJoined
                        ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        : 'bg-indigo-600 text-white hover:bg-indigo-700'
                    }`}
                  >
                    {group.isJoined ? 'Joined' : 'Join'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {activeTab === 'posts' && (
        <div className="space-y-6">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{post.author.name}</h3>
                    <p className="text-sm text-gray-500">{post.author.country}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {post.topic}
                  </span>
                  <span className="text-sm text-gray-500">
                    {post.timestamp.toLocaleDateString()}
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{post.content}</p>

              {post.images && (
                <div className="mb-4">
                  <img
                    src={post.images[0]}
                    alt="Post content"
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>
              )}

              <div className="flex items-center space-x-6 text-gray-500">
                <button
                  className={`flex items-center space-x-1 hover:text-red-500 transition-colors ${
                    post.isLiked ? 'text-red-500' : ''
                  }`}
                >
                  <TrendingUp size={16} />
                  <span>{post.likes}</span>
                </button>
                <button className="flex items-center space-x-1 hover:text-blue-500 transition-colors">
                  <Calendar size={16} />
                  <span>{post.comments}</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExploreView;
