function customRander(reactElement , root){
   const domElement = document.createElement(reactElement.type);
   domElement.innerHTML = reactElement.children;
   domElement.setAttribute('href',reactElement.props.href);
   domElement.setAttribute('target',reactElement.props.target);

   root.appendChild(domElement);
}

const reactElement = {
    type : 'a',
    props: {
        href: "https://youtube.com",
        target: '_blank'
    },
    children: 'click to visit Youtube '
} 


const root = document.querySelector("#root");


customRander(reactElement , root ) 