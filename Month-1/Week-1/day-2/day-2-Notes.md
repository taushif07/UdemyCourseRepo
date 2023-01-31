(*)HTML Formatting Elements
Formatting elements were designed to display special types of text:-

<b> - Bold text
<strong> - Important text
<i> - Italic text
<em> - Emphasized text
<mark> - Marked text
<small> - Smaller text
<del> - Deleted text
<ins> - Inserted text
<sub> - Subscript text
<sup> - Superscript text


(*)HTML paragraphs and some references:-

<p> - HTML paragraph TAG
<hr> - horizontal Rules
<br> - line breaks
<pre> - (The HTML <pre> element defines preformatted text.
The text inside a <pre> element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks:)

(*)HTML styles:-

The HTML style attribute is used to add styles to an element, such as color, font, size, and more.
Setting the style of an HTML element, can be done with the style attribute.
The HTML style attribute has the following syntax:
ex:-  <tagname style="property:value;"> 
The property is a CSS property. The value is a CSS value.

Property:-
Background-color --> The CSS background-color property defines the background color for an HTML element.
ex:- <h1 style="background-color:powderblue;">This is a heading</h1>
Text Color --> The CSS color property defines the text color for an HTML element.
ex:- <h1 style="color:blue;">This is a heading</h1>
Fonts --> (1) font-family --> The CSS font- 
              family property defines the 
              font to be used for an HTML 
              element.
              ex:- <p style="font- 
                   family:courier;">This is 
                   a paragraph.</p>
          (2) font-size --> The CSS font- 
              size property defines the 
              text size for an HTML 
              element.
              ex:- <p style="font- 
                   size:160%;">This is a 
                   paragraph.</p>
          (3) text-align --> The CSS text- 
              align property defines the 
              horizontal text alignment for 
              an HTML element.
              ex:- <h1 style="text- 
                   align:center;">Centered 
                   Heading</h1>

(*)HTML bullet list:-

(1) The Unordered List :- 

The <ul> HTML element represents an unordered list of items, typically rendered as a bulleted list.

ex:-<ul>
    <li>Milk</li>
    <li>Cheese
        <ul>
            <li>Blue cheese</li>
            <li>Feta</li>
        </ul>
    </li>
</ul>

Attributes--> (1) type -> This attribute sets the bullet style for the list.
     these are:- circle, disc, square

(2) The Ordered List :-

The <ol> HTML element represents an ordered list of items — typically rendered as a numbered list.

ex:- <ol>
  <li>Mix flour, baking powder, sugar, and salt.</li>
  <li>In another bowl, mix eggs, milk, and oil.</li>
  <li>Stir both mixtures together.</li>
  <li>Fill muffin tray 3/4 full.</li>
  <li>Bake for 20 minutes.</li>
</ol>


Attributes--> 
(1) reversed -> This Boolean attribute specifies that the list's items are in reverse order. Items will be numbered from high to low.

(2) start -> An integer to start counting from for the list items. 

(3) type -> Sets the numbering type:

a for lowercase letters
A for uppercase letters
i for lowercase Roman numerals
I for uppercase Roman numerals
1 for numbers (default)

(*)HTML Images :-

The HTML <img> tag is used to embed an image in a web page.

Images are not technically inserted into a web page; images are linked to web pages. The <img> tag creates a holding space for the referenced image.

The <img> tag is empty, it contains attributes only, and does not have a closing tag.

The <img> tag has two required attributes:

src - Specifies the path to the image
alt - Specifies an alternate text for the image.

syntax-> <img src="url" alt="alternatetext">

src attributes --> The required src attribute specifies the path (URL) to the image.

alt attributes --> The required alt attribute provides an alternate text for an image, if the user for some reason cannot view it.

(*) HTML Images size- Width and Height and style attributes:-

ex:- <img src="img_girl.jpg" alt="Girl in a jacket" style="width:500px;height:600px;">

ex:- <img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">

(*) HTML Image Floating:- 

Use the CSS float property to let the image float to the right or to the left of a text.

ex:- <p><img src="smiley.gif" alt="Smiley face" style="float:right;width:42px;height:42px;">
The image will float to the right of the text.</p>

ex:- <p><img src="smiley.gif" alt="Smiley face" style="float:left;width:42px;height:42px;">
The image will float to the left of the text.</p>

 (*) HTML Links - HyperLinks:-

 The HTML <a> tag defines a hyperlink. It has the following syntax:
 <a href="url">link text</a>

 By default, links will appear as follows in all browsers:

An unvisited link is underlined and blue
A visited link is underlined and purple
An active link is underlined and red.

Target Attributes:- 

The target attribute specifies where to open the linked document.

The target attribute can have one of the following values:

_self - Default. Opens the document in the same window/tab as it was clicked
_blank - Opens the document in a new window or tab
_parent - Opens the document in the parent frame
_top - Opens the document in the full body of the window


Link to an Email Address:- 

Use mailto: inside the href attribute to create a link that opens the user's email program (to let them send a new email):

ex:- <a href="mailto:someone@example.com">Send email</a>

