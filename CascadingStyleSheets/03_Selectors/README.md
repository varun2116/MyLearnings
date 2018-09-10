# Selectors

In CSS, selectors are used to target the HTML elements on our web pages that we want to style. There are a wide variety of CSS selectors available, allowing for fine grained precision when selecting elements to style.

<hr />

## The basics

![](img/css-syntax-ruleset.png)

### Different types of selectors

Selectors can be divided into the following categories:

* [**Simple selectors**](01_Simple_Selectors): Match one or more elements based on element type, `class`, or `id`.

* [**Attribute selectors**](02_Attribute_Selectors): Match one or more elements based on their `attributes/attribute values`.

* [**Pseudo-classes**](03_Pseudo_Classes_Elements): Match one or more elements that exist in a certain state, such as an element that is being hovered over by the mouse pointer, or a checkbox that is currently disabled or checked, or an element that is the first child of its parent in the DOM tree.

* [**Pseudo-elements**](03_Pseudo_Classes_Elements): Match one or more parts of content that are in a certain position in relation to an element, for example the first word of each paragraph, or generated content appearing just before an element.

* [**Combinators**](04_Combinators_Multi_Selectors): These are not exactly selectors themselves, but ways of combining two or more selectors in useful ways for very specific selections. So for example, you could select only paragraphs that are direct descendants of divs, or paragraphs that come directly after headings.

* [**Multiple selectors**](04_Combinators_Multi_Selectors): Again, these are not separate selectors; the idea is that you can put multiple selectors on the same CSS rule, separated by commas, to apply a single set of declarations to all the elements selected by those selectors.
