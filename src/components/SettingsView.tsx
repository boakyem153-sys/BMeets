import React, { useState } from 'react';
import { Shield, Bell, Globe, Users, Eye, Heart, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const SettingsView: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [autoTranslate, setAutoTranslate] = useState(false);
  const [onlineStatus, setOnlineStatus] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState('public');

  const settingSections = [
    {
      title: 'Privacy & Safety',
      icon: Shield,
      settings: [
        {
          name: 'Profile Visibility',
          description: 'Who can see your profile',
          type: 'select',
          value: profileVisibility,
          onChange: setProfileVisibility,
          options: [
            { value: 'public', label: 'Everyone' },
            { value: 'matches', label: 'Matches Only' },
            { value: 'private', label: 'Private' }
          ]
        },
        {
          name: 'Show Online Status',
          description: 'Let others see when you\'re online',
          type: 'toggle',
          value: onlineStatus,
          onChange: setOnlineStatus
        }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      settings: [
        {
          name: 'Push Notifications',
          description: 'Receive notifications about messages and matches',
          type: 'toggle',
          value: notifications,
          onChange: setNotifications
        }
      ]
    },
    {
      title: 'Language & Translation',
      icon: Globe,
      settings: [
        {
          name: 'Auto-translate Messages',
          description: 'Automatically translate messages from other languages',
          type: 'toggle',
          value: autoTranslate,
          onChange: setAutoTranslate
        }
      ]
    }
  ];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
        <p className="text-gray-600">Manage your account preferences and privacy settings</p>
      </motion.div>

      {settingSections.map((section, sectionIndex) => (
        <motion.div
          key={section.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: sectionIndex * 0.1 }}
          className="bg-white rounded-xl shadow-lg p-6"
        >
          <div className="flex items-center space-x-2 mb-6">
            <section.icon size={20} className="text-indigo-600" />
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
          </div>

          <div className="space-y-4">
            {section.settings.map((setting, index) => (
              <div key={index} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
                <div className="flex-1">
                  <h3 className="font-medium text-gray-900">{setting.name}</h3>
                  <p className="text-sm text-gray-600">{setting.description}</p>
                </div>
                <div className="ml-4">
                  {setting.type === 'toggle' && (
                    <button
                      onClick={() => setting.onChange(!setting.value)}
                      className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                        setting.value ? 'bg-indigo-600' : 'bg-gray-200'
                      }`}
                    >
                      <span
                        className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                          setting.value ? 'translate-x-6' : 'translate-x-1'
                        }`}
                      />
                    </button>
                  )}
                  {setting.type === 'select' && setting.options && (
                    <select
                      value={setting.value}
                      onChange={(e) => setting.onChange(e.target.value)}
                      className="border border-gray-300 rounded-lg px-3 py-1 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    >
                      {setting.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Account Verification */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-6">
          <Eye size={20} className="text-green-600" />
          <h2 className="text-xl font-semibold text-gray-900">Account Verification</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
            <div>
              <h3 className="font-medium text-green-900">Phone Verification</h3>
              <p className="text-sm text-green-700">Your phone number is verified</p>
            </div>
            <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <Shield size={16} className="text-white" />
            </div>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
            <div>
              <h3 className="font-medium text-yellow-900">Photo Verification</h3>
              <p className="text-sm text-yellow-700">Verify your identity with a photo</p>
            </div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors">
              Verify
            </button>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
            <div>
              <h3 className="font-medium text-blue-900">Video Introduction</h3>
              <p className="text-sm text-blue-700">Record a short video intro</p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Record
            </button>
          </div>
        </div>
      </motion.div>

      {/* Support & Safety */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="bg-white rounded-xl shadow-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-6">
          <AlertTriangle size={20} className="text-red-600" />
          <h2 className="text-xl font-semibold text-gray-900">Support & Safety</h2>
        </div>
        
        <div className="space-y-3">
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <h3 className="font-medium text-gray-900">Report a User</h3>
            <p className="text-sm text-gray-600">Report inappropriate behavior</p>
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <h3 className="font-medium text-gray-900">Safety Guidelines</h3>
            <p className="text-sm text-gray-600">Learn about staying safe on BMeet</p>
          </button>
          <button className="w-full text-left p-3 hover:bg-gray-50 rounded-lg transition-colors">
            <h3 className="font-medium text-gray-900">Contact Support</h3>
            <p className="text-sm text-gray-600">Get help with your account</p>
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default SettingsView;
