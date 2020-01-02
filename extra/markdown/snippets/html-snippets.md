# HTML snippets

## Form submit test service

Add this _action_ attribute to _form_ element:

``` html
<form action="https://echo.htmlacademy.ru">...</form>
```

## Image placeholder

Add this _src_ attribute to _img_ element:

``` html
<img src="https://via.placeholder.com/200x150">
```

This code adds placeholding image with width of 200px and height of 150px.

## `<meta>` viewport

### Viewport

``` html
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
```

### Do not transform phone numbers to links

Android, Apple:

``` html
<meta name="format-detection" content="telephone=no">
```

BlackBerry:

``` html
<meta http-equiv="x-rim-auto-match" content="none">
```

### Font preloading

``` html
<link rel="preload" href="fonts/***.woff2" as="font">
```
