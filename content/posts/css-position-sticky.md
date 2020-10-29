---
title: CSS Position Sticky
description: ""
category: "Web Development"
tags:
    - "CSS"
    - "Web Development"
date: "2019-08-11T20:00:00.000Z"
path: "/blog/css-position-sticky"
image: "/images/posts/css-position-sticky/1.gif"
draft: false
source: "internal"
---
If you don’t know already, position sticky is the new bad boy in CSS. It is made to keep your elements stay in a fixed position and switch back to relative positioning based on the scroll.

For example, when you want to keep your nav below the logo when the user lands on the page. But when the user scrolls down, keep it fixed to the top of the window. If you’re using JS to achieve this by changing between position fixed and relative, then guess what this post is going to make your life 10 times easier.

First, a backstory as to how I can about writing this post.

## Backstory

So if you’re reading this on my website on a desktop, you might notice that there is a fixed block on the left and the text on right scrolls. For those of you who are not, this is what it looks like.

![Position Sticky Image](/images/posts/css-position-sticky/2.jpg)

And so while I was coding this I just couldn’t get to make it work. I spent about 5-6 hours on this before I could get this right.

Honestly, this was the most annoying thing to find answers for. There are a bunch of answers on StackOverflow but those didn’t work for me. Like those always work and if they don’t then there is nowhere else to go. Literally!

Well, spoiler alert it worked in the end. But along the way, I learned some rules for position sticky which I’ll share in this post so you don’t have to spend 5-6 hours figuring out the same things.

## Using Bootstrap?

Okay, so this is where I messed up. If you’re bootstrap there are a couple of things you need to look for, overflow and flexbox.

In bootstrap, if you are trying to achieve one side to be sticky and another side to be scrolling. Then your HTML should look like this

```html
<div class="row">
  <div class="col-md-4 sticky"></div> <!-- Sticky -->
  <div class="col-md-8"></div>
</div>
```

For both of these solutions, you need to make sure that the sticky element is not taking the full height of the parent div. By default, it is always set to take the full height so we will have to overwrite that.

```css
.sticky {
  align-self: flex-start;
}
```

Overflow can be another nightmare. According to position sticky rules, you should not have any overflow set on any of the sticky element’s parents. Remember, any of the parents.

Bootstrap has its own styles, so it adds overflow auto or hidden on some of the elements. One such is `section` tag, which has an overflow property set from bootstrap’s styles. If it is one of the tags you’re using then simply target that particular element in CSS and overwrite the overflow property.

```html
<section class="sticky-wrapper">
  <div class="container">
    <div class="row">
      <div class="col-md-4 sticky"></div> <!-- Sticky -->
      <div class="col-md-8"></div>
    </div>
  </div>
</div>
```

```css
.sticky-wrapper {
  overflow: unset;
}
```

## Don’t forget the top

Ya….., definately don’t. This is also one of the breaking points for sticking your element. When you define position sticky, you should also define a top: something; property. This top number is space from top of the window where your element will stick.

```css
.sticky {
  position: sticky;
  top: 0px;
}
```

## What about sticking to bottom?

Don’t worry guys, I thought of ya’ll as well.

Simply replace the top property by bottom and your element will stick to the bottom of the screen. Similar to the top property the bottom will also define the space between the bottom of your screen the bottom of the sticky element.

```html
<div class="row">
  <div class="col-md-4 sticky bottom"></div> <!-- Sticky -->
  <div class="col-md-8"></div>
</div>
```

```css
.sticky {
  position: sticky;
}
.bottom {
  align-self: flex-end;
  bottom: 0px;
}
```

At this point, your sticky element should be sticking. Otherwise, you haven’t followed the instructions correctly.

There are some more technicalities of position sticky that we will cover below. These aren’t necessary but helpful to know.

## Sticky Container

The sticky container is just as important as the sticky element itself. Unlike the sticky element, its container is not defined by a CSS property. It’s just the direct parent of the sticky element.

One thing to remember is that the sticky container is the scope of the sticky element. And the sticky element would never go out of its container. It will remain sticky as long as its parent is in the view.

To understand this, imagine a 2000px long container and in it, you have an element of 100px height to be sticky and it’s top to be 0. Now, as we said earlier, it will only be sticky in the scope of its parent. So if at start your container is about 50px down from the top of the window and you start scrolling, your element will scroll up and remain on top of the screen, as long as the space between its bottom and its parent’s bottom is greater than or equal to zero.

And so from there if you start to scroll back up because the distance will now increase, the element will stick again to the top of the screen. Until the distance between the top of your container and the top of the sticky element is greater than or equal to zero.

Something like this:

![Position Sticky Image](/images/posts/css-position-sticky/1.gif)

## Conclusion

Sticky elements were really complicated for me but now that I have done all the digging you can just refer to this post.

You only have to keep these things in mind:
* Overflow: Check that none of the element’s parents have any overflow property.
* Top: Always have a top or bottom property to define where the element would stick.
* Height: In flexbox, always set the align-items: flex-start so that element doesn’t have full height.

That’s it guys, hope this was helpful. Let me know if I missed anything out.