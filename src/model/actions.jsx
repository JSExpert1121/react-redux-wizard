
export const navigationGoNext = (lvlId) => ({
    type: 'GO_NEXT',
    toId: lvlId,
});

export const navigationGoPrev = () => ({
    type: 'GO_PREV'
});

export const navigationReset = () => ({
    type: 'RESET'
});
