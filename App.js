const renderRoot= document.getElementById("root");
// const heading= React.createElement("h1", {id: "heading"}, "Hello World!")// createElement() takes 3 parameters- tags, object, what to put inside the tag.
//                                         // to provide attributes to the tags
//                                         // a we did in HTML, we used to provide id's and classes
// const root= ReactDOM.createRoot(renderRoot);

// root.render(heading); // convert the object into h1 tag and render it in DOM

// nested react elements - 

/***
 * as we used to nest html elements before as - 
 * 
 * <div id="parent">
 * 
 * <div id="child">
 * <h1>Hello! </h1>
 * </div>
 * </div>
 * 
 * HOW TO DO IT IN REACT THEN?  
 */

const nesting= React.createElement("div",
 {id: "parent"}, [React.createElement("div",
 {id: "child"}, 
 [React.createElement("h1", {}, "I'm an h1 tag"),
  React.createElement("h2", {}, "Howdy!")]), React.createElement("div",
  {id: "child"}, 
  [React.createElement("h1", {}, "I'm an h1 tag"),
   React.createElement("h2", {}, "Howdy!")])]                  // if we have h2 as sibling
                                                                // in same div, or we have 
                                                                // multiple children inside one
                                                                // div, then we can use array
  );

  console.log(nesting);
  const root= ReactDOM.createRoot(renderRoot);
  root.render(nesting);