import * as React from 'react';
import type { ScrollView } from 'react-native';
declare type ScrollOptions = {
    x?: number;
    y?: number;
    animated?: boolean;
};
declare type ScrollableView = {
    scrollToTop(): void;
} | {
    scrollTo(options: ScrollOptions): void;
} | {
    scrollToOffset(options: {
        offset?: number;
        animated?: boolean;
    }): void;
} | {
    scrollResponderScrollTo(options: ScrollOptions): void;
};
declare type ScrollableWrapper = {
    getScrollResponder(): React.ReactNode | ScrollView;
} | {
    getNode(): ScrollableView;
} | ScrollableView;
export default function useScrollToTop(ref: React.RefObject<ScrollableWrapper>): void;
export {};
//# sourceMappingURL=useScrollToTop.d.ts.map