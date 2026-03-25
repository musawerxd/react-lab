




// let root = document.getElementById("root");

// React handles:
// 1. Rendering (UI → DOM)
// 2. Updating (when state changes)
// 3. Syncing (keeping UI consistent with state)



// ==========================
// 3 CORE PILLARS
// ==========================

// 1. COMPONENTS
// Components are functions that return UI (NOT actual DOM, just description)

// function App() {
//     return "<h1>This is my custom React app</h1>";
// }



// 2. STATE
// Data that changes over time and triggers re-render

// let count = 0;



// 3. RENDERING ENGINE
// Converts UI descriptions into real DOM
// Updates ONLY the changed parts (not full re-render)



// ==========================
// DIFFING (IMPORTANT FIX)
// ==========================

// Diffing = comparing OLD virtual DOM vs NEW virtual DOM
// React does NOT compare real DOM directly

// Steps:
// 1. Create new virtual DOM
// 2. Compare with previous virtual DOM
// 3. Find differences
// 4. Update only those parts in real DOM



// ==========================
// WHAT WE NEED TO BUILD MINI REACT
// ==========================

// 1. createElement → to describe UI
// 2. render → convert to real DOM
// 3. diff → compare old vs new
// 4. update system → re-render on state change

// let root = document.getElementById("root");

// function createElement(type, props, ...children) {
//     return {
//         type,
//         props: {
//             ...props,
//             children: children.map(child =>
//                 typeof child === "object"
//                     ? child
//                     : createTextElement(child)
//             )
//         }
//     };
// }

// function createTextElement(text) {
//     return {
//         type: "TEXT_ELEMENT",
//         props: {
//             nodeValue: text,
//             children: []
//         }
//     };
// }

// function render(appendingElement, targetElement) {
//     const dom =
//         appendingElement.type === "TEXT_ELEMENT"
//             ? document.createTextNode(appendingElement.props.nodeValue)
//             : document.createElement(appendingElement.type);

//     Object.keys(appendingElement.props)
//         .filter(key => key !== "children")
//         .forEach(name => {
//             dom[name] = appendingElement.props[name];
//         });

//     appendingElement.props.children.forEach(child =>
//         render(child, dom)
//     );

//     targetElement.appendChild(dom);
// }

// let newEl = createElement("h1", null, "Hello!");

// render(newEl, root);





// how a react Element looks foq TAG 'a'

let root = document.getElementById("root");


// function reactRender(reactElement, root) {
//     const DomElement = document.createElement(reactElement.type)
//     DomElement.innerText = reactElement.children
//     DomElement.setAttribute("href", reactElement.props.href)
//     DomElement.setAttribute("target", reactElement.props.target)

//     root.appendChild(DomElement)
// }


function reactRender(reactElement, root) {
    const DomElement = document.createElement(reactElement.type);
    DomElement.innerText = reactElement.children;


    for (const key in reactElement.props) {
        if (key === "children") continue;
        DomElement.setAttribute(key, reactElement.props[key])
    }


    root.appendChild(DomElement);
}




const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: "Google Link"
}


reactRender(reactElement, root)



