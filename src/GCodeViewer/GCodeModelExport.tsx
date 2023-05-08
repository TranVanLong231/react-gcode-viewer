import React, { HTMLProps, useMemo } from 'react'
import { Canvas } from '@react-three/fiber'
import GCodeModel, { GCodeViewerContentProps } from './Model'
import { BaseReader, UrlReader, UrlReaderOptions } from './gcode/reader'

export interface GCodeViewerProps extends
  Omit<HTMLProps<HTMLDivElement>, 'onError' | 'onProgress'>,
  Omit<GCodeViewerContentProps, 'reader'> {
  url: UrlReaderOptions['url']
  reqOptions?: RequestInit
  canvasId?: string
  clip?: number
}

const GCodeViewer: React.FC<GCodeViewerProps> = (
  {
    canvasId,
    children,
    url,
    showAxes,
    orbitControls,
    layerColor,
    topLayerColor,
    clip,
    visible,
    quality,
    floorProps,
    reqOptions,
    onProgress,
    onFinishLoading,
    onError,
    cameraInitialPosition,
    ...otherProps
  }
) => {
  const reader: BaseReader = useMemo(() => {
    return new UrlReader({ url, reqOptions })
  }, [url])
  const modelProps: GCodeViewerContentProps = {
    reader,
    cameraInitialPosition,
    visible,
    layerColor,
    topLayerColor,
    clip,
    quality,
    showAxes,
    orbitControls,
    floorProps,
    onProgress,
    onFinishLoading,
    onError
  }
  return (
    <GCodeModel {...modelProps} />
  )
}

export default GCodeViewer
