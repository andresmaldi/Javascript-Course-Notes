// Summary: Which Data Structure to Use?
// It is important to know where information comes from and what type of data structure to use:

// Sources of Data
// From the program itself: Data wirtten directly in source code (e.g. status messages)
// From the UI: Data input form the user written in the DOM (e.g. tasks in a todo app)
// From an external source: Data fetched from a web API (e.g. recipe objects)

// API stands for Application Programming Interface
// Web APIs serve to get information from all around the web, such as infromation about data from other websites and applications.

// All of this data is then collected into Collections of Data

// Collections of data are then stored into Data Structures, which we know, are four main ones (two of which are new): Arrays, Objects, Sets, and Maps.

// When to use which?
// If we need a simple list of values, we could use an arrays or a set.
// If we need a key value pair, such as for describing the values, we can use Objects or Maps.

// Arrays vs. Sets

// When should you use Arrays?
// You should use arrays when you need an ordered list of values that might contain duplicates
// Also when you need to manipulate data.

// When should you use Sets?
// You should use sets when you need to work with unique values
// Also when high-performance is important
// Finally, you should use sets when you wish to remove duplicates from an array

// Objects vs. Maps

// When should you use Objects?
// Objecst, despite being less improved than Maps have been the traditional way of using the key value pair data structure. For its continous use over the years, people say Objects have been "abused".
// It is, however, easier to write and access values using the dot(.) or brackets([])
// Objects should be used when functions(methods) are to be included
// Also, when working with JSON, it is better to use Objects, since they can be converted to Maps easily.

// When to use Maps?
// Maps offer a better performance.
// Their keys can hold any data type
// It is easy to iterate over them
// Finally, it is easier to compute their size.
// Maps should be used if you just need to map keys to values and, especially, when you need keys that are not strings.
