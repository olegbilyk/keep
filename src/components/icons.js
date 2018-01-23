import React from 'react'
import PropTypes from 'prop-types'

export function IconFollower (props) {
  const {className = '', iconTitle = 'Followers', width = 12, height = 14, fill = '#000'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 12 14' aria-label={iconTitle}>
      <path fill={fill} d='M.5 11.712c.372-.286.894-.517 1.465-.77.868-.385 1.948-.864 1.948-1.432v-.773c-.308-.254-.829-.802-.91-1.625-.25-.232-.663-.706-.663-1.291 0-.356.143-.643.268-.825-.077-.382-.22-1.18-.22-1.766C2.388 1.268 3.77 0 5.909 0c.614 0 1.36.163 1.775.602.97.17 1.747 1.304 1.747 2.628 0 .85-.15 1.549-.242 1.894.101.17.21.42.21.712a1.58 1.58 0 0 1-.65 1.312 2.463 2.463 0 0 1-.842 1.584v.778c0 .483.885.807 1.741 1.121.64.235 1.39.587 1.852.954C11.195 11.794 9.212 14 5.91 14S.872 12.064.5 11.712z' />
    </svg>
  )
}

IconFollower.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconRetweet (props) {
  const {className = '', iconTitle = 'Retweets', width = 18, height = 10, fill = '#000'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 18 10' aria-label={iconTitle}>
      <path fill={fill} d='M3.503 4.088L1.674 5.917.26 4.503 4.503.26l4.242 4.243-1.414 1.414-1.828-1.829v2.42c0 .539.448.995 1.002.995h2.998l2 2H5.51c-1.11 0-2.008-.9-2.008-1.992V4.088zm11 1.829l1.828-1.829 1.414 1.415-4.242 4.242L9.26 5.503l1.414-1.415 1.829 1.829V3.498c0-.54-.45-.995-1.003-.995H8.503l-2-2h5.991c1.11 0 2.009.9 2.009 1.992v3.422z' />
    </svg>
  )
}

IconRetweet.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconLikeHeart (props) {
  const {className = '', iconTitle = 'Likes', width = 12, height = 11, fill = '#000'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 12 11' aria-label={iconTitle}>
      <path fill={fill} d='M6 11l-.208-.178C1.234 6.924 0 5.552 0 3.323 0 1.491 1.42 0 3.165 0 4.623 0 5.447.87 6 1.524 6.553.87 7.377 0 8.835 0 10.58 0 12 1.49 12 3.323c0 2.23-1.234 3.601-5.792 7.5L6 11z' />
    </svg>
  )
}

IconLikeHeart.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconComment (props) {
  const {className = '', iconTitle = 'Comments', width = 12, height = 11, fill = '#000'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 12 11' aria-label={iconTitle}>
      <path fill={fill} d='M2.454 11h-.642l.378-.505c.286-.382.473-.869.569-1.483C.977 8.236 0 6.752 0 4.809 0 1.843 2.3 0 6 0s6 1.843 6 4.809c0 3.011-2.243 4.81-6 4.81-.084 0-.166-.003-.249-.006C5.188 10.274 4.177 11 2.454 11z' />
    </svg>
  )
}

IconComment.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconClose (props) {
  const {className = '', iconTitle = 'Close', width = 16, height = 16, fill = '#000'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 16 16' aria-label={iconTitle}>
      <path fill={fill} d='M12 11.293l7-7 .707.707-7 7 7 7-.707.707-7-7-7 7L4.293 19l7-7-7-7L5 4.293l7 7z' transform='translate(-4 -4)' />
    </svg>
  )
}

IconClose.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconSquareFacebook (props) {
  const {className = '', iconTitle = 'Facebook', width = 10, height = 10} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 10 10' aria-label={iconTitle}>
      <path fill='#4760a5' d='M0 0h10v10H0z' />
      <path fill='#fff' d='M5.5 4v-.595c0-.269.06-.405.477-.405H6.5V2h-.8c-1 0-1.4.667-1.4 1.4V4h-.8v1h.8v3h1.2V5h.881L6.5 4h-1' />
    </svg>
  )
}

IconSquareFacebook.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export function IconSquareTwitter (props) {
  const {className = '', iconTitle = 'Twitter', width = 10, height = 10} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 10 10' aria-label={iconTitle}>
      <path fill='#50abf1' d='M0 0h10v10H0z' />
      <path
        fill='#fff'
        d='M8.873 2.711c-.271.12-.562.202-.868.239.312-.188.553-.485.665-.838-.292.174-.615.3-.96.368a1.51 1.51 0 0 0-2.618 1.034c0 .119.013.235.04.346a4.287 4.287 0 0 1-3.12-1.583 1.514 1.514 0 0 0 .47 2.021 1.476 1.476 0 0 1-.687-.189v.02c0 .734.522 1.345 1.214 1.484a1.526 1.526 0 0 1-.683.024A1.515 1.515 0 0 0 3.741 6.69a3.034 3.034 0 0 1-2.241.627A4.23 4.23 0 0 0 3.816 8C6.6 8 8.123 5.692 8.123 3.69a4.19 4.19 0 0 0-.005-.195 3.08 3.08 0 0 0 .755-.784' />
    </svg>
  )
}

IconSquareTwitter.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export function IconSquareGoogle (props) {
  const {className = '', iconTitle = 'Facebook', width = 10, height = 10} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 10 10' aria-label={iconTitle}>
      <path fill='#dd5241' d='M0 0h10v10H0z' />
      <path
        fill='#fff'
        d='M3.545 4.682H5.95c.022.127.04.254.04.422 0 1.454-.974 2.487-2.444 2.487A2.544 2.544 0 0 1 1 5.045 2.544 2.544 0 0 1 3.545 2.5c.688 0 1.262.25 1.706.665l-.691.666a1.432 1.432 0 0 0-1.015-.393c-.869 0-1.578.72-1.578 1.607 0 .888.71 1.608 1.578 1.608 1.008 0 1.386-.724 1.444-1.098H3.545v-.873zm5.455 0v.727h-.727v.727h-.728V5.41h-.727v-.727h.727v-.727h.728v.727H9z' />
    </svg>
  )
}

IconSquareGoogle.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export function IconSquareInstagram (props) {
  const {className = '', iconTitle = 'Instagram', width = 10, height = 10} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 10 10' aria-label={iconTitle}>
      <defs>
        <linearGradient x1='0%' y1='100%' y2='0%' id='a'>
          <stop stopColor='#ffbc00' offset='0%' />
          <stop stopColor='#ff00ec' offset='100%' />
        </linearGradient>
      </defs>
      <g fill='none'>
        <path fill='url(#a)' d='M0 0h10v10H0z' />
        <rect stroke='#fff' strokeWidth='.5' x='2.25' y='2.25' width='5.5' height='5.5' rx='1.5' />
        <rect stroke='#fff' strokeWidth='.5' x='3.75' y='3.75' width='2.5' height='2.5' rx='1.25' />
        <rect fill='#fff' x='6.5' y='3' width='1' height='1' rx='.5' />
      </g>
    </svg>
  )
}

IconSquareInstagram.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number
}

export function IconFacebook (props) {
  const {className = '', iconTitle = 'Facebook', width = 17, height = 20, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 17 20' aria-label={iconTitle}>
      <path fill={fill} d='M10.833 7.833v-.992c0-.448.1-.674.795-.674h.872V4.5h-1.333C9.5 4.5 8.833 5.612 8.833 6.833v1H7.5V9.5h1.333v5h2v-5h1.469l.198-1.667h-1.667' />
    </svg>
  )
}

IconFacebook.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconTwitter (props) {
  const {className = '', iconTitle = 'Twitter', width = 17, height = 20, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 17 20' aria-label={iconTitle}>
      <path fill={fill} d='M16.29 6.185c-.454.2-.938.336-1.449.398a2.53 2.53 0 0 0 1.11-1.396 5.01 5.01 0 0 1-1.602.613 2.522 2.522 0 0 0-4.297 2.3 7.145 7.145 0 0 1-5.198-2.64 2.524 2.524 0 0 0 .784 3.37 2.46 2.46 0 0 1-1.146-.315v.032c0 1.224.87 2.242 2.023 2.474a2.544 2.544 0 0 1-1.137.041 2.526 2.526 0 0 0 2.357 1.753A5.056 5.056 0 0 1 4 13.86 7.049 7.049 0 0 0 7.86 15c4.642 0 7.18-3.846 7.18-7.183 0-.109-.004-.218-.009-.325.492-.357.92-.8 1.258-1.307' />
    </svg>
  )
}

IconTwitter.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconGoogle (props) {
  const {className = '', iconTitle = 'Google', width = 17, height = 20, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 17 20' aria-label={iconTitle}>
      <path fill={fill} d='M7.455 9.318h4.206c.038.223.07.446.07.738 0 2.546-1.706 4.353-4.276 4.353A4.451 4.451 0 0 1 3 9.955 4.451 4.451 0 0 1 7.455 5.5a4.27 4.27 0 0 1 2.984 1.165L9.23 7.829c-.33-.318-.91-.687-1.775-.687-1.521 0-2.762 1.26-2.762 2.813 0 1.552 1.24 2.812 2.762 2.812 1.762 0 2.424-1.266 2.526-1.922H7.455V9.318zm9.545 0v1.273h-1.273v1.273h-1.272V10.59h-1.273V9.318h1.273V8.045h1.272v1.273H17z' />
    </svg>
  )
}

IconGoogle.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconInstagram (props) {
  const {className = '', iconTitle = 'Instagram', width = 17, height = 20, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 17 20' aria-label={iconTitle}>
      <g fill='none'>
        <rect stroke={fill} strokeWidth='1.5' x='4.75' y='4.75' width='10.5' height='10.5' rx='3' />
        <rect stroke={fill} strokeWidth='1.5' x='7.75' y='7.75' width='4.5' height='4.5' rx='2.25' />
        <rect fill={fill} x='12' y='6' width='2' height='2' rx='1' />
      </g>
    </svg>
  )
}

IconInstagram.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconYoutube (props) {
  const {className = '', iconTitle = 'Youtube', width = 17, height = 20, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 17 20' aria-label={iconTitle}>
      <path fill={fill} d='M14.9 8.017s-.098-.689-.397-.992c-.38-.399-.807-.4-1.002-.424-1.4-.101-3.499-.101-3.499-.101h-.004s-2.1 0-3.499.101c-.195.023-.621.025-1.002.424-.3.303-.397.992-.397.992s-.1.81-.1 1.619v.725c0 .81.1 1.618.1 1.618s.098.69.397.993c.38.398.88.386 1.103.428.8.076 3.4.1 3.4.1s2.101-.003 3.5-.104c.196-.024.622-.026 1.003-.424.3-.303.397-.993.397-.993s.1-.809.1-1.618v-.725c0-.81-.1-1.619-.1-1.619zm-5.932 3.297l-.001-2.81 2.702 1.41-2.701 1.4z' />
    </svg>
  )
}

IconYoutube.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconPlus (props) {
  const {className = '', iconTitle = 'Plus', width = 24, height = 24, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 24 24' aria-label={iconTitle}>
      <path fill={fill} d='M11 11V6h2v5h5v2h-5v5h-2v-5H6v-2h5z' />
    </svg>
  )
}

IconPlus.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconCheck (props) {
  const {className = '', iconTitle = 'Icon Check', width = 24, height = 24, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 614 614' aria-label={iconTitle}>
      <path fill={fill} d='M589.105 80.63c-30.513-31.125-79.965-31.125-110.478 0L202.422 362.344l-69.061-70.438c-30.513-31.125-79.965-31.125-110.478 0-30.513 31.125-30.513 81.572 0 112.678l124.29 126.776c30.513 31.125 79.965 31.125 110.478 0l331.453-338.033c30.515-31.125 30.515-81.572.001-112.697zM561.5 165.148S235.192 497.959 230.047 503.201c-15.247 15.553-39.982 15.553-55.249 0 0 0-125.074-127.581-125.457-128.002-14.099-15.629-13.697-39.963 1.147-55.114 15.247-15.553 39.983-15.553 55.249 0l96.666 98.598 303.848-309.874c15.247-15.553 39.982-15.553 55.249 0 15.248 15.553 15.248 40.786 0 56.339z' />
    </svg>
  )
}

IconCheck.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconEdit (props) {
  const {className = '', iconTitle = 'Icon Edit', width = 24, height = 24, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 530 530' aria-label={iconTitle}>
      <path fill={fill} d='M328.883 89.125l107.59 107.589-272.34 272.34L56.604 361.465l272.279-272.34zm189.23-25.948l-47.981-47.981c-18.543-18.543-48.653-18.543-67.259 0l-45.961 45.961 107.59 107.59 53.611-53.611c14.382-14.383 14.382-37.577 0-51.959zM.3 512.69c-1.958 8.812 5.998 16.708 14.811 14.565l119.891-29.069L27.473 390.597.3 512.69z' />
    </svg>
  )
}

IconEdit.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconLightbulb (props) {
  const {className = '', iconTitle = 'Icon Lightbulb', width = 24, height = 24, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 24 24' aria-label={iconTitle}>
      <path fill={fill} d='M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z' />
    </svg>
  )
}

IconLightbulb.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}

export function IconDelete (props) {
  const {className = '', iconTitle = 'Icon Delete', width = 24, height = 24, fill = '#2a2a2a'} = props

  return (
    <svg xmlns='http://www.w3.org/2000/svg' className={className} width={width} height={height} viewBox='0 0 24 24' aria-label={iconTitle}>
      <path fill={fill} d='m6 19c0 1.1 0.9 2 2 2h8c1.1 0 2-0.9 2-2v-12h-12v12zm13-15h-3.5l-1-1h-5l-1 1h-3.5v2h14v-2z' />
    </svg>
  )
}

IconDelete.propTypes = {
  className: PropTypes.string,
  iconTitle: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  fill: PropTypes.string
}
