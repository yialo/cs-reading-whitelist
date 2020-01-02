# CSS snippets

## Vendor selectors for input[type="range"] custom decorating

``` css
/* Range */

input[type=range] {-webkit-appearance: none;}

/* Track */

::-webkit-slider-runnable-track {}
::-moz-range-track {}
::-ms-track {}
::-ms-fill-lower {}
::-ms-fill-upper {}

/* Thumb */

::-webkit-slider-thumb {-webkit-appearance: none;}
::-moz-range-thumb {}
::-ms-thumb {}

/* Tooltip */

::-ms-tooltip {}
```

## Add focus state default outline (Chromium, Mozilla)

``` css
.some-block {
  /* For Gecko */
  outline: thin dotted;
  /* For Webkit/Blink */
  outline: 5px auto -webkit-focus-ring-color;
}
```

## Vendor selectors for custom scrollbar decorating

``` css
/* Width */
::-webkit-scrollbar {}

/* Track */
::-webkit-scrollbar-track {}

/* Handle */
::-webkit-scrollbar-thumb {}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {}
```

## IE11 / MS Edge button click jumping fix

``` css
.button {
  position: relative;
  top: 0;
  left: 0;
}
```
