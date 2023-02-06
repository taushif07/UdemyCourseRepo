(*)HTML Table:- 

The <table> HTML element represents tabular data — that is, information presented in a two-dimensional table comprised of rows and columns of cells containing data.

ex- <table>
    <thead>
        <tr>
            <th colspan="2">The table header</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>The table body</td>
            <td>with two columns</td>
        </tr>
    </tbody>
</table>

Attributes--> (deprecated attributes)
(i) align- This enumerated attribute indicates how the table must be aligned inside the containing document. It may have the following values:
       left: the table is displayed on the left 
             side of the document;             
       center: the table is displayed in the 
               center of the document;
       right: the table is displayed on the 
              right side of the document.

(ii)   bgcolor:  The background color of the table.            

(iii) border: 

(iv) cellpadding: This attribute defines the space between the content of a cell and its border, displayed or not.

(v) cellspacing: This attribute defines the size of the space between two cells in a percentage value or pixels. 

(vi) width: This attributes defines the width of the table. 

(*) HTML Forms:-

The <form> HTML element represents a document section containing interactive controls for submitting information.

ex: <form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

Attributes:-- 
(i) action: The URL that processes the form submission. This value can be overridden by a formaction attribute on a <button>, <input type="submit">, or <input type="image"> element. This attribute is ignored when method="dialog" is set.

(ii) target: Indicates where to display the response after submitting the form.
The following keywords have special meanings:

_self (default): Load into the same browsing context as the current one.

_blank: Load into a new unnamed browsing context. This provides the same behavior as setting rel="noopener" which does not set window.opener.

_parent: Load into the parent browsing context of the current one. If no parent, behaves the same as _self.

_top: Load into the top-level browsing context (i.e., the browsing context that is an ancestor of the current one and has no parent). If no parent, behaves the same as _self.


(*) HTML Inputs:-

The <input> HTML element is used to create interactive controls for web-based forms in order to accept data from the user; a wide variety of types of input data and control widgets are available, depending on the device and user agent. The <input> element is one of the most powerful and complex in all of HTML due to the sheer number of combinations of input types and attributes.

ex: <label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">

Attributes: 

(i) type: How an <input> works varies considerably depending on the value of its type attribute, hence the different types are covered in their own separate reference pages. If this attribute is not specified, the default type adopted is text.

Type--	Description	Basic Examples
button--	A push button with no default behavior displaying the value of the value attribute, empty by default.	

checkbox--	A check box allowing single values to be selected/deselected.	

color--	A control for specifying a color; opening a color picker when active in supporting browsers.	

date--	A control for entering a date (year, month, and day, with no time). Opens a date picker or numeric wheels for year, month, day when active in supporting browsers.	

datetime-local--	A control for entering a date and time, with no time zone. Opens a date picker or numeric wheels for date- and time-components when active in supporting browsers.	

email--	A field for editing an email address. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.	

file--	A control that lets the user select a file. Use the accept attribute to define the types of files that the control can select.	

hidden--	A control that is not displayed but whose value is submitted to the server. There is an example in the next column, but it's hidden!	

image--	A graphical submit button. Displays an image defined by the src attribute. The alt attribute displays if the image src is missing.	

month--	A control for entering a month and year, with no time zone.	

number--	A control for entering a number. Displays a spinner and adds default validation. Displays a numeric keypad in some devices with dynamic keypads.	

password--	A single-line text field whose value is obscured. Will alert user if site is not secure.	

radio--	A radio button, allowing a single value to be selected out of multiple choices with the same name value.	

range--	A control for entering a number whose exact value is not important. Displays as a range widget defaulting to the middle value. Used in conjunction min and max to define the range of acceptable values.	

reset--	A button that resets the contents of the form to default values. Not recommended.	

search--	A single-line text field for entering search strings. Line-breaks are automatically removed from the input value. May include a delete icon in supporting browsers that can be used to clear the field. Displays a search icon instead of enter key on some devices with dynamic keypads.	

submit--	A button that submits the form.	

tel--	A control for entering a telephone number. Displays a telephone keypad in some devices with dynamic keypads.	

text--	The default value. A single-line text field. Line-breaks are automatically removed from the input value.	

time--	A control for entering a time value with no time zone.	

url--	A field for entering a URL. Looks like a text input, but has validation parameters and relevant keyboard in supporting browsers and devices with dynamic keyboards.	

week--	A control for entering a date consisting of a week-year number and a week number with no time zone.	

