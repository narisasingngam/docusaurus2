---
id: part2
title: Markdown Features
sidebar_label: Markdown :)
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
description: How do I find you when I cannot solve this problem
keywords:
  - docs
  - docusaurus
image: https://i.imgur.com/mErPwqL.png
---

### TAB

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs
  defaultValue="apple"
  values={[
    {label: 'Apple', value: 'apple'},
    {label: 'Orange', value: 'orange'},
    {label: 'Banana', value: 'banana'},
  ]}>
  <TabItem value="apple">This is an apple 🍎</TabItem>
  <TabItem value="orange">This is an orange 🍊</TabItem>
  <TabItem value="banana">This is a banana 🍌</TabItem>
</Tabs>

### CODE BOX

```jsx title="/src/components/HelloCodeTitle.js"
function HelloCodeTitle(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

### Callouts/admonitions

:::note
The content and title *can* include markdown.
:::

:::tip You can specify an optional title
Heads up! Here's a pro-tip.
:::

:::info
Useful information.
:::

:::caution
Warning! You better pay attention!
:::

:::danger
Danger danger, mayday!
:::

### Line highlighting

```jsx {3}
function HighlightSomeText(highlight) {
  if (highlight) {
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}
```

#### highlight multiple lines

```jsx
function HighlightSomeText(highlight) {
  if (highlight) {
    // highlight-next-line
    return 'This text is highlighted!';
  }

  return 'Nothing highlighted';
}

function HighlightMoreText(highlight) {
  // highlight-start
  if (highlight) {
    return 'This range is highlighted!';
  }
  // highlight-end

  return 'Nothing highlighted';
}
```

### Interactive code editor

- (Powered by React Live [React Live](https://github.com/FormidableLabs/react-live))

```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```
