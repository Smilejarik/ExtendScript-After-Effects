//json library connect:
//"object"!=typeof JSON&&(JSON={}),function(){"use strict";function f(t){return 10>t?"0"+t:t}function this_value(){return this.valueOf()}function quote(t){return rx_escapable.lastIndex=0,rx_escapable.test(t)?'"'+t.replace(rx_escapable,function(t){var e=meta[t];return"string"==typeof e?e:"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+t+'"'}function str(t,e){var r,n,o,u,f,a=gap,i=e[t];switch(i&&"object"==typeof i&&"function"==typeof i.toJSON&&(i=i.toJSON(t)),"function"==typeof rep&&(i=rep.call(e,t,i)),typeof i){case"string":return quote(i);case"number":return isFinite(i)?String(i):"null";case"boolean":case"null":return String(i);case"object":if(!i)return"null";if(gap+=indent,f=[],"[object Array]"===Object.prototype.toString.apply(i)){for(u=i.length,r=0;u>r;r+=1)f[r]=str(r,i)||"null";return o=0===f.length?"[]":gap?"[\n"+gap+f.join(",\n"+gap)+"\n"+a+"]":"["+f.join(",")+"]",gap=a,o}if(rep&&"object"==typeof rep)for(u=rep.length,r=0;u>r;r+=1)"string"==typeof rep[r]&&(n=rep[r],o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));else for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(o=str(n,i),o&&f.push(quote(n)+(gap?": ":":")+o));return o=0===f.length?"{}":gap?"{\n"+gap+f.join(",\n"+gap)+"\n"+a+"}":"{"+f.join(",")+"}",gap=a,o}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","	":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(t,e,r){var n;if(gap="",indent="","number"==typeof r)for(n=0;r>n;n+=1)indent+=" ";else"string"==typeof r&&(indent=r);if(rep=e,e&&"function"!=typeof e&&("object"!=typeof e||"number"!=typeof e.length))throw new Error("JSON.stringify");return str("",{"":t})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(t,e){var r,n,o=t[e];if(o&&"object"==typeof o)for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(n=walk(o,r),void 0!==n?o[r]=n:delete o[r]);return reviver.call(t,e,o)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(t){return"\\u"+("0000"+t.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}();

app.beginUndoGroup("Batch Processing");

//Open txt file and red by line

var myTextFile = File.openDialog("Please select input text file.");
  if (myTextFile != null){

    // open file
    var fileOK = myTextFile.open("r");
    if (fileOK){

      // read text lines and create text layer for each
      // until end-of-file is reached

      var aepPath;
      while (!myTextFile.eof){
        aepPath = myTextFile.readln();
        open_ae_file(aepPath);
      }

      // close the file before exiting

      myTextFile.close();

    }else{
      alert("File open failed!");
    }
 
  }else{
    alert("No text file selected.");
  }



// Open next AE file
function open_ae_file(aepPath){
   // app.open();
    
    var my_file = new File(aepPath);
        if (my_file.exists){
            new_project = app.open(my_file);
        if (new_project){
           // Everything you need to do for every file is here START: 
           
           app.project.removeUnusedFootage();
           
           find_fonts ();
           
            // Everything you need to do for every file is here END: 
                }
            }
        
  //  var myNewFile = new File("~/Desktop/myNewFile.aep");
  // Save opened AE with same name
    app.project.save(my_file);
    
    }

//Additional functions to be used inside loop for every file
function find_fonts(){
               
                
                     var Layer_Found = 0;
                     
          //  alert("Going to scale Text!");
         
                 for (var k = 1; k <= app.project.numItems; k++){
                                if (app.project.item(k) instanceof CompItem) {
                                    
                                     var myLayers = app.project.item(k).layers;
                                     
                                            for (var i = 1; i <= myLayers.length; i ++) { 
                                                
                                                
                                                var CurrLayer = app.project.item(k).layer(i);
                                                // REMOVE templater
                                                 if (CurrLayer.Effects.property("Templater Settings")){
                                                                                    //deleteTemplater Effect of this layer as we will attach to copy
                                                                                          CurrLayer.Effects.property("Templater Settings").remove();
                                                                                      }
                                                
                                                if ((CurrLayer.property("Source Text") !== null)){   // for text layer                                                                                       
                                                       
                                                         Layer_Found = 1;
                                                         var textProp = CurrLayer.property("Source Text");
                                                         var textDocument = textProp.value;
                                                         var curr_font = textDocument.font; // read current font
                                                         
                                                         write_log(curr_font);
                                                         
                                                         }
                                                
                                                
                                                }
                                            }
                                        }
                                    if (Layer_Found == 0){
                                      //  alert("No Text to Scale");
                                      
                                        }
       
                 
    }
//===== end of function

function write_log(curr_font){
        var logFile = new File("C:/prj/fonts_list_log.txt");
        logFile.open("a");
        logFile.writeln(curr_font);
        logFile.close();
}
// -- END of additional functions

app.endUndoGroup();