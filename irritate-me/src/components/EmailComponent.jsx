const EmailComponent = () => {
    const keyMap = {
        'a': 'z',
        'b': 'y',
        'c': 'x',
        'd': 'w',
        'e': 'v',
        'f': 'u',
        'g': 't',
        'h': 's',
        'i': 'r',
        'j': 'q',
        'k': 'p',
        'l': 'o',
        'm': 'n',
        'n': 'm',
        'o': 'l',
        'p': 'k',
        'q': 'j',
        'r': 'i',
        's': 'h',
        't': 'g',
        'u': 'f',
        'v': 'e',
        'w': 'd',
        'x': 'c',
        'y': 'b',
        'z': 'a'
    };
    const keyhandler = (e)=>{
        if (e.key in keyMap) {
            e.preventDefault();
        const keyPressed = e.key.toLowerCase();
    const newText = keyMap[keyPressed] || keyPressed;

    document.getElementById("text").value += newText;
        }
        
    }

    return ( 
        <div className="passdiv">
        <input type="text" name="" id="text" onKeyDown={keyhandler} />
      
    </div>
     );
}
 
export default EmailComponent;