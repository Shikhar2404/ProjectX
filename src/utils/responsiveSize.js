import { Dimensions, PixelRatio } from 'react-native'

export const { width, height } = Dimensions.get('window')
const screenWidth = width < height ? width : height

export const responsiveSize = size => {
  const responsiveValue = screenWidth / 480
  return responsiveValue * size
}

const sizeFactor = 1.25

export const respFontSize = size =>
  responsiveSize(size * sizeFactor) / PixelRatio.getFontScale()
