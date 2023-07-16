---
title: '$truncate'
description: '$truncate will remove all values after a decimal point.'
id: truncate
---

`$truncate` will remove all values after a decimal point.

## الاستخدام

```php
$truncate[number]
```

## البارامترات

| Field  | النوع  | الديسكبربشين        | مطلوب |
| ------ | ------ | ------------------- |:-----:|
| number | number | Number to truncate. | true  |

## مثال

This will return `775` and remove `.9723` from the given value:

```javascript
bot.command({
    name: 'truncate',
    code: `
  $truncate[775.9723]
  `
});
```