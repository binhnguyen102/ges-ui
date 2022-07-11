export default type => {
    switch (type) {
        case 'rest':
            return import('./rest').then(factory => factory.default());
        default:
            return import('./rest').then(provider => provider.default);
    }
};
