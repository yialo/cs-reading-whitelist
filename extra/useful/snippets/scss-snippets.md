# SCSS snippets

```scss
.visuallyHidden {
  @at-root {
    &:not(:active),
    &:not(:focus),
    input[type="checkbox"]#{&},
    input[type="radio"]#{&} {
      appearance: none;
      margin: -1px;
      width: 1px;
      height: 1px;
      overflow: hidden;
      border-style: none;
      padding: 0;
      white-space: nowrap;
      clip: rect(0 0 0 0);
      clip-path: inset(100%);
    }
  }
}
```
