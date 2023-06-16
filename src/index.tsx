import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './fonts/PressStart2P-Regular.ttf';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

const needsToBeBlacklisted = (src: any, type: any) => {
    return true;
}


const observer = new MutationObserver(mutations => {
    mutations.forEach(({addedNodes}) => {
        addedNodes.forEach(node => {
            // For each added script tag
            // @ts-ignore
            if (node.nodeType === 1 && node.tagName === 'SCRIPT') {
                try {
                    // @ts-ignore
                    const src = node.src || ''
                    // @ts-ignore
                    const type = node.type
                    // If the src is inside your blacklist
                    if (needsToBeBlacklisted(src, type)) {
                        // Blocks the script tag execution in Safari, Chrome, Edge & IE
                        // @ts-ignore
                        node.type = 'javascript/blocked'


                        const beforeScriptExecuteListener = function (event: any) {
                            // Prevent only marked scripts from executing
                            // @ts-ignore
                            if (node.getAttribute('type') === 'javascript/blocked')
                                event.preventDefault()
                            node.removeEventListener('beforescriptexecute', beforeScriptExecuteListener)
                        }
                        node.addEventListener('beforescriptexecute', beforeScriptExecuteListener)

                        // Unnecessary, but cleaner: remove the node from the DOM
                        // @ts-ignore
                        node.parentElement.removeChild(node)
                    }
                } catch (e) {

                }
            }
        })
    })
})

// Starts the monitoring
observer.observe(document.documentElement, {
    childList: true,
    subtree: true
})



