# Responsive restaurant menus
This is a website for the restaurant 'Russ and Daughters'.
Everything is "Roaring Twenties"-themed.

![screenshot](https://paper-attachments.dropbox.com/s_10BA620165FE32DB3EE837212670E796E3D7D1FB3A7C3434F8B67BE0AF78582E_1558526458474_Screenshot+2019-05-22+at+14.00.15.png)

## Challenge 1
One of the challenges working on this was to use a specific methodology; I had to work with SMACCS.

This means my CSS file will consist of the following categories;

#### BASE
This will contain the 'defaults'; (almost) exclusively element selectors. Could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. It's the foundational CSS.

#### LAYOUT
This will contain the major components. Here, you divide the page into sections. They hold one or more modules together. Could include the header, sidebar, main, footer and ID's.

#### MODULES
This will contain the minor components; the reusable, modular parts of the design. They are the callouts, sidebar sections, product lists and so on. Could also include video thumbnails, tweets and many more.

#### STATE
This will contain the ways to describe how our modules or layouts will look when in a particular state. Hidden/expanded, active/inactive. Also about describing how a module would look in different views like the homepage vs inside page. Could also include keyframes and hovers.

#### THEME RULES
(similar to state) This will contain the ways to describe how modules or layouts might look like when switched to another theme. Most sites don't require a layer or theming, though. Could include a dark/light mode.

## Challenge 2
The other challenge was to choose a few restrictions whilst designing the page.

#### Two colours
I only made use of black/white and a gold-ish yellow colour. These colours are remarkable for the Great Gatsby-theme I decided to go for.

#### Responsive without media queries
There are no media queries used; I used flexbox to make this website responsive.

#### No squares, no rectangles, no circles, no triangles
This one I tried to follow at first by using none of these shapes by default but I did use them inside some illustrations after all. I used a slight skew to transform the menu categories into paralellograms instead of rectangles but that feels a bit like cheating on the restriction so this restriction will only be a bit of an extra 'restriction'.
