const range = (x: number, y: number) => {
    return Array.from({ length: y - x + 1 }, (_, k) => k + x);
};

export const returnPaginationRange = (totalpage: number, page: number, Siblings: number) => {
    const totalPageInArray: number = 7 + Siblings;
    if (totalPageInArray >= totalpage) {
        return range(1, totalpage);
    }

    const leftSiblingIndex: number = Math.max(page - Siblings, 1);
    const rightSiblingIndex: number = Math.min(page + Siblings, totalpage);

    const showLeftDots: boolean = leftSiblingIndex > 2;
    const showRightDots: boolean = rightSiblingIndex < totalpage - 2;

    if (!showLeftDots && showRightDots) {
        const leftItemsCount: number = 3 + 2 * Siblings;
        const leftRange = range(1, leftItemsCount);
        return [...leftRange, "...", totalpage];
    } else if (showLeftDots && !showRightDots) {
        const rightItemsCount: number = 3 + 2 * Siblings;
        const rightRange = range(totalpage - rightItemsCount + 1, totalpage);
        return [1, "...", ...rightRange];
    } else if (showLeftDots && showRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex);
        return [1, "...", ...middleRange, "...", totalpage];
    }

    return range(1, totalpage); // default fallback
}
