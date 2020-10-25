---
title: IOS Icons with Only One Div Tag
description: ""
category: "Web Development"
tags:
    - "CSS"
    - "Web Development"
date: "2019-08-11T20:00:00.000Z"
path: "/blog/ios-icons-with-only-one-div-tag"
image: "/images/posts/ios-icons-with-only-one-div-tag/featured.jpg"
draft: false
source: "internal"
---
These are all the icons that we're gonna be coving in this post. Each of these icons will be created using just a single <div> tag. So let's jump into it.

![IOS Icons](/images/posts/ios-icons-with-only-one-div-tag/icons.jpg)

See this <a href="https://codepen.io/shubhsheth/pen/ENJjxZ" target="_blank">codepen</a> for all the icons, feel free to fork it for updates or addition of new icons.

## Setup

```html
<div class="icon camera"></div>
<div class="icon calendar"></div>
<div class="icon notes"></div>
<div class="icon maps"></div>
<div class="icon weather"></div>
<div class="icon youtube"></div>
<div class="icon facebook"></div>
<div class="icon flickr"></div>
<div class="icon music"></div>
<div class="icon skype"></div>
<div class="icon pandora"></div>
<div class="icon instagram"></div>
<div class="icon safari"></div>
<div class="icon message"></div>
<div class="icon wallet"></div>
```

```css
.icon {
  margin: 20px;
  display: inline-block;
  position: relative;
  border-radius: 25%;
  width: 100px;
  height: 100px;
}
```

## Icons

### Camera

```css
.camera{
  background-color: #c3c3c3;
}
.camera:before{
  content: "";
  position: absolute;
  background-color: #4139aa;
  width: 17px;
  height: 17px;
  border-radius: 50%;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  border: 9px solid #272451;
  box-shadow: 0px 0px 0px 7px #4c4b52, 
    0px 0px 0px 12px #fff,
    30px -37px 0px -14px #4c4c4c;
}
.camera:after{
  content: "";
  position: absolute;
  background-color: #9193a0;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  bottom: 48%;
  left: 54%;
  transform: translateX(-50%) translateY(-50%);
}
```

### Calendar

```css
.calendar{
  background: linear-gradient(to bottom, #fe5054, #fe5054 35%, #f5f5f5 30%);
}
.calendar:before{
  content: "MONDAY";
  position: absolute;
  font-family: sans-serif;
  color: #f5a198;
  top: 10px;
  left: 50%;
  transform: translateX(-50%);
}
.calendar:after{
  content: "25";
  position: absolute;
  color: #767676;
  font-family: monospace;
  font-size: 50px;
  font-weight: lighter;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
}
```

### Notes

```css
.notes{
  background: linear-gradient(180deg, #f27f63, #f27f63 35%, #ffe8a4 30%);
}
.notes:before{
  content: "";
  position: absolute;
  width: 7px;
  height: 7px;
  background: #ae9f70;
  border-radius: 50%;
  top: 43px;
  left: 12px;
  box-shadow: 
    0px 12px 0px 0px #ae9f70,
    0px 24px 0px 0px #ae9f70,
    0px 36px 0px 0px #ae9f70; 
}
.notes:after{
  content: "";
  position: absolute;
  width: 60px;
  height: 2px;
  background: #ae9f70;
  top: 46px;
  left: 28px;
  box-shadow: 
    0px 12px 0px 0px #ae9f70,
    0px 24px 0px 0px #ae9f70,
    0px 36px 0px 0px #ae9f70; 
}
```

### Maps

```css
.maps{
  background: linear-gradient(180deg, #faa64c 65%, #ba7b3a 65%, #ba7b3a 80%,  #faa64c 80%);
}
.maps:before{
  content: "";
  position: absolute;
  width: 0; 
  height: 0; 
  border-left: 14px solid transparent;
  border-right: 14px solid transparent;
  border-top: 20px solid #fdfdfd;
  left: 50%;
  top: 53px;
  transform: translateX(-50%);
}
.maps:after{
  content: "";
  position: absolute;
  background: #faa64c;
  width: 23px;
  height: 23px;
  border: 7px solid #fdfdfd;
  border-radius: 50%;
  left: 50%;
  top: 22px;
  transform: translateX(-50%);
}
```

### Weather

```css
.weather{
  background: #46aaeb;
}
.weather:before{
  content: "";
  position: absolute;
  width: 40px; 
  height: 40px;
  background: #fff;
  top: 30px;
  left: 37px;
  border-radius: 50%;
  box-shadow: 17px 15px 0px -8px #fff,
    -26px 12px 0px -5px #fff,
    -18px -13px 0px -4px #fdcd01;
}
.weather:after{
  content: "";
  position: absolute;
  width: 60px;
  height: 20px;
  background: #fff;
  left: 50%;
  top: 57px;
  transform: translateX(-50%);
  border-radius: 10px
}
```

### YouTube

```css
.youtube{
  background: #c70e0b;
}
.youtube:before{
  content: "";
  position: absolute;
  width: 70px;
  height: 45px;
  background: #fff;
  border-radius: 10px;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.youtube:after{
  content: "";
  position: absolute;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 16px solid #c70e0b;        
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

### Facebook

```css
.facebook{
  background: #3b5b9b;
}
.facebook:before{
  content: "f";
  position: absolute;
  color: #fff;
  font-size: 120px;
  font-family: sans-serif;
  font-weight: 600;
  right: 20%;
  bottom: -30%;
}
```

### Flickr

```css
.flickr{
  background: #e9e9e9;
}
.flickr:before{
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  left: 17.5%;
  transform: translateY(-50%);
  background: #1b72cc;
  border-radius: 50%;
}
.flickr:after{
  content: "";
  position: absolute;
  width: 30px;
  height: 30px;
  top: 50%;
  right: 17.5%;
  transform: translateY(-50%);
  background: #ff0084;
  border-radius: 50%;
}
```

### Music

```css
.music{
  background: linear-gradient(180deg, #fe467a, #fc7447);
  font-size: 85px;
  color: #fff;
}
.music:before{
  content: "♫";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

### Skype

```css
.skype{
  background: #0cb2ee;
}
.skype:before{
  content: "";
  position: absolute;
  background: #fff;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  box-shadow: 13px 13px 0px -8px #fff, -13px -13px 0px -8px #fff;
}
.skype:after{
  content: "S";
  position: absolute;
  font-family: sans-serif;
  color: #0cb2ee;
  font-size: 40px;
  font-weight: 700;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
}
```

### Pandora

```css
.pandora{
  background: linear-gradient(180deg, #f3f4f6, #cdd3da);
}
.pandora:before{
  content: "P";
  position: absolute;
  font-size: 80px;
  color: #0e69a0;
  font-family: sans-serif;
  font-weight: 600;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

### Instagram

```css
.instagram{
  background: -webkit-radial-gradient(32% 106%, circle cover, rgb(255, 225, 125) 0%, rgb(255, 205, 105) 10%, rgb(250, 145, 55) 28%, rgb(235, 65, 65) 42%, transparent 82%), linear-gradient(-45deg, rgb(35, 75, 215) 12%, rgb(195, 60, 190) 58%);
}
.instagram:before{
  content: "";
  position: absolute;
  width: 60px;
  height: 60px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 7px solid #fff;
  border-radius: 35%;
}
.instagram:after{
  content: "";
  position: absolute;
  width: 18px;
  height: 18px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 7px solid #fff;
  border-radius: 50%;
  box-shadow: 17px -19px 0px -12px #fff;
}
```

### Safari

```css
.safari{
  background: #ededed;
}
.safari:before{
  content: "";
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: linear-gradient(180deg, #96e9fc, #0c96e5);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.safari:after{
  content: "";
  position: absolute;
  width: 11px; 
  height: 37px;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) skewY(108deg);
  background: linear-gradient(-107deg, #ef6154, #ef6154 50%, #fff 50%, #fff);
}
```

### iMessage

```css
.message{
  background: linear-gradient(180deg, #6bfa86, #07ba21);
}
.message:before{
  content: "";
  position: absolute;
  width: 75px;
  height: 60px;
  border-radius: 50%;
  background: #fff;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.message:after{
  content: "";
  position: absolute;
  width: 0;
  height: 0;
  border-bottom: 15px solid #fff;
  border-left: 15px solid transparent;
  top: 65%;
  left: 50%;
  transform: translate(-220%, 0%) rotate(-15deg);
}
```

### Wallet

```css
.wallet{
  background: #1d1d22;
}
.wallet:before{
  content: "";
  position: absolute;
  width: 80px;
  height: 35px;
  background: #d9d7cb;
  border-radius: 10px;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 
    0px -12px 0px -5px #ef6c60,
    0px -18px 0px -5px #6ab22b,
    0px -23px 0px -5px #edb314,
    0px -27px 0px -5px #4696ba,
    0px -26px 0px 0px #d9d7cb,
    0px -20px 0px 0px #d9d7cb;
}
.wallet:after{
  content: "";
  position: absolute;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ef6c60;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```



























