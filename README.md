# React Apps Menu

## Usage

Import your icon components, and the AppsMenu component

```javascript
// import the top-level AppsMenu directory for a cleaner import
import AppsMenu from 'path/to/AppsMenu'
import { MdHome, MdDescription } from 'react-icons/md'
```

Build an array of objects for your menu

```javascript
const apps = [
    {
        icon: MdHome,
        text: "Home",
        link: "http://home.example.com/",
    },
    {
        icon: MdDescription,
        text: "Documents",
        link: "http://documents.example.com",
    }
]
```

And pass it to the ```apps``` prop when rendering or returning your JSX

```jsx
<AppsMenu display="fixed" apps={apps} />
```

## Props

| property   |      type      |  description |
|------------:|-------------:|------:|
| apps | array[object]  | array of app icon objects (see below) |
| display | string  | (optional) ```fixed``` for a plain icon in an invisible top NavBar. ```icon``` for a plain button with no container. Leave blank for a button in a default fixed bootstrap navbar. |
| color | string | (optional) ```light``` for a light-colored AppsMenu icon for use with a dark background |

### App icon object

Each object inside the ```apps``` prop's array requires three values.

| property   |      type      |  description |
|------------:|-------------:|------:|
| icon | React Component | The bare React component for your app icon of choice. This component includes and automatically sizes according to the [react-icons library](https://react-icons.github.io/). |
| text | string | The text label for the app icon |
| link | string (url) | The navigable URL for the app link |
