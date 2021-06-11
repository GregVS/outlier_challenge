module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                'module-resolver',
                {
                    root: ['./src', './node_modules'],
                },
            ],
            'react-native-reanimated/plugin',
        ],
    };
};
