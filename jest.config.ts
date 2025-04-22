import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'jest-expo',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-clone-referenced-element|@react-navigation|expo(nent)?|@expo(nent)?|unimodules|sentry-expo|native-base|@codler/react-native-keyboard-aware-scroll-view|expo-modules-core)/)',
  ],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/tests/**/*.test.(ts|tsx|js)'],
}

export default config
