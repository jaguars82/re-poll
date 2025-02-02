let
  isIos = false,
  isMobile = false

if (typeof navigator !== 'undefined' && typeof document !== 'undefined') {
  // Simple mobile device/tablet detection
  isIos = navigator.userAgent.match(/iphone|ipad|ipod/i) || (navigator.userAgent.indexOf('Mac') !== -1 && 'ontouchend' in document)
  isMobile = isIos || navigator.userAgent.match(/android/i)
}

// Mixin that adds `isMobile` and `isIos` data variables
export const IsMobile = {
  data() {
    return {
      isIos,
      isMobile
    }
  }
}