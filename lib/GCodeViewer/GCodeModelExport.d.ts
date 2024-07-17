import React, { HTMLProps } from 'react';
import { GCodeViewerContentProps } from './Model';
import { UrlReaderOptions } from './gcode/reader';
export interface GCodeViewerProps extends Omit<HTMLProps<HTMLDivElement>, 'onError' | 'onProgress'>, Omit<GCodeViewerContentProps, 'reader'> {
    url: UrlReaderOptions['url'];
    reqOptions?: RequestInit;
    canvasId?: string;
    clip?: number;
}
declare const GCodeViewer: React.FC<GCodeViewerProps>;
export default GCodeViewer;
