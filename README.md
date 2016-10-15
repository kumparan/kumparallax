# kumparallax
React component to perform a parallax header.

This component is a wrapper of https://github.com/GoogleChrome/ui-element-samples/tree/gh-pages/parallax with some changes to fit Kumparan application's need.

The component is made to be as reusable as possible. There are three props that can be passed to the component:

1. <b>parallaxImage</b>: the source of parallax image url
2. <b>parallaxHeader</b>: the element that will overlay the parallax. The parallax element will suit the height of this element. By default, the parallax height is 400px.
3. <b>parallaxContent</b>: the scrollable element next to the parallax.
